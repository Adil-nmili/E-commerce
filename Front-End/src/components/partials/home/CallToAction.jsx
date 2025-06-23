import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="bg-[#1F3C88] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to find your next home?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Join thousands of renters and landlords using <span className="text-[#F4EBD0] font-semibold">FindMyStay</span> today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button className="bg-[#F26A4B] hover:bg-[#d95836] text-white px-6 py-3 text-lg rounded-full shadow-md">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
