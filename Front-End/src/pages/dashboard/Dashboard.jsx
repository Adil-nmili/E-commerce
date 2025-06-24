import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'
import { Card,CardContent,CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
//   LayoutDashboard, 
  Users, 
  Home, 
  Calendar, 
  AlertCircle, 
  Settings,
  TrendingUp,
  UserCheck,
  Star,
  DollarSign,
  ChevronRight,
  MoreHorizontal,
  CheckCircle,
  XCircle
} from 'react-feather';
// import LayoutDashboard from '../../layouts/LayoutDashboard';

// Mock data for demonstration
const dashboardData = {
  stats: [
    { id: 1, title: "Total Users", value: "1,254", icon: <Users size={20} />, trend: "+12.3%", color: "bg-blue-500" },
    { id: 2, title: "Properties", value: "567", icon: <Home size={20} />, trend: "+5.2%", color: "bg-green-500" },
    { id: 3, title: "Bookings", value: "324", icon: <Calendar size={20} />, trend: "+18.7%", color: "bg-purple-500" },
    { id: 4, title: "Revenue", value: "$84,250", icon: <DollarSign size={20} />, trend: "+22.4%", color: "bg-amber-500" },
  ],
  recentUsers: [
    { id: 1, name: "John Doe", email: "john@example.com", role: "owner", joined: "2023-05-15", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "client", joined: "2023-05-14", status: "active" },
    { id: 3, name: "Robert Johnson", email: "robert@example.com", role: "client", joined: "2023-05-13", status: "pending" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "owner", joined: "2023-05-12", status: "active" },
  ],
  pendingProperties: [
    { id: 101, title: "Luxury Beach Villa", owner: "John Doe", price: 350, submitted: "2023-05-14", status: "pending" },
    { id: 102, title: "Downtown Loft Apartment", owner: "Emily Davis", price: 180, submitted: "2023-05-13", status: "pending" },
    { id: 103, title: "Mountain Cabin Retreat", owner: "Michael Brown", price: 220, submitted: "2023-05-12", status: "pending" },
  ],
  recentBookings: [
    { id: 1001, property: "Beach Villa", client: "Alex Turner", dates: "Jun 15-22, 2023", amount: 2450, status: "confirmed" },
    { id: 1002, property: "City Apartment", client: "Sarah Miller", dates: "Jun 18-25, 2023", amount: 1260, status: "completed" },
    { id: 1003, property: "Mountain Cabin", client: "David Wilson", dates: "Jun 20-27, 2023", amount: 1540, status: "pending" },
  ],
  openComplaints: [
    { id: 501, reporter: "Mark Johnson", reported: "John Doe", property: "Beach Villa", type: "Property Condition", status: "open" },
    { id: 502, reporter: "Lisa Anderson", reported: "Emily Davis", property: "Downtown Loft", type: "Payment Issue", status: "in_progress" },
  ],
};


const AdminDashboard = () => {

  
  // Chart data
  const bookingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings',
        data: [12, 19, 8, 15, 22, 18],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  };
  
  const userData = {
    labels: ['Clients', 'Owners', 'Assistants', 'Admins'],
    datasets: [
      {
        data: [65, 25, 5, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(79, 70, 229, 0.8)',
          'rgba(129, 140, 248, 0.8)',
          'rgba(199, 210, 254, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-full">
        <main className="p-4 sm:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {dashboardData.stats.map((stat) => (
              <Card key={stat.id}>
                <CardContent className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-green-600 text-sm font-medium mt-1 flex items-center">
                      <TrendingUp size={14} className="mr-1" /> {stat.trend}
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg text-white`}>
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Charts and Data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Bookings Overview</h3>
                <Button className="text-gray-500 hover:text-gray-700">
                  <MoreHorizontal size={18} />
                </Button>
              </CardHeader>
              
              <CardContent className="relative h-72 px-4">
                {/* Simple chart representation - in a real app, use Chart.js or similar */}
                <CardContent className="absolute inset-0 flex items-end space-x-1">
                  {[12, 19, 8, 15, 22, 18].map((value, index) => (
                    <motion.div 
                      key={index}
                      className="w-1/6 bg-indigo-500 rounded-t"
                      style={{ height: `${value * 10}px` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${value * 10}px` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  ))}
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">User Distribution</h3>
                <Button className="text-gray-500 hover:text-gray-700">
                  <MoreHorizontal size={18} />
                </Button>
              </div>
              
              <div className="flex justify-center h-64">
                {/* Pie chart representation */}
                <div className="relative w-48 h-48 rounded-full">
                  {[
                    { value: 65, color: "bg-indigo-500" },
                    { value: 25, color: "bg-indigo-600" },
                    { value: 5, color: "bg-indigo-400" },
                    { value: 5, color: "bg-indigo-300" },
                  ].map((item, index, arr) => {
                    const prevValue = arr.slice(0, index).reduce((acc, curr) => acc + curr.value, 0);
                    const rotation = (prevValue / 100) * 360;
                    const deg = (item.value / 100) * 360;
                    
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 ${item.color} rounded-full`}
                        style={{
                          clipPath: `path('M 50,50 L 50,0 A 50,50 0 ${deg > 180 ? 1 : 0},1 ${50 + Math.sin((deg * Math.PI) / 180) * 50},${50 - Math.cos((deg * Math.PI) / 180) * 50} Z')`,
                          transform: `rotate(${rotation}deg)`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Clients (65%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Owners (25%)</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Pending Properties</h3>
                <Button className="text-indigo-600 text-sm font-medium">View All</Button>
              </div>
              
              <div className="space-y-4">
                {dashboardData.pendingProperties.map((property) => (
                  <motion.div 
                    key={property.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: property.id * 0.1 }}
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{property.title}</h4>
                      <p className="text-sm text-gray-500">{property.owner} • ${property.price}/night</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="primary" size="sm">
                        <CheckCircle size={16} className="mr-1" /> Approve
                      </Button>
                      <Button variant="ghost" size="sm">
                        <XCircle size={16} className="mr-1" /> Reject
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
            
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Recent Users</h3>
                <Button className="text-indigo-600 text-sm font-medium">View All</Button>
              </div>
              
              <div className="space-y-4">
                {dashboardData.recentUsers.map((user) => (
                  <motion.div 
                    key={user.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: user.id * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <span className="font-medium text-gray-700">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{user.name}</h4>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <Badge variant={user.status}>{user.role}</Badge>
                      <span className="text-xs text-gray-500 mt-1">{user.joined}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Additional Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Recent Bookings</h3>
                <Button className="text-indigo-600 text-sm font-medium">View All</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dashboardData.recentBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{booking.property}</div>
                          <div className="text-sm text-gray-500">{booking.dates}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{booking.client}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">${booking.amount}</td>
                        <td className="px-4 py-3">
                          <Badge variant={booking.status}>{booking.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Open Complaints</h3>
                <Button className="text-indigo-600 text-sm font-medium">View All</Button>
              </div>
              
              <div className="space-y-4">
                {dashboardData.openComplaints.map((complaint) => (
                  <div key={complaint.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{complaint.type}</h4>
                        <p className="text-sm text-gray-500">
                          {complaint.reporter} → {complaint.reported}
                        </p>
                        <p className="text-sm mt-1">Property: {complaint.property}</p>
                      </div>
                      <div>
                        <Badge variant={complaint.status}>{complaint.status.replace('_', ' ')}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-3">
                      <Button variant="ghost" size="sm">View Details</Button>
                      <Button variant="primary" size="sm" className="ml-2">Resolve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;