"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useSpeechReader } from "@/hooks/use-speech-reader";
import { Volume2, Pause, Play, Loader2 } from "lucide-react";

type Tab = {
	title: string;
	value: string;
	content?: string | React.ReactNode | any;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
	secondaryContent,
	onTabChange,
	enableSpeech = true,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
	secondaryContent?:
		| React.ReactNode
		| ((activeTab: Tab, changeTab: (value: string) => void) => React.ReactNode);
	onTabChange?: (tab: Tab) => void;
	enableSpeech?: boolean;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
		onTabChange?.(newTabs[0]);

		// Reset speech reader khi chuyển tab
		reset();
	};

	// Hàm để change tab từ bên ngoài (by value)
	const changeTabByValue = (value: string) => {
		const idx = propTabs.findIndex((tab) => tab.value === value);
		if (idx !== -1) {
			moveSelectedTabToTop(idx);
		}
	};

	const [hovering, setHovering] = useState(false);

	// Speech Reader Hook
	const {
		isReading,
		isLoading,
		error,
		readContent,
		pause,
		resume,
		reset,
		isPaused,
	} = useSpeechReader();

	// Hàm đọc nội dung tab hiện tại
	const handleReadContent = () => {
		if (isReading && !isPaused) {
			pause();
		} else if (isPaused) {
			resume();
		} else {
			// Trích xuất text từ content
			const contentText = extractTextFromContent(active.content);
			readContent(contentText);
		}
	};

	// Hàm trích xuất text từ React Node
	const extractTextFromContent = (content: any): string => {
		if (typeof content === "string") {
			return content;
		}
		if (typeof content === "number") {
			return String(content);
		}
		if (!content) {
			return "";
		}

		// Nếu là React element, lấy text từ DOM
		try {
			// Tìm tab container sử dụng data attribute
			const tabsContainer = document.querySelector(
				'[data-tabs-container="true"]'
			);
			if (tabsContainer) {
				// Lấy tab đang active (idx = 0, data-tab-active="true")
				const activeTabContent = tabsContainer.querySelector(
					'[data-tab-active="true"]'
				);
				if (activeTabContent) {
					const textContent =
						activeTabContent.textContent ||
						(activeTabContent as HTMLElement).innerText;
					if (textContent && textContent.trim()) {
						return textContent.trim();
					}
				}
			}

			// Fallback: Return thông báo với tên tab
			return `Nội dung của tab ${active.title || active.value}`;
		} catch (error) {
			console.error("Error extracting text:", error);
			return `Nội dung của tab ${active.title || active.value}`;
		}
	};

	return (
		<>
			<div
				className={cn(
					"flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full mb-4 sm:mb-6",
					containerClassName
				)}
			>
				{propTabs.map((tab, idx) => (
					<button
						key={tab.title}
						onClick={() => {
							moveSelectedTabToTop(idx);
						}}
						onMouseEnter={() => setHovering(true)}
						onMouseLeave={() => setHovering(false)}
						className={cn(
							"relative px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base",
							tabClassName
						)}
						style={{
							transformStyle: "preserve-3d",
						}}
					>
						{active.value === tab.value && (
							<motion.div
								layoutId="clickedbutton"
								transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
								className={cn(
									"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
									activeTabClassName
								)}
							/>
						)}

						<span className="relative block text-black dark:text-white">
							{tab.title}
						</span>
					</button>
				))}
			</div>

			{/* Layout cho 2 phần content */}
			<div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 w-full">
				{/* Phần 1: FadeInDiv - Content của tabs */}
				<div className="w-full lg:w-1/2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
					<FadeInDiv
						tabs={tabs}
						active={active}
						key={active.value}
						hovering={hovering}
						className={cn("h-full", contentClassName)}
						enableSpeech={enableSpeech}
						isReading={isReading}
						isLoading={isLoading}
						isPaused={isPaused}
						error={error}
						handleReadContent={handleReadContent}
					/>
				</div>

				{/* Phần 2: Secondary Content - Component được truyền vào */}
				{secondaryContent && (
					<div className="w-full lg:w-1/2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
						{typeof secondaryContent === "function"
							? secondaryContent(active, changeTabByValue)
							: secondaryContent}
					</div>
				)}
			</div>
		</>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
	hovering,
	enableSpeech = true,
	isReading,
	isLoading,
	isPaused,
	error,
	handleReadContent,
}: {
	className?: string;
	key?: string;
	tabs: Tab[];
	active: Tab;
	hovering?: boolean;
	enableSpeech?: boolean;
	isReading?: boolean;
	isLoading?: boolean;
	isPaused?: boolean;
	error?: string | null;
	handleReadContent?: () => void;
}) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
	return (
		<div
			className="relative w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
			data-tabs-container="true"
			style={{ position: "relative" }}
		>
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -50 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn("w-full h-full absolute top-0 left-0", className)}
					data-tab-active={idx === 0}
				>
					{tab.content}
				</motion.div>
			))}

			{/* Nút điều khiển đọc nội dung bên trong FadeInDiv */}
			{enableSpeech && handleReadContent && (
				<div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-10 flex items-center gap-2">
					{error && (
						<span className="text-xs text-red-500 max-w-xs truncate bg-white dark:bg-zinc-900 px-2 py-1 rounded hidden sm:block">
							{error}
						</span>
					)}

					<button
						onClick={handleReadContent}
						disabled={isLoading}
						className={cn(
							"flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all",
							"bg-blue-500 hover:bg-blue-600 text-white",
							"disabled:opacity-50 disabled:cursor-not-allowed",
							"shadow-md hover:shadow-lg text-xs sm:text-sm"
						)}
						title={
							isLoading
								? "Đang xử lý..."
								: isReading && !isPaused
								? "Tạm dừng"
								: isPaused
								? "Tiếp tục"
								: "Đọc nội dung"
						}
					>
						{isLoading ? (
							<Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
						) : isReading && !isPaused ? (
							<Pause className="h-3 w-3 sm:h-4 sm:w-4" />
						) : isPaused ? (
							<Play className="h-3 w-3 sm:h-4 sm:w-4" />
						) : (
							<Volume2 className="h-3 w-3 sm:h-4 sm:w-4" />
						)}
						<span className="font-medium hidden sm:inline">
							{isLoading
								? "Đang xử lý..."
								: isReading && !isPaused
								? "Tạm dừng"
								: isPaused
								? "Tiếp tục"
								: "Đọc"}
						</span>
					</button>
				</div>
			)}
		</div>
	);
};
