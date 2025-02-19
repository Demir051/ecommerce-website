import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Layers, 
  Package, 
  ShoppingBag, 
  Tag,
  Percent,
  TrendingUp,
  Star,
  Clock,
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  BookOpen, 
  Sparkles 
} from "lucide-react"
import { categories } from "@/lib/data"
import React from "react"

// Add categoryIcons mapping
const categoryIcons = {
  "Electronics": Smartphone,
  "Fashion": Shirt,
  "Home & Living": Home,
  "Sports & Outdoors": Dumbbell,
  "Books & Stationery": BookOpen,
  "Beauty & Health": Sparkles,
}

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Layers className="w-8 h-8 text-theme-primary" />
        <div>
          <h1 className="text-3xl font-bold">Shop by Category</h1>
          <p className="text-theme-muted">Explore our wide range of categories</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="group cursor-pointer overflow-hidden hover-card">
            <div className="relative h-64">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm mb-4 text-gray-100">{category.description}</p>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {category.productCount} Products
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Featured Categories Section */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-6 h-6 text-theme-primary" />
          <h2 className="text-2xl font-bold">Featured Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => (
            <Card key={category.id} className="hover-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-theme-primary/10 flex items-center justify-center">
                      {categoryIcons[category.name] && React.createElement(categoryIcons[category.name], {
                        className: "w-5 h-5 text-theme-primary"
                      })}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <Tag className="w-5 h-5 text-theme-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-theme-muted mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1 text-sm text-theme-muted">
                    <Package className="w-4 h-4" />
                    <span>{category.productCount} Items</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <Percent className="w-4 h-4" />
                    <span>Up to 40% Off</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-sm text-theme-muted">
                  <Clock className="w-4 h-4" />
                  <span>Limited Time</span>
                </div>
                <Button variant="link" className="gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <Card className="mt-16 p-8 text-center gradient-bg">
        <div className="flex flex-col items-center gap-4">
          <ShoppingBag className="w-12 h-12 text-white" />
          <h2 className="text-3xl font-bold text-white">Start Shopping Today</h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-6">
            Explore our categories and discover amazing products at great prices.
            New items added daily!
          </p>
          <Button variant="secondary" size="lg" className="gap-2">
            Explore All Categories
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  )
} 