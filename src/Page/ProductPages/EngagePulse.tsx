import MotionFadeIn from "../../components/ui/MotionFadIn";
// import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import mail from "../../assets/mail.png";
import main2 from "../../assets/main2.png";

import { TextAnimate } from "../../components/magicui/text-animate";
import { useState } from "react";
// import { IoCheckmarkSharp } from "react-icons/io5";
// import survey from "../../assets/Survey.png";
import griev1 from "../../assets/griev.png";
// import griev2 from "../../assets/griev2.png";
import survey2 from "../../assets/survey2.png";
// import survey3 from "../../assets/survey module 3.png"
import policy from "../../assets/policy.png"
import policy2 from "../../assets/policy2.png"
import { GlareCard } from "../../components/ui/glare-card";

interface ProductData {
  title: string;
  sub: string;
  features?: string[];
  img: string;
}

const DATA: Record<string, ProductData> = {
  Grievance: {
    title: "Grievance Mechanism",
    sub: "Voice with Confidence A fair, transparent system that gives employees the confidence to raise concerns and ensures every grievance is resolved with clarity and accountability.",
    // features: [
    //   "Pulse surveys and feedback loops to monitor employee sentiment.",
    //   "Recognition and rewards framework to boost morale.",
    //   "Reports that link engagement to performance metrics.",
    // ],
    img: griev1,
  },
  Surveys: {
    title: "Surveys",
    sub: "Real-Time Feedback Smart surveys that capture employee sentiment instantly and transform it into actionable insights for building a stronger workplace culture.",
    // features: [
    //   "Streamlines the entire audit lifecycle: planning, scheduling, execution, and reporting.",
    //   "Ensures transparency and adherence to international labor and safety standards.",
    //   "Facilitates collaboration between organizations, auditors, and stakeholders.",
    //   "Improves audit efficiency and reduces manual processes.",
    // ],
    img: survey2,
  },
  Policies: {
    title: "Policies & Training",
    sub: "Clarity that Empowers A centralized hub for policies and training, giving employees easy access to the knowledge they need while helping organizations stay compliant and future-ready.",
    // features: [
    //   "Standardized API-driven exchange for partners and suppliers.",
    //   "Built-in validation and transformation pipelines.",
    //   "Governance & audit logs for traceability.",
    // ],
    img: policy2,
  },
  Awareness: {
    title: "Awareness Videos",
    sub: "Learning Made Simple Short, engaging videos that break down complex topics into practical lessons, making knowledge easy to understand and apply every day.",
    // features: [
    //   "On-demand access to certified product data.",
    //   "Automated compliance reports no need to give manual reports on every demand.",
    //   "Real-time regulation compliance tracking with verified 3rd parties having certifications.",
    // ],
    img: policy,
  },
  //   Employee: {
  //     title: "Employee Care",
  //     sub: "A verified, digital record for product lifecycle & compliance.",
  //     features: [
  //       "Immutable product provenance and components ledger.",
  //       "Supports sustainability & compliance reporting.",
  //       "Easy integration with marketplaces and customer portals.",
  //     ],
  //     img : "" ,

  //   },
};

const pills = [
  { key: "Grievance", label: "Grievance" },
  { key: "Surveys", label: "Surveys" },
  { key: "Policies", label: "Policies" },
  { key: "Awareness", label: "Awareness Videos" },
  //   { key: "Employee", label: "Employee Care" },
];

const EngagePulse = () => {
  const [activeKey, setActiveKey] = useState<keyof typeof DATA>("Grievance");
  const product = DATA[activeKey];
  return (
    <>
      <div className="font-montserrat-light">
        <section className="pt-30 pb-20 px-6 text-white flex justify-center bg-gradient-to-r from-[#101340] to-[#2C2283]">
          <MotionFadeIn>  
            <div className="max-w-7xl grid lg:grid-cols-2 lg:gap-4 items-center">
              <div>
                <div className="space-y-2">

                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-3xl md:text-4xl font-bold text-center md:text-left"
                        >
                        {"Employee Engagement"}   
                      </TextAnimate>
                      <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-3xl md:text-4xl font-bold text-center md:text-left mb-2"
                      >
                        {"Tool"} 
                      </TextAnimate>
                    </div>
               
                <p className=" text-lg mb-4 md:text-justify text-center lg:w-lg text-white font-inter">
                  The future of work is connected, transparent, and intelligent.
                  As part of Evolve’s product suite, this AI-powered tool helps
                  businesses move beyond traditional engagement with a platform
                  built for modern challenges
                </p>

        
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={mail}
                  alt=""
                  className="w-ful h-full object-center object-cover"
                />
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-10 px-6 text-gray-700 flex items-center justify-center">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-15">
              <div className="max-w-5xl">
                <img
                  src={main2}
                  alt=""
                  className="w-xl h-full object-center object-cover"
                />
              </div>
              <div className="lg:max-w-xl">
                <div className="space-y-1 mb-6">
                  <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="text-3xl md:text-4xl font-bold text-center lg:text-left "
                    >
                     Disconnected employees,
                  </TextAnimate>
                   <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="text-3xl md:text-4xl font-bold text-center lg:text-left "
                    >
                     delayed decisions,
                  </TextAnimate>
                   <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="text-3xl md:text-4xl font-bold text-center lg:text-left "
                    >
                     and scattered workflows?
                  </TextAnimate>
                </div>

                <p className=" text-xl mb-8  text-black text-center lg:text-left font-inter">
                  Evolve brings you an AI-driven Employee Engagement Tool that
                  listens, learns, and acts. Whether it’s handling grievances,
                  analyzing feedback, delivering training, or connecting
                  employees to care services, our platform makes workforce
                  engagement smarter, proactive, and future-ready.
                </p>
              </div>
            </div>
          </MotionFadeIn>
        </section>
         <section id="Mission" className="pt-20 pb-20 px-6 font-montserrat-light text-gray-500">
                  <MotionFadeIn>
                      <div className="max-w-8xl mx-auto">
                        <TextAnimate animation="blurInUp" by="character" once className=" text-gray-700 text-3xl md:text-5xl font-bold mb-6 text-center">
                          Why Choose Our Tool ?
                        </TextAnimate>
                      
        
                        {/* Responsive grid */}
                        <div className="flex flex-wrap justify-center gap-4 font-inter">
                          
                            <GlareCard className="flex flex-col md:w-full items-center justify-center p-6">
                              
                              <p className="text-white text-lg md:text-xl mt-4 text-center font-inter "> Strengthen Trust with secure grievance redressal aligned to
                              global standards.</p>                      
                                          
                            </GlareCard>
                            <GlareCard className="flex flex-col md:w-full items-center justify-center p-6">
                              <p className="text-white text-lg md:text-xl mt-4 text-center font-inter ">  Empower Voices through real-time surveys and transparent feedback loops.</p>

                            </GlareCard>
                            <GlareCard className="flex flex-col md:w-full items-center justify-center p-6">
                                  <p className="text-white text-lg md:text-xl mt-4 text-center font-inter "> Show You Care by supporting employees beyond the workplace with financial and welfare services</p>
                              
                            </GlareCard>
                            <GlareCard className="flex flex-col md:w-full items-center justify-center p-6">
                            <p className="text-white text-lg md:text-xl mt-4 text-center font-inter "> Together, these modules create more than engagement they build
                                                          resilience, responsibility, and reputation.</p>
                                                          
                            </GlareCard>
                        
                        </div>
                      </div>
                  </MotionFadeIn>
                </section>
        <section className="py-10 px-6 text-white flex items-center justify-center bg-gradient-to-r from-[#101340] to-[#2C2283]  ">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                className="text-3xl md:text-4xl font-bold text-center mb-8"
              >
                Product Features
              </TextAnimate>
              <div
                // className="flex flex-wrap gap-3 justify-center mb-12"
                className="flex gap-3 md:justify-center justify-start mb-12 overflow-x-auto scrollbar-hide"
              >
                {pills.map((pill) => (
                  <button
                    key={pill.key}
                    onClick={() => setActiveKey(pill.key as keyof typeof DATA)}
                    className={`px-4 py-2 flex-shrink-0  rounded-full text-sm font-medium transition cursor-pointer ${
                      activeKey === pill.key
                        ? "bg-[#009EE2] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              <div className="">
                {/* LEFT */}
                <motion.div
                  key={activeKey}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="rounded-xl p-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                      <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-xl sm:text-2xl font-bold"
                      >
                        {product.title}
                      </TextAnimate>
                      <div className="h-1 w-16 bg-[#009EE2] my-3"></div>
                      <p className="text-gray-400 text-2xl mb-6">{product.sub}</p>

                      <ul className="space-y-3">
                        {/* {product.features.map((feature, i) => (
                                                                <li key={i} className="flex items-start gap-2">
                                                                    <IoCheckmarkSharp className="text-blue-500 mt-1" size={18} />
                                                                    <span className="text-gray-300">{feature}</span>
                                                                </li>
                                                            ))} */}
                      </ul>
                    </div>
                    <div>
                      <img
                        src={product.img}
                        alt=""
                        className="w-[500px] h-full object-cover object-center drop-shadow-2xl drop-shadow-[#009EE2] rounded-xl"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT */}
              </div>
            </div>
          </MotionFadeIn>
        </section>
      </div>
    </>
  );
};

export default EngagePulse;
