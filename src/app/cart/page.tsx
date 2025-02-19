"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard, 
  Package,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Package className="w-8 h-8 text-theme-primary" />
        <div>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <p className="text-theme-muted">Review and manage your items</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {/* Cart Items */}
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold">Premium Watch</h3>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-theme-muted text-sm mb-4">Luxury timepiece with premium materials</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">1</span>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <span className="font-semibold">$299.99</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-theme-muted">
                <span>Subtotal</span>
                <span>$599.98</span>
              </div>
              <div className="flex justify-between text-theme-muted">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-theme-muted">
                <span>Tax</span>
                <span>$60.00</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>$659.98</span>
              </div>
            </div>
            <Button className="w-full gap-2 mb-4">
              <CreditCard className="w-4 h-4" />
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full gap-2">
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 