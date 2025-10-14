"use client";

import {
	BookOpen,
	Home,
	BookMarked,
	Brain,
	MessageSquare,
	Globe,
	Sun,
	Moon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./toggle-mode";

export function Header() {
	return (
		<header className="border-b bg-background/80 backdrop-blur-sm ">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-2 hover:opacity-80 transition-opacity"
					>
						<BookOpen className="w-5 h-5" />
						<span className="font-bold text-lg">E-Learning</span>
					</Link>
					<nav className="hidden md:flex items-center gap-6 text-sm">
						<Link href="/">
							<Button
								variant={"link"}
								className="hover:no-underline p-2 hover:rounded-lg hover:bg-accent"
							>
								<Home className="w-4 h-4" />
								Trang chủ
							</Button>
						</Link>
						<Link href="/quiz">
							<Button
								variant={"link"}
								className="hover:no-underline p-2 hover:rounded-lg hover:bg-accent"
							>
								<Brain className="w-4 h-4" />
								Quiz
							</Button>
						</Link>
						<Link href="/blogs">
							<Button
								variant={"link"}
								className="hover:no-underline p-2 hover:rounded-lg hover:bg-accent"
							>
								<BookMarked className="w-4 h-4" />
								Thư viện
							</Button>
						</Link>
						<Link href="/feedback">
							<Button
								variant={"link"}
								className="hover:no-underline p-2 hover:rounded-lg hover:bg-accent"
							>
								<MessageSquare className="w-4 h-4" />
								Góp ý
							</Button>
						</Link>
						{/* </CHANGE> */}

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
						{/* </CHANGE> */}

						<ModeToggle />
						{/* </CHANGE> */}

						<Button>Đăng nhập</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
