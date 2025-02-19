"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ArrowUp, ArrowDown, DollarSign, ShoppingCart, Users, Package } from "lucide-react"
import { dashboardStats, orders } from "@/lib/data"

const stats = [
  {
    title: "Total Revenue",
    value: `$${dashboardStats.totalRevenue.toLocaleString()}`,
    icon: DollarSign,
    description: "Total revenue this month",
  },
  {
    title: "Products",
    value: dashboardStats.totalProducts.toLocaleString(),
    icon: Package,
    description: "Total products in stock",
  },
  {
    title: "Orders",
    value: dashboardStats.totalOrders.toLocaleString(),
    icon: ShoppingCart,
    description: "Total orders this month",
  },
  {
    title: "Customers",
    value: dashboardStats.totalCustomers.toLocaleString(),
    icon: Users,
    description: "Total registered customers",
  },
]

// Örnek veriler
const salesData = [
  { name: "Ocak", total: 2500 },
  { name: "Şubat", total: 3500 },
  { name: "Mart", total: 4200 },
  { name: "Nisan", total: 3800 },
  { name: "Mayıs", total: 5000 },
  { name: "Haziran", total: 4800 },
]

const categoryData = [
  { name: "Elektronik", value: 35 },
  { name: "Giyim", value: 25 },
  { name: "Kitap", value: 20 },
  { name: "Spor", value: 15 },
  { name: "Diğer", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-theme-primary/10 rounded-full">
                  <DollarSign className="w-6 h-6 text-theme-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-theme-muted">Toplam Satış</p>
                  <h3 className="text-2xl font-bold">₺24,000</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-green-500">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">12%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-theme-secondary/10 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-theme-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-theme-muted">Siparişler</p>
                  <h3 className="text-2xl font-bold">156</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-green-500">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-theme-accent/10 rounded-full">
                  <Users className="w-6 h-6 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-theme-muted">Müşteriler</p>
                  <h3 className="text-2xl font-bold">2,450</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-green-500">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-theme-primary/10 rounded-full">
                  <Package className="w-6 h-6 text-theme-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-theme-muted">Ürünler</p>
                  <h3 className="text-2xl font-bold">450</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-red-500">
                <ArrowDown className="w-4 h-4" />
                <span className="text-sm font-medium">3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grafik Kartları */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Satış Grafiği */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Aylık Satışlar</h3>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--theme-primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--theme-primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="hsl(var(--theme-primary))"
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Kategori Dağılımı */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Kategori Dağılımı</h3>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {categoryData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-theme-muted">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-full">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Orders</h2>
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 