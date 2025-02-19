import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { products } from "@/lib/data"
import { 
  Star, 
  SlidersHorizontal, 
  ShoppingBag, 
  Tag, 
  Truck, 
  Package,
  ArrowUpDown,
  Search,
  Grid2x2,
  List,
  Heart
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Package className="w-8 h-8 text-theme-primary" />
          <div>
            <h1 className="text-3xl font-bold">Our Products</h1>
            <p className="text-theme-muted">Discover our curated collection</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Grid2x2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <List className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Filters and Sort */}
      <Card className="p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search products..."
              className="pl-9"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-theme-primary" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-theme-primary" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100+">$100+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-theme-primary" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by: Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Sort by: Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden hover:shadow-lg hover:brightness-105 transition-all duration-300 h-full flex flex-col">
            <div className="relative h-[250px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.status === "Out of Stock" && (
                <Badge
                  variant="destructive"
                  className="absolute top-2 right-2"
                >
                  Out of Stock
                </Badge>
              )}
              {product.status === "Low Stock" && (
                <Badge
                  variant="warning"
                  className="absolute top-2 right-2"
                >
                  Low Stock
                </Badge>
              )}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <h3 className="font-semibold text-lg text-theme-text mb-1">{product.name}</h3>
                <p className="text-theme-muted text-sm">
                  {product.description}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-lg text-theme-text">
                    ${product.price}
                  </span>
                  {product.price >= 100 && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <Truck className="w-4 h-4" />
                      <span>Free Shipping</span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="default" 
                  className="w-full gap-2 hover:shadow-md hover:brightness-110 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex gap-2">
          <Button variant="outline">Previous</Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </nav>
      </div>
    </div>
  )
} 