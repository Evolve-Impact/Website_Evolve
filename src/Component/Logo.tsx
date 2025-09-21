
import { TextAnimate } from "../components/magicui/text-animate";
import MotionFadeIn from "../components/ui/MotionFadIn";
import wings from "../assets/Evolve Wings-01 (1).png";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import evolve from "../assets/Evolve Logo-01.png"

const Logo = () => {

  //  const controls = useAnimation();
  // const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);



  return (
    <>
      <section id="logo" className="py-20 text-white px-6 flex items-center justify-center">
        <MotionFadeIn>
         
      
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-1 gap-4 items-center">
            {/* Background Wings */}
            {/* <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={wings}
                alt=""
                className="sm:max-w-[60%] h-auto object-contain opacity-20"
              />
            </div>
           
            <TextAnimate
              animation="blurInUp"
              by="word"
              once
              className="relative text-white text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-5"
            >
              Our Identity Brand Story
            </TextAnimate>
            <p className=" md:text-lg text-center mb-8">
              Think Boldly, Build Responsibly, Evolve Continuously
            </p>
            <div className="font-semibold text-white">
              <p className=" md:text-lg text-center mb-8">
                The Evolve logo is more than a mark it is a reflection of who we
                are. The forward arrow symbolizes progress and continuous
                transformation, while its color spectrum tells a deeper story of
                our foundations and our culture. Blue represents foresight,
                trust, and integrity the discipline with which we Think. Green
                embodies renewal, sustainability, and responsibility the values
                that guide how we Build. Purple reflects creativity, innovation,
                and adaptability the energy that drives us to Evolve.
              </p>
              <p className=" md:text-lg text-center mb-8">
                Our font tells its own story. Its clean, geometric form
                represents clarity and structure the discipline we bring to
                product design and execution. Yet its rounded balance suggests
                openness and adaptability, reflecting the inclusivity and
                collaboration we foster across our people, the Evolvepers. Just
                as the font balances strength with approachability, our culture
                balances professionalism with creativity.
              </p>
              <p className=" md:text-lg text-center mb-8">
                Together, these colors mirror our Foundational Pillars and the
                spirit of our people the Evolvepers. Just as the gradient blends
                shades into one flow, Evolvepers bring diverse skills and
                perspectives together, uniting discipline, creativity, and
                responsibility to shape products and cultures that matter. Our
                logo is not just design it is a visual manifesto of how we
                nurture talent, embrace sustainability, and drive purposeful
                innovation.
              </p>
            </div> */}
            <div className="hover:scale-[1.03] transition duration-500 relative bg-white text-black md:p-14 p-8 rounded-4xl shadow-[10px_10px_#1e3a8a] border-4 border-blue-700 overflow-hidden">
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover rotate-45 -top-10 -left-10 "
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-90 -top-16 left-60 "
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-180 -top-10 left-120"
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-6 -bottom-10 -left-10"
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover rotate-90 bottom-140 -left-24"
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-6 bottom-60 -right-20"
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-90 bottom-140 -right-24"
                  />

                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-180 bottom-60 -left-20"
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-45 -bottom-10 left-60"
                  />
                  <img
                    src={wings}
                    alt="wings background"
                    className="absolute w-44 object-cover -rotate-90 -bottom-10 left-130"
                  />
                    <TextAnimate animation="blurInUp" by="word" once
                        className="text-3xl text-slate-900 sm:text-4xl md:text-4xl font-bold mb-5"
                      >
                  Our Identity Brand Story
                </TextAnimate>

                <div className="font-extralight text-justify">
                  <p className=" md:text-lg  mb-8">
                    The <code className="bg-slate-500 font-bold  p-0.5 px-2 text-white rounded-lg">Evolve</code> logo is more than a mark it is a reflection of who we
                    are. The forward arrow symbolizes progress and continuous
                    transformation, while its color spectrum tells a deeper story of
                    our foundations and our culture. <span className="bg-[#22AED7] p-1 px-2 text-white rounded-lg font-bold">Blue</span> represents foresight,
                    trust, and integrity the discipline with which we Think. <span className="bg-[#2AF598] p-1 px-2 text-white rounded-lg font-bold m-1">Green</span>
                    embodies renewal, sustainability, and responsibility the values
                    that guide how we Build. <span className="bg-[#8F59C3] p-1 px-2 text-white rounded-lg font-bold">Purple</span>  reflects creativity, innovation,
                    and adaptability the energy that drives us to <code className="bg-slate-500 font-bold p-0.5 px-2 text-white rounded-lg">Evolve.</code>
                  </p>
                  <p className=" md:text-lg mb-8">
                    Our font tells its own story. Its clean, geometric form
                    represents clarity and structure the discipline we bring to
                    product design and execution. Yet its rounded balance suggests
                    openness and adaptability, reflecting the inclusivity and
                    collaboration we foster across our people, the <code className="bg-slate-500 font-bold p-0.5 px-2 text-white rounded-lg">Evolvepers.</code> Just
                    as the font balances strength with approachability, our culture
                    balances professionalism with creativity.
                  </p>
                  <p className=" md:text-lg mb-8 text-base/7">
                    Together, these colors mirror our Foundational Pillars and the
                    spirit of our people the <code className="bg-slate-500 font-bold p-0.5 px-2 text-white rounded-lg">Evolvepers.</code> Just as the gradient blends
                    shades into one flow, <code className="bg-slate-500 font-bold p-0.5 px-2 text-white rounded-lg">Evolvepers</code> bring diverse skills and
                    perspectives together, uniting discipline, creativity, and
                    responsibility to shape products and cultures that matter. Our
                    logo is not just design it is a visual manifesto of how we  
                    nurture talent, embrace sustainability, and drive purposeful
                    innovation.
                  </p>
                </div>

              
            </div>
            {/* <div ref={ref} className="flex items-center justify-center">
              <motion.div
                className=""
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0.1, scale: 1 },
                  visible: {
                    opacity: [0.2, 0.5, 0.2], // glowing effect
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={evolve}
                    alt="Glow Logo"
                    className="w-full h-full object-cover object-center"
                  />
                
                </div>
              </motion.div>

            </div> */}

          </div>
        </MotionFadeIn>
      </section>
    </>
  );
};

export default Logo;
