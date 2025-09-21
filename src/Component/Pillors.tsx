
// import { FaBoxOpen } from "react-icons/fa";
import { TextAnimate } from "../components/magicui/text-animate";
import { GiArchiveResearch } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { PiPaintBrushFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { PiPlantFill } from "react-icons/pi";
import { PiBuildingFill } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import MotionFadeIn from "../components/ui/MotionFadIn";
// import { HoverEffect } from "../components/ui/card-hover-effect";
// import React from "react";
// import { Link } from "react-router-dom";
// import type { title } from "process";

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

const Pillors = () => {



  const pillor = [
    { icon: <GiArchiveResearch />, title: "Foresight & Research"  },
    { icon: <BsStars />, title: "Creativity at the Core"  },
    { icon: <PiPaintBrushFill />, title: "Compliance by Design"  },
    { icon: <TbTargetArrow />, title: "Impact with Purpose"  },
    { icon: <GrTechnology />, title: "Technology Excellence"  },
    { icon: <PiPlantFill />, title: "Sustainability at the Core"  },
    { icon: <PiBuildingFill />, title: "Enterprise-Centric Focus"  },
    { icon: <FaUsersGear />, title: "Integrity & Trust"  }, 
    { icon: <SiGoogleanalytics />, title: "Continuous Evolution"  },
  ];

  // const pillor  = [
  //   { title: "Foresight & Research", description: "We start with a global perspective — scanning markets, regulations, and industries to anticipate change before it happens. This foresight keeps our products relevant and forward-looking." , link: "", icon: <GiArchiveResearch size={28} />},
  //   { title: "Creativity at the Core", description: "Innovation begins with imagination. We foster creativity across our teams to design solutions that are not only functional but also transformative in how they address business and sustainability challenges." , link: "", icon: <BsStars size={28} />},
  //   { title: "Compliance by Design", description: "International standards and regulations (EU, UN, OECD, ISO) are built into our product DNA, ensuring that corporations remain aligned with global requirements on traceability, circularity, and ESG accountability." , link: "", icon: <PiPaintBrushFill size={28} />},
  //   { title: "Impact with Purpose", description: "Every product we build solves real corporate challenges and contributes to sustainability." , link: "", icon: <TbTargetArrow size={28} />},
  //   { title: "Technology Excellence", description: "We harness the power of advanced technology like AI, blockchain, cloud, automation, and advanced analytics to engineer secure, scalable, and intelligent enterprise products." , link: "", icon: <GrTechnology size={28} />},
  //   { title: "Sustainability at the Core", description: "Every solution we develop contributes to a more responsible future — enabling transparency, circular business models, and measurable environmental and social impact." , link: "", icon: <PiPlantFill size={28} />},
  //   { title: "Enterprise-Centric Focus", description: "We design products for the scale, governance, and complexity of global corporations, ensuring seamless integration into existing ecosystems." , link: "", icon: <PiBuildingFill size={28} />},
  //   { title: "Integrity & Trust", description: "Our work is grounded in professionalism, transparency, and ethical responsibility, making us a trusted partner for enterprises across industries" , link: "", icon: <FaUsersGear size={28} />},
  //   { title: "Continuous Evolution", description: "We continuously refine and enhance our products by learning from clients, stakeholders, and global market shifts — ensuring long-term impact and resilience." , link: "", icon: <SiGoogleanalytics size={28} />},
  // ];

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
    <section id="Pillors" className="pt-20 pb-20 text-white relative px-6 bg-gradient-to-l from-[#009EE2] to-[#6F2DA8]">
      <MotionFadeIn>
        {/* Background Logo with Glow */}
        {/* <motion.div
          className="absolute max-w-7xl xl:top-10 2xl:right-80 lg:right-10 flex justify-center"
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
          <div className="flex items-center">
            <img
              src={wing}
              alt="Glow Logo"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div> */}

        <div className="max-w-7xl mx-auto relative z-10 font-montserrat-light">
          {/* Title */}
          {/* <div className="flex items-center justify-center gap-2 mb-6">
            <div className="border-t w-12 border-blue-800 shadow shadow-blue-500"></div>
            <div className="bg-blue-950 border border-blue-800 flex justify-center items-center rounded-full px-3 py-1 text-sm">
              <span className="text-blue-400">
                <FaBoxOpen />
              </span>
              <h2 className="font-sans ml-1">Foundation</h2>
            </div>
            <div className="border-t w-12 border-blue-800 shadow shadow-blue-500"></div>
          </div> */}

          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-3xl md:text-5xl font-bold mb-4 text-center text-white"
          >
            Foundation & Pillars
          </TextAnimate>

          <div className="flex justify-center items-center mb-4 ">
            <p className="text-base md:text-lg w-full md:w-3/4 lg:w-2/3 text-center text-gray-200 font-inter">
              At Evolve, our products are built on a strong foundation of values and commitments that guide how we innovate, design, and deliver for global enterprises. These pillars ensure that every product we create is strategic, sustainable, and future-ready.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillor.map((pill, index) => (
              <div
                key={index}
                className="flex flex-col items-center group p-8 text-center space-y-4 hover:scale-[1.03] duration-400 transition-transform"
              >
                <h1 className="text-5xl md:text-7xl text-white duration-400 transition">{pill.icon}</h1>
                <h2 className="text-lg text-zinc-200 font-inter">{pill.title}</h2>
              </div>

            ))}
          </div>
          {/* <div className="text-white">
            <HoverEffect items={pillor}  />
          </div> */}
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default Pillors;
