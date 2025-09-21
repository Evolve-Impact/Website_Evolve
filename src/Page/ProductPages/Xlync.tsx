import { FaRegCheckCircle } from "react-icons/fa";
import { TextAnimate } from "../../components/magicui/text-animate";
import MotionFadeIn from "../../components/ui/MotionFadIn";
// import CubeGrid from "../../Component/3dCube";
import { FaFileShield, FaUsersGear } from "react-icons/fa6";
import { GlareCard } from "../../components/ui/glare-card";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import logistic from "../../assets/logistics.png"
import shirt2 from "../../assets/shirt2.png"
import car from "../../assets/car.png"
// import cube from "../../assets/cube.png"
import xlync from "../../assets/xlync.png"
// import { GrUserExpert } from "react-icons/gr";
// import { icon } from "leaflet";
import { RiExchangeFill } from "react-icons/ri";
import { SiDeepl } from "react-icons/si";
import { LuWaypoints } from "react-icons/lu";
import hero from "../../assets/exchange.png"
// import { IoMdArrowDroprightCircle } from "react-icons/io";
import dpp from "../../assets/dpp.png"


interface ProductData {
  title: string;
//   sub: string;
  features: string[];
  img: string;
}

const DATA: Record<string, ProductData> = {
  Sustainability: {
    title: "Sustainability Data Exchange",
    // sub: "We design and operate exchanges tailored to unique industry needs:",
    features: [
      "Sustainability Data Exchange Helping EU brands and their value chain partners capture, consolidate, and share ESG data for compliance with CSRD, ESPR, and CSDDD.",
      "Automated collection of supplier-level sustainability metrics (e.g., GHG, energy, labour rights, product footprints).",
      "Alignment with CIRPASS Digital Product Passport (DPP) schema.",
      "Enabling benchmarking dashboards and AI-powered compliance insights."
    ],
    img: shirt2,
  },
  Sector: {
    title: "Sector-Specific Data Exchanges",
    // sub: "Real-Time Feedback Smart surveys that capture employee sentiment instantly and transform it into actionable insights for building a stronger workplace culture.",
    features: [
      "Healthcare – secure data sharing under the European Health Data Space (EHDS).",
      "Automotive Supply Chain – transparency and real-time data availability ",
      "Manufacturing & Industrial Data – predictive maintenance, resource optimization, and responsible sourcing.",
    ],
    img: car,
  },
  Trade: {
    title: "Trade & Logistics Data Exchange",
    // sub: "Clarity that Empowers A centralized hub for policies and training, giving employees easy access to the knowledge they need while helping organizations stay compliant and future-ready.",
    features: [
      "Digitizing and connecting ports, customs, and logistics partners for seamless international trade.",
      "Improves visibility across shipments and transactions",
      "Reduces manual paperwork and delays.",
      "Strengthens compliance with cross-border trade regulations."
    ],
    img: logistic,
  },
};

const pills = [
  { key: "Sustainability", label: "Sustainability Data Exchange" },
  { key: "Sector", label: "Sector-Specific Data Exchanges" },
  { key: "Trade", label: "Trade & Logistics Data Exchange" },
];

const Xlync = () => {
  const [activeKey, setActiveKey] = useState<keyof typeof DATA>("Sustainability");
  const product = DATA[activeKey];

  const why = [
    {
      icon : <RiExchangeFill />,
      title: "Regulatory Alignment",
      info: "Our exchanges are future-proof, built around EU and global compliance frameworks.",
    },
    {
      icon : <SiDeepl  />,
      title: "Technology Depth",
      info: "Based on IDS connectors, OPA agreements, and federated architectures for scalability.",
    },
    {
      icon : <FaUsersGear  />,
      title: "Sector Expertise",
      info: "From sustainability and trade to healthcare and automotive, we understand both the regulations and the industry pain points.",
    },
    {
      icon : <LuWaypoints  />,
      title: "Ecosystem Approach",
      info: "We work with associations, regulators, and enterprises to ensure rapid adoption and long-term trust.",
    },
  ];

  return (
    <>
      <div className="font-montserrat-light">
        <section className="pt-30 pb-20 text-gray-700  flex items-center justify-center px-6 ">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 lg:items-center ">
              <div>
                <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="text-3xl md:text-5xl md:text-left text-center font-bold mb-4"
                >
                  Data Exchange
                </TextAnimate>
                <p className="text-black mb-4 text-lg md:text-left text-center font-inter">
                  At Evolve, we transform fragmented data into trusted,
                  interoperable, and real-time intelligence. Our Data Exchange
                  solutions empower industries to share and access critical
                  information securely while ensuring regulatory compliance,
                  sovereignty, and control remain with the data owner.
                </p>
                <p className="text-black mb-4 text-lg md:text-left text-center font-inter">
                  We design and operate sector-specific data exchanges that
                  eliminate duplication, enable transparency, and drive
                  compliance in complex value chains.
                </p>
                
              </div>
              <div>
                {/* <CubeGrid/> */}
                <img src={hero} alt="" className="w-full h-full object-cover object-center"/>
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-20 text-white bg-gradient-to-r to-blue-900 from-slate-900 px-6">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-5xl font-bold mb-4 lg:text-left text-center"
                >
                  Principles
                </TextAnimate>
                <p className="text-gray-300 mb-4 text-lg lg:text-left text-center font-inter">
                  Trust, Compliance & Interoperability Every exchange we build
                  is anchored in internationally recognized frameworks:
                </p>
                <ul className="space-y-4 font-inter">
                  <li className="flex items-center gap-5 text-lg">
                    <span className="text-3xl">
                      <FaFileShield />
                    </span>
                    GAIA-X: ensuring federated architecture, data sovereignty,
                    and European values of trust and transparency.
                  </li>
                  <li className="flex items-center gap-5 text-lg">
                    <span className="text-3xl">
                      <FaFileShield />
                    </span>
                    IDS / IDSA Reference Model: enforcing data sovereignty,
                    usage control, and certified connectors.
                  </li>
                  <li className="flex items-center gap-5 text-lg">
                    <span className="text-3xl">
                      <FaFileShield />
                    </span>
                    Interoperability by design: enabling connection to global
                    platforms, cloud services, and sector-specific data spaces.
                  </li>
                  <li className="flex items-center gap-5 text-lg">
                    <span className="text-3xl">
                      <FaFileShield />
                    </span>
                    Data Ownership & Governance: participants retain full
                    control of their data and define rules for access and
                    sharing.
                  </li>
                </ul>
              </div>
              <div>
                <img src={xlync} alt="" />
              </div>
            </div>
          </MotionFadeIn>
        </section>
          <section className="pt-20 px-6 text-black ">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 text-gray-700"
                >
                  Why Data Exchange Matters ?
                </TextAnimate>
              
          
                <ul className="space-y-4 font-inter">
                  <li className="flex items-center gap-5">
                    <span className="text-3xl text-cyan">
                      <FaRegCheckCircle />
                    </span>
                    Data complexity is rising global supply chains, regulators,
                    and partners all demand timely, verifiable data.
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="text-3xl text-cyan">
                      <FaRegCheckCircle />
                    </span>
                    Compliance pressure is mounting EU frameworks such as CSRD,
                    ESPR, and CSDDD require structured sustainability reporting.
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="text-3xl text-cyan">
                      <FaRegCheckCircle />
                    </span>
                    Efficiency is essential businesses need real-time data
                    availability without losing control of proprietary
                    information.
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="text-3xl text-cyan">
                      <FaRegCheckCircle />
                    </span>
                    Evolve’s Data Exchanges address these challenges by enabling
                    federated sharing: each participant owns its data, defines
                    access rules, and benefits from trusted, regulation-ready
                    interoperability.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={dpp}
                  alt=""
                  className="w-full h-full object-center object-cover rounded-4xl"
                />
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-20 text-gray-700 px-6">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-5xl text-center font-bold mb-4"
                >
                  Why Choose Our Platform ?
                </TextAnimate>
              </div>
              <div className="flex xl:flex-row  max-xl:flex-wrap justify-center gap-4">
                {why.map((item, index) => (
                  <>
                    <GlareCard
                      key={index}
                      className="flex flex-col items-center justify-center p-4 text-gray-500 font-inter"
                    >
                      <h1 className="text-5xl mb-4">{item.icon}</h1>
                      <h2 className="text-xl text-center font-bold">
                        {item.title}
                      </h2>
                      <p className="text-white text-lg md:text-xl mt-4 text-center">
                        {item.info}
                      </p>
                    </GlareCard>
                  </>
                ))}
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-20 text-white px-6 bg-gradient-to-r from-[#101340] to-[#2C2283]">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-5xl text-center font-bold mb-10"
                >
                  Data Exchange - Offerings
                </TextAnimate>
              </div>
              <div>
                <div
                  // className="flex flex-wrap gap-3 justify-center mb-12"
                  className="flex gap-3 md:justify-center justify-start mb-12 overflow-x-auto scrollbar-hide"
                >
                  {pills.map((pill) => (
                    <button
                      key={pill.key}
                      onClick={() =>
                        setActiveKey(pill.key as keyof typeof DATA)
                      }
                      className={`px-4 py-2 flex-shrink-0  rounded-full text-sm font-medium transition cursor-pointer font-inter ${
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                        {/* <p className="text-gray-400 mb-6">{product.sub}</p> */}

                        <ul className="space-y-3">
                          {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <IoCheckmarkSharp className="text-blue-500 mt-1" size={18} />
                                            <span className="text-gray-100 font-inter">{feature}</span>
                                        </li>
                            ))}
                        </ul>
                      </div>
                      <div>
                        <img
                          src={product.img}
                          alt=""
                          className="w-full h-full object-cover object-center rounded-xl"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT */}
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </section>
        {/* <section className="py-20 text-white ">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                className="text-3xl md:text-5xl text-center font-bold mb-4"
              >
                a
              </TextAnimate>

            </div>
          </MotionFadeIn>
        </section> */}
      </div>
    </>
  );
};

export default Xlync;
