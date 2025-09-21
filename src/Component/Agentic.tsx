
// import agentic from '../assets/agentic-2.png'
// import { InteractiveHoverButton } from '../components/magicui/interactive-hover-button';

// import { TextAnimate } from "../components/magicui/text-animate";
// import MotionFadeIn from "../components/ui/MotionFadIn";


// export default function Agentic(){
//     return(
//         <>
//                         {/* <section className=" bg-linear-to-r to-blue-900 from-slate-900">
//                             <div className="w-full items-center  justify-center" >
//                                 <MotionFadeIn>

//                                         <div className="max-w-7xl mx-auto grid grid-cols-2 items-center gap-4 text-white">
                                                
//                                             <div>
                                              
//                                                  <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold">
//                                                     Ready to Explore the Power
//                                                 </TextAnimate>
//                                                  <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold mb-8">
//                                                     the Power of Agentic AI?
//                                                 </TextAnimate>

//                                                 <h3 className="text-xl mb-8 text-neutral-400">We deliver expert consultancy with AI-driven solutions to seamlessly automate your manual workflows into smart, efficient processes.</h3>
//                                                     <InteractiveHoverButton className="bg-[#162556] border-blue-700 ">Book a Free Consultaion Today</InteractiveHoverButton>


//                                             </div>
//                                             <div>
//                                                     <img src={agentic} alt="" className="w-full h-full object-cover object-center hover:scale-125 transition duration-300 ease-in-out "/>
//                                                 </div>
                                               

//                                         </div>
//                                 </MotionFadeIn>
//                             </div   >
//                         </section> */}
//                         <section className="bg-gradient-to-r to-blue-900 from-slate-900 py-16 px-6">
//                             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-8 text-white">
//                                 <MotionFadeIn>
//                                 {/* LEFT */}
//                                 <div className="text-center lg:text-left">
//                                     <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold">
//                                     Ready to Explore 
//                                     </TextAnimate>
//                                     <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
//                                     the Power of Agentic AI?
//                                     </TextAnimate>

//                                     <h3 className="text-base sm:text-lg md:text-xl mb-8 text-neutral-400">
//                                     We deliver expert consultancy with AI-driven solutions to seamlessly automate your manual workflows into smart, efficient processes.
//                                     </h3>
//                                     <InteractiveHoverButton className="bg-[#162556] border-blue-700" onClick={() => window.location.href = '/contact-us'}>
//                                         Book a Free Consultation Today
//                                     </InteractiveHoverButton>
//                                 </div>

//                                 </MotionFadeIn>
//                                 {/* RIGHT */}
//                                 <MotionFadeIn>
//                                     <div className="flex justify-center">
//                                         <img src={agentic} alt="" className="w-full h-full object-cover object-center hover:scale-125 transition duration-300 ease-in-out rounded-xl" />
//                                     </div>
//                                 </MotionFadeIn>
//                             </div>
//                             </section>

//         </>
//     )
// }

// import { useState, useEffect } from "react";
import agentic1 from "../assets/agentic1.png";
// import agentic2 from  "../assets/agentic2.png"
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
// import { TextAnimate } from "../components/magicui/text-animate";
import MotionFadeIn from "../components/ui/MotionFadIn";
// import agentic3 from "../assets/agentic3.png";
// import bot from "../assets/bot.png"
import bot2 from "../assets/bot2.png"

export default function Agentic() {
  const slides = {
      title1: "Ready to Explore",
      title2: "the Power of Agentic AI?",
      description:
        "We deliver expert consultancy with AI-driven solutions to seamlessly automate your manual workflows into smart,<br/> efficient processes.",
      image: agentic1,
    }
   

  // const [current, setCurrent] = useState(0);

  // // Auto-slide every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  // const slide = slides[current];

  return (
    <section className="bg-gradient-to-r from-[#009EE2] to-[#6F2DA8] py-10 px-6 flex flex-col justify-center font-montserrat">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-8 text-white">
        
        {/* LEFT TEXT */}
        <MotionFadeIn >
          <div className="text-center lg:text-left font-montserrat-light">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              {slides.title1}
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8" 
            >
              {slides.title2}
            </h1>

            <h3 className="text-base sm:text-lg md:text-xl mb-8 text-white font-inter" dangerouslySetInnerHTML={{__html : slides.description}}>
              {/* {slides.description} */}
            </h3>
            <InteractiveHoverButton
              className="bg-cyan-500"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Book a Free Consultation Today
            </InteractiveHoverButton>
          </div>
        </MotionFadeIn>

        {/* RIGHT IMAGE */}
        <MotionFadeIn >
          <div  className="flex justify-center">
            <img
              src={bot2}
              className="w-full max-h-[500px] object-cover object-center hover:scale-110 transition duration-500 ease-in-out rounded-xl"
            />
          </div>
        </MotionFadeIn>
      </div>

    
    </section>
  );
}
