import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Home,
  Calendar,
  AlertCircle,
  Settings,
  Bell,
  Search,
  X,
  ChevronDown,
  LogOut,
  User,
  HelpCircle,
  Sun,
  Moon
} from 'react-feather';
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { CloudCog, Menu } from 'lucide-react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ADMIN_DASHBOARD, CONTACT, PRIVACY, TERMES, USER_MANAGEMENT } from '../router/Router';


const LayoutDashboard = () => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('');


  useEffect(() => {
    const path = location.pathname;
    setActiveNav(path)
  }, [location])


  const [notifications] = useState([
    { id: 1, title: 'New booking received', description: 'Alex Turner booked your Beach Villa', time: '2 min ago', read: false },
    { id: 2, title: 'Property approved', description: 'Your Downtown Loft has been approved', time: '1 hour ago', read: true },
    { id: 3, title: 'Payment received', description: '$1,260 received for booking #1002', time: '4 hours ago', read: true },
  ]);
  const [unreadCount] = useState(notifications.filter(n => !n.read).length);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} />, url: ADMIN_DASHBOARD },
    { id: 'users', label: 'Users', icon: <Users size={18} />, url: USER_MANAGEMENT },
    { id: 'properties', label: 'Properties', icon: <Home size={18} />, url: "#" },
    { id: 'bookings', label: 'Bookings', icon: <Calendar size={18} />, url: "#" },
    { id: 'complaints', label: 'Complaints', icon: <AlertCircle size={18} />, url: "#" },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} />, url: "#" },
  ];

  return (
    <div className={`min-h-screen flex relative gap-2 bg-gray-200`}>
      <motion.aside
        className={`fixed z-40 h-screen w-64 left-0 top-0 transform bg-white transition-transform duration-300 ease-in-out md:translate-x-0`}
        transition={{}}
      >
        <div className={`flex h-full flex-col border-r `}>
          <div className={`flex items-center justify-between p-4  border-b `}>
            <div className="flex items-center space-x-2">
              <div className=" w-full flex items-center justify-center gap-3 flex-1">
                <Button><Home size={24} /></Button> <Label className="text-xl">FindMyStay</Label>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Button variant={activeNav === item.url ? 'default' : 'outline'}
                    className="w-full"
                    onClick={() => {
                      setActiveNav(item.url);
                      navigate(item.url)
                    }}
                  >
                    <span>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="px-4 text-xs uppercase font-semibold tracking-wider text-gray-500 mb-2">Preferences</h3>
              <button
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <div className="flex items-center space-x-3">
                  {darkMode ? <Moon size={18} className="text-indigo-400" /> : <Sun size={18} className="text-amber-500" />}
                  <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
                <div className="relative w-10 h-5 flex items-center rounded-full bg-gray-300 dark:bg-gray-600">
                  <motion.div
                    className={`absolute w-4 h-4 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-amber-500'}`}
                    animate={{ left: darkMode ? '1.5rem' : '0.25rem' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </motion.aside>

      <div className={`flex flex-col flex-1 ms-[270px] relative bg-transparent`}>
        <header className={`sticky  top-2 mx-6 shadow-md shadow-black/40 rounded-lg z-30 border-b bg-white`}>
          <div className="px-4 sm:px-6 py-3 flex justify-between items-center">
            <div className="flex items-center justify-between flex-1">
              <div className={`relative hidden md:block  rounded-lg px-3 py-2`}>
                <div className="pointer-events-none w-12 absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <Search size={16}  />
                </div>
                <Input
                  type="text"
                  placeholder="Search..."
                  className={`w-56 pl-8 pr-4 bg-slate-300 `}
                />
              </div>
              <div className='flex flex-row gap-4 items-center'>
                <button className="hidden md:block p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-500" />}
                </button>
                <div className="relative">
                  <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Bell size={18} />
                    {unreadCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center"
                      >
                        {unreadCount}
                      </motion.span>
                    )}
                  </button>
                </div>
                <div className="relative">
                  <div
                    className="flex items-center space-x-2 group cursor-pointer"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-medium">A</div>
                    <span className="hidden lg:inline-block font-medium">Admin User</span>
                    <ChevronDown size={16} className={userDropdownOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                  </div>

                  <AnimatePresence>
                    {userDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} border `}
                      >
                        <div className="py-1">
                          <div className={`px-4 py-3 border-b `}>
                            <p className="text-sm font-medium">Admin User</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">admin@propertyhub.com</p>
                          </div>
                          {[{ icon: User, label: 'Your Profile' }, { icon: Settings, label: 'Account Settings' }, { icon: HelpCircle, label: 'Help & Support' }].map(({ icon: Icon, label }) => (
                            <button key={label} className={`w-full text-left px-4 py-2 text-sm hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}> <div className="flex items-center space-x-2"> <Icon size={16} /><span>{label}</span></div></button>
                          ))}
                          <div className={`border-t `}>
                            <button className={`w-full text-left px-4 py-2 text-sm hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}> <div className="flex items-center space-x-2"> <LogOut size={16} /><span>Sign out</span></div></button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>





            </div>
          </div>
        </header>

        <main className={`flex-1 p-4 sm:p-6 `}>
          <Outlet />
        </main>

        <footer className={`py-4 px-6 border-t bg-white rounded-lg mx-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} FindMyStay. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to={PRIVACY} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</Link>
              <Link to={TERMES} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</Link>
              <Link to={CONTACT} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LayoutDashboard;
