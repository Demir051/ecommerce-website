"use client"

import Link from "next/link"
import { ShoppingCart, User, Menu, Search, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  {
    title: "Products",
    href: "/products",
    submenu: [
      { title: "All Products", href: "/products" },
      { title: "Featured", href: "/products?featured=true" },
      { title: "New Arrivals", href: "/products?new=true" },
      { title: "Best Sellers", href: "/products?bestsellers=true" },
    ],
  },
  {
    title: "Categories",
    href: "/categories",
    submenu: [
      { title: "Electronics", href: "/categories/electronics" },
      { title: "Fashion", href: "/categories/fashion" },
      { title: "Home & Living", href: "/categories/home-living" },
      { title: "Books", href: "/categories/books" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

interface SearchResult {
  title: string
  href: string
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mock search results - replace with actual search logic
  useEffect(() => {
    if (searchQuery.length > 2) {
      // Simulate API call
      setSearchResults([
        { title: "Product 1", href: "/products/1" },
        { title: "Product 2", href: "/products/2" },
      ])
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            ModernShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-theme-muted hover:text-theme-primary transition-colors flex items-center gap-1 group"
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-theme-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-md shadow-lg border"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-theme-muted hover:text-theme-primary hover:bg-gray-50"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <motion.div
                animate={{ rotate: isSearchOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isSearchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </motion.div>
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:scale-105 transition-transform"
              >
                <ShoppingCart className="h-5 w-5" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-theme-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                >
                  2
                </motion.span>
              </Button>
            </Link>

            {/* Account */}
            <Link href="/account">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-105 transition-transform"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t"
            >
              <div className="py-4">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 pr-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  
                  {/* Search Results */}
                  <AnimatePresence>
                    {searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute w-full bg-white mt-2 rounded-md shadow-lg border py-2"
                      >
                        {searchResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.href}
                            className="flex items-center px-4 py-2 hover:bg-gray-50"
                          >
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm">{result.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t"
            >
              <nav className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium text-theme-muted hover:text-theme-primary hover:bg-gray-50 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="pl-8 space-y-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-theme-muted hover:text-theme-primary hover:bg-gray-50 rounded-md transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 