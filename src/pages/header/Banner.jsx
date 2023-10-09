
import Marquee from "react-fast-marquee";
const Banner = () => {
    return (
        <div >
            <div className="px-10 bg-blue-50 border mt-7  text-bg-gradient-to-r from-cyan-500 to-blue-500">
    <Marquee className="font-bold ">
  WELCOME TO OUR WEBSITE! FEEL FREE TO ASK US ANY QUESTION ABOUT OUT COMAPANY. WE ARE UNCOMPROMIZING ABOUT OUR SERVICES.
    </Marquee>
    </div>
          
<div className=" bg-blue-50  ">
  <div className=" px-10  flex justify-between items-center flex-col lg:flex-row-reverse ">
    <div className=" w-full lg:w-1/2  h-full ">
    <img  src="https://swoogo.events/wp-content/uploads/2022/06/Blog_hero-feat_5-Benefits-of-Event-Management-Software-for-Higher-Education.jpg" className="my-5  h-full w-full  rounded-lg shadow-2xl" />
    </div>
    <div className="py-10">
      <h1 className="text-5xl font-bold">Educational <span className="text-blue-600">Events!</span></h1>
      <p className="py-6">That will help you to despart knowledge with others in many ways. Reasons you can see:</p>
      <ul className="list-disc ps-14 text-black">
        <li>Unlocking the Potential of Education</li>
        <li>Navigating the Future of Learning</li>
        <li>Elevating Education, Empowering Success</li>
        <li>Innovative Solutions for Educational Success</li>
        <li>Inspiring Minds, Shaping Futures</li>
      </ul>
      
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Banner;