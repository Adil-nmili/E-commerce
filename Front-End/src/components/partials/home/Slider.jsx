import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Zoom, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom'
import 'swiper/css/effect-fade'
import { Button } from '@/components/ui/button'

const slides = [
    {
        id: 1,
        title: "Rent your Appartement freely",
        description: "Find tenants easily and manage your property with full control.",
        image: "/assets/app1.jpg"
    },
    {
        id: 2,
        title: "Find Your Perfect Home",
        description: "Browse a wide range of properties tailored to your lifestyle and budget.",
        image: "/assets/app2.jpg"
    },
    {
        id: 3,
        title: "List Properties With Ease",
        description: "Quickly post listings and reach thousands of potential renters.",
        image: "/assets/app3.jpg"
    },
    //   {
    //     id: 4,
    //     title: "Secure and Fast Booking",
    //     description: "Enjoy a seamless booking experience with verified listings and secure payments.",
    //     image: "/assets/app4"
    //   }
];


export default function SliderHero() {
    return (
        <>
            <div className="w-full h-[calc(100vh-50px)] mt-[50px] ">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    effect='fade'
                    zoom={true}
                    
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className='w-full h-full py-6 overflow-hidden px-20'
                >
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <div className={` py-16 h-full w-full  px-16 relative bg-cover bg-center bg-no-repeat `}
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className='bg-black/20 w-full h-full absolute top-0 left-0 flex flex-col md:flex-row items-center backdrop-blur-xs  justify-center gap-6'>
                                    <img
                                        loading='lazy'
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full md:w-7/12 h-7/12  shadow-black object-cover rounded-lg shadow-md absolute z-10  left-10"
                                    />
                                    <div className="md:w-5/12 text-center md:text-left h-5/12 flex flex-col absolute right-24 top-1/2 -translate-y-1/2 bg-[#F26A4B] p-8 rounded-xl shadow-md shadow-black z-20">

                                        <div>
                                            <h1 className="text-3xl font-bold text-black flex items-center">Find<span className="text-[#F4EBD0]">MyStay</span></h1>
                                        </div>

                                        <div className="flex-grow flex flex-col justify-center">
                                            <h2 className="text-2xl font-bold mb-2 text-black">{slide.title}</h2>
                                            <p className="text-gray-800">{slide.description}</p>
                                        </div>
                                        <div>
                                            <Button className="bg-[#1F3C88] hover:bg-[#1f2188] text-[#F4EBD0] shadow-sm shadow-black">Explore Properties</Button>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}