import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  id: number
  title: string
  description: string
  image: string
  rating: number
  duration: string
  badge?: string
  badgeColor?: string
}

export function BlogCard({ title, description, image, rating, duration, badge, badgeColor }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {badge && <Badge className={`absolute top-3 left-3 ${badgeColor} text-white border-none`}>{badge}</Badge>}
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 leading-tight line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/blogs/${title.toLowerCase().replace(/\s+/g, "-")}`}>{title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">{description}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="default" className="w-full">
          <Link href={`/blogs/${title.toLowerCase().replace(/\s+/g, "-")}`}>Đọc thêm</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
