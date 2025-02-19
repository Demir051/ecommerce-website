import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Store, Globe, Mail, CreditCard, Bell, Shield } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Store Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Store className="w-8 h-8 text-theme-primary" />
          <div>
            <h2 className="text-xl font-semibold">Store Settings</h2>
            <p className="text-sm text-theme-muted">
              Manage your store information and preferences
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Store Name</label>
              <Input defaultValue="ModernShop" />
            </div>
            <div>
              <label className="text-sm font-medium">Store Email</label>
              <Input defaultValue="contact@modernshop.com" type="email" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <Input defaultValue="+1 (555) 123-4567" type="tel" />
            </div>
            <div>
              <label className="text-sm font-medium">Currency</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Globe className="w-8 h-8 text-theme-primary" />
          <div>
            <h2 className="text-xl font-semibold">Regional Settings</h2>
            <p className="text-sm text-theme-muted">
              Configure timezone and localization preferences
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Timezone</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">EST</SelectItem>
                  <SelectItem value="pst">PST</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Date Format</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Bell className="w-8 h-8 text-theme-primary" />
          <div>
            <h2 className="text-xl font-semibold">Notification Settings</h2>
            <p className="text-sm text-theme-muted">
              Configure how you receive notifications
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Order Notifications</h3>
                <p className="text-sm text-theme-muted">
                  Receive notifications for new orders
                </p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Inventory Alerts</h3>
                <p className="text-sm text-theme-muted">
                  Get notified when products are low in stock
                </p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <CreditCard className="w-8 h-8 text-theme-primary" />
          <div>
            <h2 className="text-xl font-semibold">Payment Settings</h2>
            <p className="text-sm text-theme-muted">
              Manage payment methods and gateways
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Payment Gateways</h3>
                <p className="text-sm text-theme-muted">
                  Configure payment providers
                </p>
              </div>
              <Button variant="outline">Manage</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Transaction Fees</h3>
                <p className="text-sm text-theme-muted">
                  Set up transaction fee rules
                </p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Shield className="w-8 h-8 text-theme-primary" />
          <div>
            <h2 className="text-xl font-semibold">Security Settings</h2>
            <p className="text-sm text-theme-muted">
              Manage security and authentication settings
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-theme-muted">
                  Add an extra layer of security
                </p>
              </div>
              <Button variant="outline">Enable</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">API Access</h3>
                <p className="text-sm text-theme-muted">
                  Manage API keys and permissions
                </p>
              </div>
              <Button variant="outline">Manage</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Changes */}
      <div className="flex justify-end">
        <Button className="w-full sm:w-auto">Save Changes</Button>
      </div>
    </div>
  )
} 