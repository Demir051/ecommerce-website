import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Search, UserPlus } from "lucide-react"

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    orders: 5,
    totalSpent: 1299.99,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 234-5678",
    orders: 3,
    totalSpent: 799.99,
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    orders: 0,
    totalSpent: 0,
    status: "Inactive",
  },
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" />
          Add Customer
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search customers..."
              className="pl-9"
            />
          </div>
          <Button variant="outline">Export</Button>
        </div>
      </Card>

      {/* Customers Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {customer.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Mail className="w-4 h-4" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Phone className="w-4 h-4" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.orders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${customer.totalSpent.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={customer.status === "Active" ? "success" : "secondary"}
                    >
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="link">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing 1 to {customers.length} of {customers.length} results
        </div>
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