import CallToAction from "../../components/partials/home/CallToAction";
import Search from "../../components/partials/home/Search";
import SliderHero from "../../components/partials/home/Slider";
import Testimonials from "../../components/partials/home/Testimonials";
import WhyChooseUs from "../../components/partials/home/WhyChooseUs";

export default function Home () {
    return (
        <>
            <SliderHero />
            <div className="bg-gray-300 h-16 w-full flex items-center justify-center"><div className="h-0.5 w-1/2 rounded bg-gray-400" ></div></div>
            <Search />
            <div className="bg-gray-300 h-16 w-full flex items-center justify-center"><div className="h-0.5 w-1/2 rounded bg-gray-400" ></div></div>
            <WhyChooseUs />
            <div className="bg-gray-300 h-16 w-full flex items-center justify-center"><div className="h-0.5 w-1/2 rounded bg-gray-400" ></div></div>
            <Testimonials />
            <div className="bg-gray-300 h-16 w-full flex items-center justify-center"><div className="h-0.5 w-1/2 rounded bg-gray-400" ></div></div>
            <CallToAction />
        </>
    )
}