// // src/components/Hero.tsx
// import MotionFadeIn from "../components/ui/MotionFadIn.tsx";
// // import { TextAnimate } from "../components/magicui/text-animate.tsx";
// import hero from "../assets/hero.png"
// import { Link } from "react-router-dom";
// // import { MorphingText } from "../components/magicui/morphing-text.tsx";
// // import { WordRotate } from "../components/magicui/word-rotate.tsx";
// import { TypingAnimation } from "../components/magicui/typing-animation.tsx";

// export default function Hero() {
//   return (
//     // <section className="min-h-screen w-full flex flex-col items-center justify-center text-white px-6">
//     //   <MotionFadeIn>
//     //   <div className="max-w-7xl grid grid-cols-2 gap-4 items-center">
//     //     <div>

        
//     //       <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold">
//     //         Think Boldly
//     //       </TextAnimate>
//     //       <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold">
//     //         Build Responsibly
//     //       </TextAnimate>
//     //       <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold">
//     //         Evolve Continously
//     //       </TextAnimate>

//     //       <p className="mt-4 text-gray-400 max-w-2xl ">
//     //         At Evolve, we transform global sustainability chall
//     //         enges into technology opportunities, blending consulting expertise with AI, blockchain, cloud, and automation
//     //         . Our enterprise solutions drive traceability, ESG transparency, and circularity, helping organizations adapt, 
//     //         innovate, and lead responsibly.
                                  
//     //       </p>
//     //       <div className="mt-6 flex gap-4">
//     //           <button className="bg-[#1940B5] px-4 py-2 rounded-xl border border-blue-700 cursor-pointer hover:bg-blue-900 transition duration-200 font-sans">Learn More</button>
//     //           <button className="bg-neutral-900 px-4 py-2 rounded-xl font-sans border transition duration-200 border-neutral-700 shadow-inner hover:shadow-inner hover:shadow-neutral-200 shadow-neutral-500 cursor-pointer">Contact Us</button>

//     //       </div>
//     //     </div>
//     //     <div>
//     //      {/* <img src={hero} alt="" className="w-full h-full object-cover object-center drop-shadow-2xl drop-shadow-blue-500 "/> */}
//     //      <video src={herovideo} autoPlay loop muted className="w-full h-full object-cover object-center"></video>
//     //     </div>
//     //   </div >
//     //   </MotionFadeIn>
//     // </section>
//     <section className="min-h-screen w-full flex flex-col items-center justify-center text-white px-6 lg:py-20  pt-40">
//   <MotionFadeIn>
//     <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//       {/* LEFT */}
//       <div className="text-center lg:text-left">
//         {/* <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           Think Boldly
//         </TextAnimate>
//         <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           Build Responsibly
//         </TextAnimate>
//         <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           Evolve Continuously
//         </TextAnimate> */}
//         <TypingAnimation className="text-3xl sm:text-4xl md:text-5xl font-bold poppins-bold">Think Boldly</TypingAnimation>
//         <TypingAnimation className="text-3xl sm:text-4xl md:text-5xl font-bold poppins-bold">Build Responsibly</TypingAnimation>
//         <TypingAnimation className="text-3xl sm:text-4xl md:text-5xl font-bold poppins-bold">Evolve Continuously</TypingAnimation>

//         {/* <WordRotate words={["Think Boldly", "Build Responsibly", "Evolve Continuously"]} className="text-3xl sm:text-4xl md:text-5xl font-bold poppins-bold"/> */}


//         {/* <p className="mt-4 text-gray-400 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-base">
//             At Evolve, we transform global sustainability chall
//             enges into technology opportunities, blending consulting expertise with AI, blockchain, cloud, and automation
//             . Our enterprise solutions drive traceability, ESG transparency, and circularity, helping organizations adapt, 
//              innovate, and lead responsibly.
//         </p> */}

//         <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//           <Link to={"/about"}>
//             <button className="bg-[#1940B5] px-4 py-2 rounded-xl border border-blue-700 cursor-pointer hover:bg-blue-900 transition duration-200 font-sans">
//               Learn More
//             </button>
//           </Link>
//           <Link to={"/contact-us"}>
//             <button className="bg-neutral-900 px-4 py-2 rounded-xl font-sans border transition duration-200 border-neutral-700 shadow-inner hover:shadow-inner hover:shadow-neutral-200 shadow-neutral-500 cursor-pointer">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div>
//         {/* <video src={herovideo} autoPlay loop muted className="w-full h-full object-cover object-center rounded-xl"></video> */}
//           <img src={hero} alt="" className="w-full h-full object-cover object-center drop-shadow-2xl drop-shadow-blue-500 "/>
//       </div>
//     </div>
//   </MotionFadeIn>
// </section>

//   );
// }
// import { useState } from "react";
import { Link } from "react-router-dom";
import MotionFadeIn from "../components/ui/MotionFadIn";
import { TypingAnimation } from "../components/magicui/typing-animation";

// Import your slide images
import hero1 from "../assets/hero.png";
// import hero2 from "../assets/hero.png";
// import hero3 from "../assets/hero.png";

// type Slide = {
//   title: string[];
//   image: string;
//   bg: string;
// };

// const slides: Slide[] = [
//   {
//     title: ["Think Boldly", "Build Responsibly", "Evolve Continuously"],
//     image: hero1, 
//     bg: "bg-[#123458]",
//   },
//   {
//     title: ["Innovate Smartly", "Scale Globally", "Lead with Impact"],
//     image: hero2,
//     bg: "bg-[#27548A]",
//   },
//   {
//     title: ["Design for Future", "Embrace Technology", "Transform Together"],
//     image: hero3,
//     bg: "bg-[#183B4E]",
//   },
// ];

export default function Hero() {


  // Auto-slide every 5s
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);




  return (
    <section
      className={`lg:h-[70vh] h-[90vh] w-full flex flex-col items-center font-montserrat-light justify-center text-white px-6 bg-gradient-to-r from-[#101340] to-[#2C2283] transition-colors duration-700 `}
      //  style={{
      //     background: "radial-gradient(circle at 20% 30%, rgba(111,45,168,0.9) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,158,226,0.9) 0%, transparent 40%), linear-gradient(135deg, #0B0C2A 0%, #121F4A 100%)"
      //   }}
       
    >
      <MotionFadeIn >
        <div className="flex flex-col justify-between w-full">

            <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LEFT */}
              <div className="text-center lg:text-left items-start">
             
                  <TypingAnimation
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat"
                    >
                    Think Boldly
                  </TypingAnimation>
                  <TypingAnimation
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat"
                    >
                    Build Responsibly
                  </TypingAnimation>
                  <TypingAnimation
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat"
                    >
                    Evolve Continuously
                  </TypingAnimation>
        

                <div className="mt-6 flex md:flex-col lg:flex-row gap-4 justify-center items-center lg:justify-start font-montserrat-light">
                  <Link to={"/about"}>
                    <button className="bg-cyan-500 px-4 py-2 rounded-lg  hover:shadow-xl hover:shadow-cyan-400 cursor-pointer transition duration-200 font-semibold">
                      Learn More
                    </button>
                  </Link>
                  {/* <Link to={"/contact-us"}>
                    <button className="px-4 py-2 rounded-lg font-sans border-2 bg-transparent hover:bg-white/15 transition duration-200  cursor-pointer">
                      Contact Us
                    </button>
                  </Link> */}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center">
                <img
                  src={hero1}
                  alt="hero"
                  className="w-full h-full max-h-[400px] object-contain drop-shadow-2xl transition-all duration-700"
                  />
              </div>
            </div>

            {/* SLIDER DOTS */}
            {/* <div className="flex justify-center mt-10 gap-3">
              {slides.map((_, i) => (
                <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === current ? "bg-brand-cyan" : "bg-gray-300"
                }`}
                />
              ))}
            </div> */}
          </div>
      </MotionFadeIn>
    </section>
  );
}

