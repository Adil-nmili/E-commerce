import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Sofia Amrani",
    role: "Tenant, Casablanca",
    message: "FindMyStay helped me find a safe, affordable apartment in just 3 days. The process was smooth and stress-free!",
    image: "/assets/users/sofia.jpg",
    rating: 5
  },
  {
    name: "Youssef El Malki",
    role: "Landlord, Rabat",
    message: "Great platform! I listed my property and got responses the same week. Highly recommend it.",
    image: "/assets/users/youssef.jpg",
    rating: 4
  },
  {
    name: "Imane Bouchra",
    role: "Tenant, Marrakech",
    message: "I love the design and the support team was super helpful. Best rental experience I’ve had online.",
    image: "/assets/users/imane.jpg",
    rating: 5
  }
]

// Helper: Render stars
const renderStars = (count) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`text-yellow-400 ${i < count ? 'opacity-100' : 'opacity-30'}`}>★</span>
  ))

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hear from tenants and landlords who trust <span className="text-[#F26A4B]">FindMyStay</span>.
        </motion.p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition duration-300">
                  <CardContent className="p-6 space-y-4 text-left">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage className="object-cover" src={item.image} alt={item.name} />
                        <AvatarFallback >{item.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.role}</p>
                        <div className="text-sm mt-1">{renderStars(item.rating)}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">“{item.message}”</p>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
