"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BlogCard } from "@/components/blog-card";
import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import MAP_DATA from "@/app/db/map";
import { useState } from "react";

export default function ResistanceWarsPage() {
	const [searchTerm, setSearchTerm] = useState("");

	// Transform database data to match BlogCard component props
	const allResistanceWars = MAP_DATA.map((resistance, index) => ({
		id: index + 1,
		title: resistance.name,
		description: resistance.description,
		image:
			resistance.id === "cuoc-khang-chien-chong-phap"
				? "/khangchienchongphap.jpg"
				: "/khangchienchongmy.jpg",
		rating: resistance.id === "cuoc-khang-chien-chong-phap" ? 4.9 : 4.8,
		duration: `${resistance.address.length} địa điểm`,
		badge:
			resistance.id === "cuoc-khang-chien-chong-phap"
				? "1945-1954"
				: "1954-1975",
		badgeColor:
			resistance.id === "cuoc-khang-chien-chong-phap"
				? "bg-red-500"
				: "bg-blue-500",
		mapId: resistance.id, // Add the map ID for linking
	}));

	// Filter wars based on search term
	const resistanceWars = allResistanceWars.filter(
		(war) =>
			war.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			war.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1">
				{/* Breadcrumb */}
				<section className="py-4 border-b bg-muted/50">
					<div className="container mx-auto px-4">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Link href="/" className="hover:text-primary transition-colors">
								Trang chủ
							</Link>
							<ChevronRight className="w-4 h-4" />
							<span className="text-primary font-medium">
								Các cuộc kháng chiến chống ngoại xâm
							</span>
						</div>
					</div>
				</section>

				{/* Hero Section */}
				<section className="py-12 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl">
							<div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
								Lịch sử kháng chiến
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
								Các cuộc kháng chiến chống ngoại xâm
							</h1>
							<p className="text-muted-foreground text-lg">
								Tìm hiểu về những cuộc kháng chiến anh dũng của dân tộc Việt Nam
								qua các thời kỳ lịch sử, từ cổ đại đến hiện đại.
							</p>
						</div>
					</div>
				</section>

				{/* Search Section */}
				<section className="py-8 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl mx-auto">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
								<input
									type="text"
									placeholder="Tìm kiếm cuộc kháng chiến..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
								/>
							</div>
							{searchTerm && (
								<p className="mt-3 text-sm text-muted-foreground text-center">
									Tìm thấy {resistanceWars.length} kết quả cho "{searchTerm}"
								</p>
							)}
						</div>
					</div>
				</section>

				{/* Content */}
				<section className="py-8">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
							{resistanceWars.length > 0 ? (
								resistanceWars.map((war) => <BlogCard key={war.id} {...war} />)
							) : (
								<div className="col-span-full text-center py-12">
									<Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
									<h3 className="text-xl font-semibold mb-2">
										Không tìm thấy kết quả
									</h3>
									<p className="text-muted-foreground">
										Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc
									</p>
								</div>
							)}
						</div>
					</div>
				</section>
			</main>

			{/* <ScrollToTop /> */}
		</div>
	);
}
