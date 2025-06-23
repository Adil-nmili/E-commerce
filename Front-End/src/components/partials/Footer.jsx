import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1F3C88] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="flex items-center gap-2 mb-2 text-gray-300">
            <MapPin className="w-4 h-4" />
            <span>123 Rue Al Qods, Casablanca</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-gray-300">
            <Phone className="w-4 h-4" />
            <span>+212 6 00 00 00 00</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4" />
            <span>contact@findmystay.ma</span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">Properties</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#"><Facebook className="w-5 h-5 hover:text-[#F26A4B]" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-[#F26A4B]" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-[#F26A4B]" /></a>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4 text-sm">Subscribe to receive the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black placeholder:text-gray-500"
            />
            <Button className="bg-[#F26A4B] hover:bg-[#d95836] text-white px-4 py-2">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} FindMyStay. All rights reserved.
      </div>
    </footer>
  )
}
