import { Card, CardContent } from '@/components/ui/card'
import { ShieldCheck, Search, Users, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    description: "All listings are verified and secured with trust and transparency.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Easily find homes that fit your needs with powerful filters.",
  },
  {
    icon: Users,
    title: "Tenant Support",
    description: "Get help any time with our 24/7 customer service.",
  },
  {
    icon: Building2,
    title: "Verified Properties",
    description: "Every property is reviewed and approved for quality assurance.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-[#F26A4B]">FindMyStay</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Discover what makes our platform the best choice for renters and property owners.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-xl transition duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <feature.icon className="w-10 h-10 text-[#1F3C88]" />
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button className="bg-[#6A994E] hover:bg-[#4e9951] text-white px-6 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
