"use client";

import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

interface ParticlesBackgroundProps {
	className?: string;
}

export function ParticlesBackground({
	className = "",
}: ParticlesBackgroundProps) {
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		});
	}, []);

	const particleColor = useMemo(() => {
		const currentTheme = resolvedTheme || theme;
		return currentTheme === "dark" ? "#ffffff" : "#000000";
	}, [theme, resolvedTheme]);

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: "transparent",
				},
			},
			fullScreen: {
				enable: false,
				zIndex: 0,
			},
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push" as const,
					},
					onHover: {
						enable: true,
						mode: "repulse" as const,
					},
				},
				modes: {
					push: {
						quantity: 2,
					},
					repulse: {
						distance: 100,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: particleColor, // Thay đổi theo theme
				},
				links: {
					color: particleColor, // Thay đổi theo theme
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				move: {
					enable: true,
					speed: 1,
					straight: false,
				},
				number: {
					value: 50,
				},
				opacity: {
					value: 0.4,
				},
				shape: {
					type: "circle" as const,
				},
				size: {
					value: { min: 1, max: 3 },
				},
			},
			detectRetina: true,
		}),
		[particleColor] // Re-render khi màu thay đổi
	);

	return (
		<Particles
			className={className}
			id="hero-particles"
			options={options}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
			}}
		/>
	);
}
