"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Star, 
  Truck, 
  Shield, 
  Clock, 
  CreditCard,
  Sparkles,
  Zap,
  Gift,
  Percent,
  TrendingUp,
  Package,
  Mail,
  ShoppingBag,
  Heart
} from "lucide-react"
import { products, categories } from "@/lib/data"
import { motion } from "framer-motion"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Within 3-5 business days",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: CreditCard,
    title: "Money Back",
    description: "30 days guarantee",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/90 to-theme-secondary/90" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl text-white pt-20"
          >
            <h1 className="text-5xl font-bold mb-6">
              Discover Our Premium Collection
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Shop the latest trends with our curated selection of premium products.
              Quality meets style in every purchase.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="hover:shadow-lg hover:brightness-110 transition-all duration-300"
              >
                <a href="/products" className="gap-2 inline-flex items-center">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 hover:bg-white/30 transition-all duration-300 border-white/50 hover:border-white"
              >
                <a href="/categories" className="gap-2 inline-flex items-center">
                  Browse Categories
                  <Package className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-theme-background">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="p-6 group overflow-hidden hover:shadow-lg hover:brightness-105 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-full flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-text">{feature.title}</h3>
                      <p className="text-theme-muted text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-theme-primary" />
              <div>
                <h2 className="text-3xl font-bold text-theme-text">Featured Products</h2>
                <p className="text-theme-muted">Discover our handpicked selection</p>
              </div>
            </div>
            <Button variant="link" className="text-theme-primary group">
              <a href="/products" className="gap-2 inline-flex items-center">
                View All 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.slice(0, 4).map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-lg hover:brightness-105 transition-all duration-300 h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <h3 className="font-semibold text-lg text-theme-text mb-1">{product.name}</h3>
                    <p className="text-theme-muted text-sm mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <span className="font-bold text-lg text-theme-text">
                          ${product.price}
                        </span>
                        {product.price >= 100 && (
                          <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                            <Truck className="w-4 h-4" />
                            <span>Free Shipping</span>
                          </div>
                        )}
                      </div>
                      <Button 
                        variant="default" 
                        className="hover:shadow-md hover:brightness-110 transition-all duration-300"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-theme-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-theme-text">
              Shop by Category
            </h2>
            <p className="text-theme-muted mt-2">
              Explore our wide range of categories
            </p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {categories.slice(0, 3).map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Card
                  className="relative h-80 group overflow-hidden hover:shadow-lg hover:brightness-105 transition-all duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white text-sm mb-4 max-w-xs">{category.description}</p>
                    <Button 
                      variant="secondary" 
                      className="hover:shadow-lg hover:brightness-110 transition-all duration-300"
                    >
                      <a href={`/categories/${category.id}`} className="gap-2 inline-flex items-center">
                        Shop Now 
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="gradient-bg p-12 text-center relative overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute top-0 right-0 text-white/5"
              >
                <Sparkles className="w-96 h-96" />
              </motion.div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
                  Stay updated with our latest products, exclusive offers, and shopping
                  tips. Subscribe now and get 10% off your first order!
                </p>
                <motion.form 
                  className="flex gap-4 max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md text-theme-text bg-white/95 focus:outline-none focus:ring-2 focus:ring-theme-secondary border border-transparent"
                  />
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="hover:shadow-lg hover:brightness-110 transition-all duration-300"
                  >
                    Subscribe
                    <Zap className="w-5 h-5 ml-2" />
                  </Button>
                </motion.form>
                <div className="flex items-center justify-center gap-8 mt-8">
                  <div className="flex items-center gap-2 text-white/80">
                    <Gift className="w-5 h-5" />
                    <span>Exclusive Offers</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Percent className="w-5 h-5" />
                    <span>Special Discounts</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <TrendingUp className="w-5 h-5" />
                    <span>Latest Updates</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
