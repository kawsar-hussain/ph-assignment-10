import React, { useState } from "react";
import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Eye,
  Star,
  MessageSquare,
  LogOut,
  User,
  Zap,
  Box,
  Tags,
  Plus,
  ArrowUp,
  LayoutDashboard,
  ShoppingBag,
  UsersRound,
  LineChart,
  Cog,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", badge: null },
    { icon: Package, label: "Products", badge: "125" },
    { icon: ShoppingCart, label: "Orders", badge: "12" },
    { icon: Users, label: "Customers", badge: null },
    { icon: Tags, label: "Categories", badge: null },
    { icon: BarChart3, label: "Analytics", badge: null },
    { icon: Star, label: "Reviews", badge: "8" },
    { icon: MessageSquare, label: "Messages", badge: "3" },
    { icon: Settings, label: "Settings", badge: null },
  ];

  const stats = [
    { icon: DollarSign, label: "Total Revenue", value: "$45,231", change: "+20.1%", color: "from-blue-500 to-blue-600" },
    { icon: ShoppingCart, label: "Orders", value: "1,245", change: "+12.5%", color: "from-purple-500 to-purple-600" },
    { icon: Users, label: "Customers", value: "8,234", change: "+8.3%", color: "from-orange-500 to-orange-600" },
    { icon: TrendingUp, label: "Growth", value: "24.5%", change: "+4.2%", color: "from-green-500 to-green-600" },
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", product: "Smart Watch Pro", amount: "$299", status: "Delivered" },
    { id: "#ORD-002", customer: "Jane Smith", product: "Wireless Earbuds", amount: "$149", status: "Processing" },
    { id: "#ORD-003", customer: "Mike Johnson", product: "Portable Speaker", amount: "$199", status: "Shipped" },
    { id: "#ORD-004", customer: "Sarah Wilson", product: "Smart Home Hub", amount: "$249", status: "Pending" },
  ];

  const topProducts = [
    { name: "Smart Watch Pro", sales: 234, revenue: "$69,966", trend: "+12%" },
    { name: "Wireless Earbuds", sales: 189, revenue: "$28,161", trend: "+8%" },
    { name: "Portable Speaker", sales: 156, revenue: "$31,044", trend: "+15%" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <style>{`
        .smooth-transition { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .slide-in { animation: slideIn 0.3s ease-out; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-gradient-to-b from-gray-900 to-gray-800 text-white smooth-transition flex flex-col`}>
        {/* Logo */}
        <div className="p-4 flex items-center gap-3 border-b border-gray-700">
          <div className="w-10 h-10 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          {sidebarOpen && (
            <div className="slide-in">
              <h1 className="font-bold text-xl">TechGear</h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveMenu(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
                  isActive ? "bg-gradient-to-r from-[#ff9900] to-[#ff7700] shadow-lg scale-105" : "hover:bg-gray-700 hover:scale-102"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="flex-1 text-left slide-in">{item.label}</span>}
                {sidebarOpen && item.badge && <span className="bg-red-500 text-xs px-2 py-1 rounded-full slide-in pulse">{item.badge}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            {sidebarOpen && (
              <div className="flex-1 slide-in">
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs text-gray-400">admin@techgear.com</p>
              </div>
            )}
            {sidebarOpen && (
              <button className="hover:text-red-400 smooth-transition">
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg smooth-transition hover:scale-110">
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products, orders..."
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#ff9900] smooth-transition"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg smooth-transition hover:scale-110">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full pulse"></span>
              </button>

              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg smooth-transition">
                <div className="w-8 h-8 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h2>
              <p className="text-white/90">Here's what's happening with your store today.</p>
            </div>
            <Zap className="absolute right-8 top-8 w-32 h-32 text-white/10 transform rotate-12" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg smooth-transition hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center smooth-transition hover:rotate-12`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                      <ArrowUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Orders & Top Products */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-[#ff9900]" />
                  Recent Orders
                </h3>
                <button className="text-[#ff9900] text-sm font-semibold hover:underline flex items-center gap-1">
                  View All <Eye className="w-4 h-4" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Order ID</th>
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Customer</th>
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Product</th>
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Amount</th>
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50 smooth-transition">
                        <td className="py-4 text-sm font-medium">{order.id}</td>
                        <td className="py-4 text-sm">{order.customer}</td>
                        <td className="py-4 text-sm">{order.product}</td>
                        <td className="py-4 text-sm font-semibold">{order.amount}</td>
                        <td className="py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700"
                                : order.status === "Processing"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "Shipped"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#ff9900]" />
                Top Products
              </h3>
              <div className="space-y-4">
                {topProducts.map((product, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg smooth-transition hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Box className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm mb-1">{product.name}</p>
                      <p className="text-xs text-gray-600">{product.sales} sales</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-sm">{product.revenue}</p>
                        <span className="text-green-500 text-xs font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {product.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg smooth-transition text-left group hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition group-hover:rotate-12">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold mb-1">Add Product</h4>
              <p className="text-sm text-gray-600">Add new items to inventory</p>
            </button>

            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg smooth-transition text-left group hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition group-hover:rotate-12">
                <UsersRound className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold mb-1">Manage Customers</h4>
              <p className="text-sm text-gray-600">View customer details</p>
            </button>

            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg smooth-transition text-left group hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition group-hover:rotate-12">
                <LineChart className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold mb-1">View Reports</h4>
              <p className="text-sm text-gray-600">Check analytics & insights</p>
            </button>

            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg smooth-transition text-left group hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition group-hover:rotate-12">
                <Cog className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold mb-1">Settings</h4>
              <p className="text-sm text-gray-600">Configure your store</p>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
