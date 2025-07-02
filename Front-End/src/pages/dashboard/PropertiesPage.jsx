import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MapPin,
//   Bed,
//   Toilete,
//   Ruler,
  Star,
  Check,
  X,
  RefreshCw
} from 'react-feather';
import { Bath, Bed, RulerIcon } from 'lucide-react';

const PropertiesPage = () => {
  // Mock property data
  const [properties, setProperties] = useState([
    { 
      id: 101, 
      title: "Luxury Beach Villa", 
      address: "123 Beach Road, Malibu", 
      owner: "John Doe", 
      type: "villa", 
      status: "approved", 
      price: 350, 
      bedrooms: 4, 
      bathrooms: 3, 
      area: 2800, 
      rating: 4.8, 
      created: "2023-05-14",
      featured: true
    },
    { 
      id: 102, 
      title: "Downtown Loft Apartment", 
      address: "456 City Center, New York", 
      owner: "Emily Davis", 
      type: "apartment", 
      status: "pending", 
      price: 180, 
      bedrooms: 2, 
      bathrooms: 2, 
      area: 1200, 
      rating: 4.5, 
      created: "2023-05-13",
      featured: false
    },
    { 
      id: 103, 
      title: "Mountain Cabin Retreat", 
      address: "789 Forest Lane, Aspen", 
      owner: "Michael Brown", 
      type: "cabin", 
      status: "approved", 
      price: 220, 
      bedrooms: 3, 
      bathrooms: 2, 
      area: 1800, 
      rating: 4.9, 
      created: "2023-05-12",
      featured: true
    },
    { 
      id: 104, 
      title: "Modern City Penthouse", 
      address: "101 Skyline Blvd, Chicago", 
      owner: "Sarah Wilson", 
      type: "penthouse", 
      status: "rejected", 
      price: 480, 
      bedrooms: 3, 
      bathrooms: 3.5, 
      area: 3200, 
      rating: 4.7, 
      created: "2023-05-11",
      featured: false
    },
    { 
      id: 105, 
      title: "Suburban Family Home", 
      address: "222 Oak Street, Boston", 
      owner: "David Taylor", 
      type: "house", 
      status: "approved", 
      price: 190, 
      bedrooms: 4, 
      bathrooms: 2.5, 
      area: 2200, 
      rating: 4.6, 
      created: "2023-05-10",
      featured: true
    },
    { 
      id: 106, 
      title: "Lakeside Cottage", 
      address: "333 Lakeview Drive, Tahoe", 
      owner: "Lisa Anderson", 
      type: "cottage", 
      status: "approved", 
      price: 210, 
      bedrooms: 2, 
      bathrooms: 1, 
      area: 1100, 
      rating: 4.9, 
      created: "2023-05-09",
      featured: false
    },
    { 
      id: 107, 
      title: "Urban Studio Apartment", 
      address: "444 Downtown Ave, Seattle", 
      owner: "James Wilson", 
      type: "apartment", 
      status: "pending", 
      price: 120, 
      bedrooms: 1, 
      bathrooms: 1, 
      area: 800, 
      rating: 4.3, 
      created: "2023-05-08",
      featured: false
    },
    { 
      id: 108, 
      title: "Historic Townhouse", 
      address: "555 Heritage Lane, Charleston", 
      owner: "Emma Garcia", 
      type: "townhouse", 
      status: "approved", 
      price: 280, 
      bedrooms: 3, 
      bathrooms: 2, 
      area: 2400, 
      rating: 4.8, 
      created: "2023-05-07",
      featured: true
    }
  ]);
  
  // State for filtering and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [featuredFilter, setFeaturedFilter] = useState('all');
  const [sortField, setSortField] = useState('created');
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6);
  
  // Available filters
  const statuses = ['all', 'approved', 'pending', 'rejected'];
  const types = ['all', 'house', 'apartment', 'villa', 'cabin', 'penthouse', 'cottage', 'townhouse'];
  const featuredOptions = ['all', 'featured', 'not-featured'];
  
  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.owner.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || property.status === statusFilter;
      const matchesType = typeFilter === 'all' || property.type === typeFilter;
      
      let matchesFeatured = true;
      if (featuredFilter === 'featured') {
        matchesFeatured = property.featured;
      } else if (featuredFilter === 'not-featured') {
        matchesFeatured = !property.featured;
      }
      
      return matchesSearch && matchesStatus && matchesType && matchesFeatured;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'title') {
        comparison = a.title.localeCompare(b.title);
      } else if (sortField === 'price') {
        comparison = a.price - b.price;
      } else if (sortField === 'rating') {
        comparison = a.rating - b.rating;
      } else if (sortField === 'created') {
        comparison = new Date(a.created) - new Date(b.created);
      } else if (sortField === 'bedrooms') {
        comparison = a.bedrooms - b.bedrooms;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  
  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  
  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Handle delete property
  const deleteProperty = (propertyId) => {
    setProperties(properties.filter(property => property.id !== propertyId));
  };
  
  // Toggle property status
  const toggleStatus = (propertyId, newStatus) => {
    setProperties(properties.map(property => 
      property.id === propertyId ? {...property, status: newStatus} : property
    ));
  };
  
  // Toggle featured status
  const toggleFeatured = (propertyId) => {
    setProperties(properties.map(property => 
      property.id === propertyId ? {...property, featured: !property.featured} : property
    ));
  };
  
  // Get sort indicator
  const getSortIndicator = (field) => {
    if (sortField === field) {
      return sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
    }
    return null;
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const statusClasses = {
      approved: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      rejected: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Properties Management</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage all properties on the platform ({filteredProperties.length} properties found)
          </p>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
          <Plus size={16} className="mr-2" />
          Add New Property
        </button>
      </div>
      
      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="md:col-span-2 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, address or owner..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Featured</label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={featuredFilter}
            onChange={(e) => setFeaturedFilter(e.target.value)}
          >
            {featuredOptions.map(option => (
              <option key={option} value={option}>
                {option === 'all' ? 'All' : 
                 option === 'featured' ? 'Featured Only' : 'Not Featured'}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Properties Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProperties.map(property => (
            <motion.div 
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Property Image */}
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  {getStatusBadge(property.status)}
                </div>
              </div>
              
              {/* Property Details */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{property.title}</h3>
                  <div className="flex items-center bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                    <Star size={16} className="text-amber-500 mr-1" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm truncate">{property.address}</span>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">${property.price}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/night</span></div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Owner: {property.owner}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col items-center">
                    {/* <Bed size={18} className="text-gray-500 dark:text-gray-400" /> */}
                    <Bed size={18} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-sm mt-1">{property.bedrooms} beds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {/* <Bath size={18} className="text-gray-500 dark:text-gray-400" /> */}
                    <Bath size={18} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-sm mt-1">{property.bathrooms} baths</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {/* <Ruler size={18} className="text-gray-500 dark:text-gray-400" /> */}
                    <RulerIcon size={18} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-sm mt-1">{property.area} sqft</span>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <div className="flex space-x-2">
                    {property.status === 'pending' && (
                      <>
                        <button 
                          className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
                          onClick={() => toggleStatus(property.id, 'approved')}
                        >
                          <Check size={16} />
                        </button>
                        <button 
                          className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800"
                          onClick={() => toggleStatus(property.id, 'rejected')}
                        >
                          <X size={16} />
                        </button>
                      </>
                    )}
                    <button 
                      className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                      onClick={() => toggleFeatured(property.id)}
                    >
                      {property.featured ? (
                        <X size={16} className="text-red-500" />
                      ) : (
                        <Star size={16} className="text-amber-500" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800">
                      <Edit size={16} />
                    </button>
                    <button 
                      className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800"
                      onClick={() => deleteProperty(property.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-12 text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Home size={24} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No properties found</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            No properties match your current filters. Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
      
      {/* Pagination */}
      {filteredProperties.length > propertiesPerPage && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {indexOfFirstProperty + 1} to {Math.min(indexOfLastProperty, filteredProperties.length)} of {filteredProperties.length} properties
          </div>
          <div className="flex space-x-2">
            <button 
              className={`p-2 rounded-lg ${
                currentPage === 1 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              <ChevronLeft size={16} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === number
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
            
            <button 
              className={`p-2 rounded-lg ${
                currentPage === totalPages 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-100 dark:border-indigo-800">
          <div className="text-indigo-800 dark:text-indigo-200 font-medium">Total Properties</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{properties.length}</div>
          <div className="flex items-center text-green-600 dark:text-green-400 mt-2">
            <span className="text-sm">+15.3% from last month</span>
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border border-green-100 dark:border-green-800">
          <div className="text-green-800 dark:text-green-200 font-medium">Approved Properties</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {properties.filter(p => p.status === 'approved').length}
          </div>
          <div className="flex items-center text-green-600 dark:text-green-400 mt-2">
            <span className="text-sm">+8.2% from last month</span>
          </div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-100 dark:border-yellow-800">
          <div className="text-yellow-800 dark:text-yellow-200 font-medium">Pending Approval</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {properties.filter(p => p.status === 'pending').length}
          </div>
          <div className="flex items-center text-red-600 dark:text-red-400 mt-2">
            <span className="text-sm">-3.5% from last month</span>
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-100 dark:border-purple-800">
          <div className="text-purple-800 dark:text-purple-200 font-medium">Featured Properties</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {properties.filter(p => p.featured).length}
          </div>
          <div className="flex items-center text-green-600 dark:text-green-400 mt-2">
            <span className="text-sm">+22.7% from last month</span>
          </div>
        </div>
      </div>
      
      {/* Property Types Distribution */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Property Types Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {types.filter(t => t !== 'all').map(type => {
            const count = properties.filter(p => p.type === type).length;
            const percentage = (count / properties.length) * 100;
            
            return (
              <div key={type} className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white capitalize">{type}</span>
                  <span className="text-sm font-bold">{count}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {percentage.toFixed(1)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;