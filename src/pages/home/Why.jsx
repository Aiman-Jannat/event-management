
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Why = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div className="mt-9 ">
            <h2 className="text-5xl text-purple-900 text-center font-bold">Why Choose Us?</h2>
            <div className="flex flex-col gap-5 justify-center items-center mt-10">
                <div className="bg-blue-50 w-1/2 p-10 " data-aos="fade-right">
                    <p className="text-3xl text-center  font-bold text-red-800">Who We Are?</p>
                    <p>At EventMasters, we are passionate about creating exceptional learning experiences. With years of expertise in event management, we have mastered the art of curating workshops and webinars that leave lasting impressions.</p>
                </div>
                <div className="bg-blue-50 p-10 w-1/2 text-center" data-aos="fade-left">
                    <p className="text-3xl font-bold text-red-800">What We Offer?</p>
                    <p>We work closely with you to design workshops that align perfectly with your goals and objectives. From content creation to interactive activities, we leave no stone unturned to ensure a seamless and impactful event.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Why;