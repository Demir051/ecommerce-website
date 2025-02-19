"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  User,
  Settings,
  ShoppingBag,
  Heart,
  CreditCard,
  LogOut,
  Package,
  Bell,
  Edit,
  Key
} from "lucide-react"
import { motion } from "framer-motion"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <User className="w-8 h-8 text-theme-primary" />
        <div>
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-theme-muted">Manage your profile and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-theme-primary" />
              <h2 className="text-2xl font-semibold">Profile Settings</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-theme-primary/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-theme-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">John Doe</h3>
                  <p className="text-theme-muted text-sm mb-2">john.doe@example.com</p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="w-4 h-4" />
                    Change Photo
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 mt-6">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-theme-primary" />
              <h2 className="text-2xl font-semibold">Security</h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Password</label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New Password</label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm New Password</label>
                <Input type="password" />
              </div>
              <div className="flex justify-end">
                <Button>Update Password</Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-4">
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <User className="w-4 h-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <ShoppingBag className="w-4 h-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <CreditCard className="w-4 h-4" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Package className="w-4 h-4" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Bell className="w-4 h-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </nav>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {[1, 2].map((order) => (
                  <div key={order} className="flex items-center gap-3 text-sm">
                    <div className="w-12 h-12 rounded-lg bg-theme-primary/10 flex items-center justify-center">
                      <Package className="w-6 h-6 text-theme-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Order #12345</p>
                      <p className="text-theme-muted">2 items • $299.99</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 