// src/components/Products.tsx
import { useState } from "react";
import { motion } from "framer-motion";
// import { IoCheckmarkSharp } from "react-icons/io5";
import MotionFadeIn from "../components/ui/MotionFadIn";
import { TextAnimate } from "../components/magicui/text-animate";
// import hero from "../assets/hero.png"
// import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import griev1 from "../assets/griev.png";
// import data from "../assets/data-exchange.png"
import dpp from "../assets/dpp.png"
// import xlync from "../assets/xlync.png"
// import bag from "../assets/bag.png";
import shirt from "../assets/shirt.png"
import hredd from "../assets/exchange.png"

interface ProductData {
  title: string;
  sub: string;
  features: string[];
  forward : string;
  img : string;
}

const DATA: Record<string, ProductData> = {

  Employee: {
    title: "Employee Engagement Tool",
    sub: "Foster an engaged workforce with our AI-driven Employee Engagement tool with a built-in grievance resolution system, AI-driven insights, learning modules, and survey/feedback mechanisms.",
    features: [
      "Streamlines the entire audit lifecycle: planning, scheduling, execution, and reporting.",
      "Ensures transparency and adherence to international labor and safety standards.",
      "Facilitates collaboration between organizations, auditors, and stakeholders.",
      "Improves audit efficiency and reduces manual processes.",
    ],
    forward : "/engage-pulse",
    img : griev1
  },
  Digital: {
    title: "Digital Product Passport",
    sub: "CIRPASS-aligned Digital Product Passport platform serving as a strategic compliance and business enabler for brands, suppliers, and consumers. ",
    features: [
      "Standardized API-driven exchange for partners and suppliers.",
      "Built-in validation and transformation pipelines.",
      "Governance & audit logs for traceability.",
    ],
     forward : "/trace-tag",
    img : shirt
  },
  Data: {
    title: "Data Exchange",
    sub: "Evolve's Data Exchange platform empowers industries to share and access critical information securely — while ensuring regulatory compliance, sovereignty, and control remaining with the data owner. <br/> Designed to operate sector-specific data exchanges that eliminate duplication, enable transparency, and drive compliance in complex value chains.",
    features: [
      "On-demand access to certified product data.",
      "Automated compliance reports no need to give manual reports on every demand.",
      "Real-time regulation compliance tracking with verified 3rd parties having certifications.",
    ],
     forward : "/xlync",
         img : hredd

  },
  HREDD: {
    title: "Human Rights & Environment Due Diligence Tool",
    sub: "Built on internationally recognized frameworks — OECD, UNGP and ILO conventions, our AI-powered solution is designed to help organizations conduct thorough, standard-compliant Human Rights & Environment Due Diligence (HREDD) across their value chains — from internal operations to upstream suppliers and downstream partners.",
    features: [
      "Immutable product provenance and components ledger.",
      "Supports sustainability & compliance reporting.",
      "Easy integration with marketplaces and customer portals.",
    ],
    forward : "/HREDD",
        img : dpp
  },
};

const pills = [

  { key: "Employee", label: "Employee Engagement Tool" },
  { key: "Data", label: "Data Exchange" },
  { key: "Digital", label: "Digital Product Passport" },
  { key: "HREDD", label: "HREDD" },
];

export default function Products() {
  const [activeKey, setActiveKey] = useState<keyof typeof DATA>("Employee");
  const product = DATA[activeKey];

  return (
//     <section id="products" className="py-16 px-6 text-white">
//       {/* Title */}
//  <MotionFadeIn>

//       <div className="max-w-7xl mx-auto">
      
//         <div className="text-center mb-10">
//            <div className="flex items-center justify-center gap-2 mb-4 ">  
//                       <div className="border-t w-15 border-blue-800 shadow shadow-blue-500"></div>
          
//                           <div className="bg-blue-950 border border-blue-800 flex justify-center items-center self-center rounded-full w-24 gap-2 px-2 py-1 text-sm ">
//                               <span className="text-blue-400"><FaBoxOpen/></span>
//                               <h2 className="font-sans">Products</h2>
//                           </div>
//                           <div className="border-t w-15 border-blue-800 shadow shadow-blue-500"></div>
//                       </div>
//             <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold mb-4">
//                   Tech Suite
//               </TextAnimate>
//           <h2 className="text-4xl font-bold"></h2>
//             <p className="text-gray-400 text-lg">
//               Our flagship sustainability tech suite reflects this objective:
//             </p>
//         </div>

//         {/* Pills */}
//         <div className="flex flex-wrap gap-3 justify-center mb-12" role="tablist">
//           {pills.map((pill) => (
//             <button
//             key={pill.key}
//             onClick={() => setActiveKey(pill.key as keyof typeof DATA)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
//                 activeKey === pill.key
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-800 hover:bg-gray-700 text-gray-300"
//               }`}
//             >
//               {pill.label}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//           {/* LEFT: Text */}
//                   <motion.div
//                     key={activeKey} // triggers re-animation when product changes
//                     initial={{ scale: 0.95, opacity: 0.8 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                     className="rounded-xl p-4"
//                   >
//                 <div>
//                   <TextAnimate animation="blurInUp" by="character" once className="text-2xl font-bold">{product.title}</TextAnimate>
//                   <div className="h-1 w-16 bg-blue-600 my-3"></div>
//                   <p className="text-gray-400 mb-6">{product.sub}</p>

//                   <ul className="space-y-3">
//                     {product.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <IoCheckmarkSharp className="text-blue-500 mt-1" size={18} />
//                         <span className="text-gray-300">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

            
                
//                 </motion.div>
//                 <div>
//                       <img src={hero} alt="" className="w-full h-full object-cover object-center drop-shadow-2xl drop-shadow-blue-500"/>

//                 </div>
//             </div>
//       </div>
        
//  </MotionFadeIn>
//     </section>
<section id="tech-suite" className="py-16 px-6 text-white bg-neutral-700 font-montserrat-light bg-gradient-to-r from-[#101340] to-[#2C2283]"

>
  <MotionFadeIn>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">


        <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-montserrat">
          Our Sustainability Tech Suite
        </TextAnimate>
        <p className="text-gray-100 text-sm sm:text-base md:text-lg font-inter " >
          Our AI-powered Sustainability Suite enables businesses to thrive in a rapidly changing regulatory and environmental landscape
        </p>
      </div>

      {/* Pills */}
      <div className="flex gap-3 md:justify-center justify-start overflow-y-auto mb-12">
        {pills.map((pill) => (
          <button
            key={pill.key}
            onClick={() => setActiveKey(pill.key as keyof typeof DATA)}
            className={`px-4 py-2 flex-shrink-0 rounded-full text-sm transition cursor-pointer ${
              activeKey === pill.key
                ? "bg-[#22AED7] text-white font-inter font-bold"
                : "bg-white  text-black font-inter"
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          key={activeKey}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-xl p-4"
        >
          <div>
            <TextAnimate animation="blurInUp" by="character" once className="text-xl sm:text-2xl font-bold">
              {product.title}
            </TextAnimate>
            <div className="h-1 w-16 bg-[#22AED7] my-3"></div>
            <p className="text-gray-200 text-2xl mb-6 font-inter" dangerouslySetInnerHTML={{__html : product.sub}}></p>

            {/* <ul className="space-y-3 mb-8">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IoCheckmarkSharp className="text-blue-500 mt-1" size={18} />
                  <span className="text-gray-100 font-inter">{feature}</span>
                </li>
              ))}
            </ul> */}
            <Link to={product.forward} className="">
              <InteractiveHoverButton className="bg-[#22AED7] border-blue-700">
                    Explore More           
              </InteractiveHoverButton>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div>
          <img src={product.img} alt="" className=" h-full object-cover object-center drop-shadow-2xl drop-shadow-blue-500 rounded-xl"/>
        </div>
      </div>
    </div>
  </MotionFadeIn>
</section>

  );
}
