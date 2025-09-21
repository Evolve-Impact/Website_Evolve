// src/components/Features.tsx
// import { BentoCard, BentoGrid } from "../components/magicui/bento-grid.tsx";
import MotionFadeIn from "../components/ui/MotionFadIn.tsx";

// import { FaRegFileLines } from "react-icons/fa6";
// import pic1 from "../assets/e2.png";
// import pic2 from "../assets/e.png";
// import pic3 from "../assets/Artboard-6.png";
import { TextAnimate } from "../components/magicui/text-animate.tsx";
// import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
// import { GiButterfly } from "react-icons/gi";
// import { FaPeopleGroup } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import wing from "../assets/Evolve Wings-01 (1).png";
// import { GiButterfly } from "react-icons/gi";



const features = {
    Icon: <FaUsers/>,
    name: "About Us",
    description:"<span><GiButterfly/></span> We are <b>Evolvepers.</b> <br/>  We bridge <b>business insight with advanced technologies</b>  — AI, blockchain, cloud, and automation — to create solutions that help corporations lead responsibly in a world of change. <br/> We carry <b>sustainability, integrity, and trust</b> at the core of everything we do.",
    href: "/about-us",
    cta: "Explore more",
    background: (
      <>
      
      </>
      // <img src={pic1} className="absolute -right-20 -top-20 opacity-40" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1 border-2 border-neutral-400 hover:border-[#D19FE8] transition duration-200 text-lg",

  // {
  //   Icon: <AiFillProduct/>,
  //   name: "Evolve's Product Development Philosophy",
  //   description:
  //     "“Our culture is built on trust, collaboration, and creativity because when people thrive, technology evolves.At Evolve, we believe that great products are built by empowered people. Our culture is professional, open, and collaborative, fostering an environment where talent is nurtured, curiosity is encouraged, and innovation thrives. We combine the discipline of a global technology company with the openness of a learning culture — enabling our people to grow, experiment, and lead with confidence. Diversity of thought and inclusive teamwork ensure that every perspective strengthens our solutions. At its core, our culture is about translating ideas into impact — for our people, for our clients, and for the world. Because when people grow, technology evolves, and meaningful change becomes possible.",
  //   href: "/product-development",
  //   cta: "Learn more",
  //   background: (
  //     <>
      
  //     </>
  //     // <img src={pic2} className="absolute right-20 top-5 opacity-40" />
  //   ),
  //   className:
  //     "lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-2  border-2 border-neutral-400 hover:border-[#D19FE8] transition duration-200 text-lg",
  // },
  };

export default function Culture() {

  // Intersection observer
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);



  return (

    <section id="products" className="pt-20 pb-20 px-6">
      <div className="max-w-7xl mx-auto font-montserrat-light">
        <MotionFadeIn>
 
          <div className="grid lg:grid-cols-2 lg:text-left text-center relative">
          
                <div className=" flex flex-col justify-between ">
                   <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-700"
            >
              Who we are
            </TextAnimate>
           
              
                    <p className="text-2xl mb-8 text-black font-inter text-justify " dangerouslySetInnerHTML={{ __html : features.description}}></p>
                
                  <div className="">
                    <a href={features.href} className="text-white bg-cyan-500 px-4 py-2 rounded-lg text-  hover:shadow-xl hover:shadow-cyan-400 cursor-pointer transition duration-200 font-sans">
                      {features.cta}
                    </a>
                  </div>

                </div>
                <div className="relative flex items-center justify-center ">

                  <motion.div
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
                        src={wing}
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
                    </motion.div>
           
              </div>


          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
