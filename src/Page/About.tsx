import Mission from "../Component/Mission";
import Pillors from "../Component/Pillors";
import Vision from "../Component/Vision";
// import { Globe } from "../components/magicui/globe"
import { TextAnimate } from "../components/magicui/text-animate";
import MotionFadeIn from "../components/ui/MotionFadIn";
// import bot from "../assets/bot2.png"
// import video2 from  "../assets/video/vide02.mp4"
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import wing from "../assets/Evolve Wings-01 (1).png"
import dictationary from "../assets/dictionary-removebg-preview (2).png"
import Mindsets from "../Component/Mindset";



const About = () => {

    // Intersection observer
  // const controls = useAnimation();
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
      <section className="pt-30 pb-20 flex justify-center items-center px-6  font-montserrat-light ">
        <MotionFadeIn>
          <div className="max-w-7xl mx-auto gap-8 grid lg:grid-cols-2">
            {/* Text */}
            <div className="text-black lg:text-left text-center">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                className="text-3xl md:text-5xl font-bold mb-4  text-gray-700"
              >
                About Us
              </TextAnimate>
              <p className=" text-base md:text-lg mb-4 text-justify font-inter">
                At Evolve, we turn global sustainability challenges into technology opportunities. With the combined strength of management consulting expertise and next-generation technologies — AI, blockchain, cloud, and automation — we design enterprise products that help corporations achieve traceability, ESG transparency, and compliance.
              </p>
              <p className="text-base md:text-lg mb-4 text-justify font-inter">
                Our solutions go beyond efficiency; they empower organizations to embrace circularity by embedding the principles of the circular economy into digital systems. From regulatory alignment to transparent data sharing, we enable enterprises to adapt, innovate, and lead responsibly in a rapidly changing world.
              </p>
              {/* <p className=" text-base md:text-lg text-justify font-inter">
                At the heart of Evolve are our people the Evolvepers thinkers,
                builders, and evolvers who bring creativity, discipline and
                responsibility to everything we create. Together, we empower
                global enterprises to lead with innovation, resilience, and
                impact that lasts.
              </p> */}
            </div>
            <div className="relative ">
                    {/* <motion.div
                      ref={ref} // 🔑 make sure ref is attached so useInView works
                      className="absolute"
                      initial="hidden"
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 , y: 30 }, // 🔥 start small & faded
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.8,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      <motion.img
                        src={dictationary}
                        alt="Glow Logo"
                        className="w-full h-full object-cover object-center"
                        animate={{
                           opacity: [0.6, 1, 0.6], // glowing effect
                            scale: [1, 1.05, 1],   // subtle pulsing
                            y: [0, -20, 0],        // floating up & down
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div> */}

                    <img src={dictationary} alt="" />
            </div>

            {/* Globe */}
            {/* <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <Globe className="-top-70 -right-30" />
                    </div>
                </div> */}
          </div>
        </MotionFadeIn>
      </section>

      <Vision />

      <Mission />
      <Pillors />
      <Mindsets/>
    </>
  );
};

export default About;
