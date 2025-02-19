import { LayoutDashboard, Package, Users, ShoppingCart, Settings, LogOut, Bell, Search } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r shadow-sm">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b">
            <Link href="/admin" className="text-xl font-bold text-black">
              ModernShop Admin
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Menu */}
          <div className="p-4 border-t">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User"
                  alt="Admin"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-medium">Admin User</h4>
                  <p className="text-sm text-gray-500">admin@example.com</p>
                </div>
                <button className="text-gray-500 hover:text-red-600">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 