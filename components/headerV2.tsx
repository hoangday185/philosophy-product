"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {
	BookMarked,
	Brain,
	Code,
	Globe,
	Home,
	MessageSquare,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

import React from "react";
import { ModeToggle } from "./toggle-mode";
import { Button } from "./ui/button";
import Link from "next/link";

const HeaderV2 = () => {
	const navItems = [
		{
			name: "Trang chủ",
			link: "/",
			icon: Home,
		},
		{
			name: "Bài viết",
			link: "/blogs",
			icon: Brain,
		},
		{
			name: "Ôn tập",
			link: "/review",
			icon: BookMarked,
		},
		// {
		// 	name: "Thư viện",
		// 	link: "/library",
		// 	icon: BookMarked,
		// },
		// {
		// 	name: "Góp ý",
		// 	link: "/feedback",
		// 	icon: MessageSquare,
		// },
		{
			name: "Công nghệ và thành viên",
			link: "/tech",
			icon: Code,
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div className="relative w-full mt-6">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
						{/* <NavbarButton variant="secondary">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="sm" className="gap-2">
										<Globe className="w-4 h-4" />
										Tiếng Việt
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
									<DropdownMenuItem>English</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</NavbarButton> */}
						<NavbarButton variant="secondary" className="dark:text-yellow-500">
							<ModeToggle />
						</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<Link
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								<span className="block">{item.name}</span>
							</Link>
						))}
						<div className="flex w-full flex-col gap-4">
							{/* <NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="primary"
							>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" size="sm" className="gap-2">
											<Globe className="w-4 h-4" />
											Tiếng Việt
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
										<DropdownMenuItem>English</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</NavbarButton> */}
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="primary"
							>
								<ModeToggle />
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>

			{/* Navbar */}
		</div>
	);
};

export default HeaderV2;
