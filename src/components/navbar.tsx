"use client"

import Link from "next/link"
import { 
  ShoppingBag, 
  Bell, 
  ShoppingCart, 
  User, 
  Menu,
  X,
  Home,
  Package,
  Layers,
  Info,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)

  const menuItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/products", icon: Package, label: "Products" },
    { href: "/categories", icon: Layers, label: "Categories" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/contact", icon: Phone, label: "Contact" }
  ]

  const notifications = [
    {
      id: 1,
      title: "New Order",
      message: "Your order #12345 has been confirmed",
      time: "5 min ago"
    },
    {
      id: 2,
      title: "Special Offer",
      message: "Get 20% off on all products",
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "Order Shipped",
      message: "Your order #12344 has been shipped",
      time: "2 hours ago"
    }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl hover:text-theme-primary transform hover:scale-105 transition-all duration-300"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="text-black font-bold">
              ModernShop
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-theme-muted hover:text-theme-primary transition-all duration-300 relative group py-1 overflow-hidden flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-theme-primary transition-all duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme-primary to-theme-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-theme-primary/10">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-4 mt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-theme-muted hover:text-theme-primary transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-theme-primary/10 transform hover:scale-110 transition-all duration-300 group"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center pointer-events-none">
                  3
                </span>
              </Button>

              <AnimatePresence>
                {isNotificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-gray-100"
                          onClick={() => setIsNotificationOpen(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {notifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                        >
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-sm text-gray-900">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <Button variant="link" className="w-full justify-center text-theme-primary hover:text-theme-primary/80">
                        View All Notifications
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-theme-primary/10 transform hover:scale-110 transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center pointer-events-none">
                  2
                </span>
              </Button>
            </Link>

            <Link href="/account">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-theme-primary/10 transform hover:scale-110 transition-all duration-300 group"
              >
                <User className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}