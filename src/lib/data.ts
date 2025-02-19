// Mock Products Data
export const products = [
  {
    id: 1,
    name: "Premium Leather Wallet",
    price: 79.99,
    description: "Handcrafted genuine leather wallet with multiple card slots",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2787&auto=format&fit=crop",
    category: "Fashion",
    stock: 45,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with active noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop",
    category: "Electronics",
    stock: 12,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    description: "Advanced fitness tracker with heart rate monitoring and GPS",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2940&auto=format&fit=crop",
    category: "Electronics",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and sustainable organic cotton t-shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2940&auto=format&fit=crop",
    category: "Fashion",
    stock: 150,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Professional Camera Kit",
    price: 1299.99,
    description: "Complete professional camera kit with accessories",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2938&auto=format&fit=crop",
    category: "Electronics",
    stock: 8,
    status: "Low Stock",
  },
  {
    id: 6,
    name: "Minimalist Backpack",
    price: 89.99,
    description: "Stylish and functional backpack for everyday use",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2787&auto=format&fit=crop",
    category: "Fashion",
    stock: 65,
    status: "In Stock",
  },
]

// Mock Categories Data
export const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets and electronic devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2940&auto=format&fit=crop",
    productCount: 156,
  },
  {
    id: 2,
    name: "Fashion",
    description: "Trendy clothing and accessories",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2938&auto=format&fit=crop",
    productCount: 243,
  },
  {
    id: 3,
    name: "Home & Living",
    description: "Furniture and home decor",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2940&auto=format&fit=crop",
    productCount: 189,
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    description: "Sports equipment and outdoor gear",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2940&auto=format&fit=crop",
    productCount: 124,
  },
  {
    id: 5,
    name: "Books & Stationery",
    description: "Books, notebooks, and writing supplies",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2940&auto=format&fit=crop",
    productCount: 98,
  },
  {
    id: 6,
    name: "Beauty & Health",
    description: "Cosmetics and personal care products",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2940&auto=format&fit=crop",
    productCount: 167,
  },
]

// Mock Cart Items
export const cartItems = [
  {
    id: 1,
    name: "Premium Leather Wallet",
    price: 79.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop",
  },
]

// Mock Orders Data
export const orders = [
  {
    id: "ORDER-0001",
    customer: "John Doe",
    status: "Delivered",
    total: 379.98,
    date: "2024-02-15",
  },
  {
    id: "ORDER-0002",
    customer: "Jane Smith",
    status: "Processing",
    total: 199.99,
    date: "2024-02-14",
  },
  {
    id: "ORDER-0003",
    customer: "Mike Johnson",
    status: "Shipped",
    total: 89.99,
    date: "2024-02-13",
  },
]

// Mock Dashboard Stats
export const dashboardStats = {
  totalRevenue: 45231.89,
  totalProducts: 2345,
  totalOrders: 12234,
  totalCustomers: 5678,
} 