import { TextAnimate } from "../../components/magicui/text-animate";
// import { IoIosPricetags } from "react-icons/io";
// import { IoAnalyticsOutline } from "react-icons/io5";
// import { BiDollar } from "react-icons/bi";

import sustain from "../../assets/sustainability.png";
import MotionFadeIn from "../../components/ui/MotionFadIn";
import { FaDatabase } from "react-icons/fa6";
import { RiFileCheckFill } from "react-icons/ri";
import { FaMobile } from "react-icons/fa6";

import { FaRegCheckCircle } from "react-icons/fa";
import WorldMap from "../../Component/WorldMap";
// import { NumberTicker } from "../../components/magicui/number-ticker";
import post from "../../assets/Instagram post - 1.png";
// import bag from "../../assets/bag.png";
// import shirt from "../../assets/shirt.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShineBorder } from "../../components/magicui/shine-border";
import shirt from "../../assets/Instagram post - 12.png"
import bag from "../../assets/Instagram post - 11.png"

interface ProductData {
  title: string;
  sub: string;
  features: string[];
  img: string;
}

const DATA: Record<string, ProductData> = {
  DPP: {
    title: "End-to-End DPP for Brands",
    sub: "Complete development, deployment, and management of DPP across the brand’s value chain.",
    features: [
      "Compliance-first approach : ESPR and CIRPASS aligned product passports covering all mandated data points.",
      "Value chain integration : Directly connect upstream and downstream partners via federated data exchanges.",
      "Data strategy & capture :  Assist brands in building governance frameworks for traceability, sustainability, and lifecycle reporting.",
      "Run & transfer model : Evolve builds and runs the solution with the brand, and once mature, full ownership is transferred to the client.",
      "Outcome:  Brands achieve compliance without friction, while gaining full visibility, analytics, and trust across their product lifecycle.",
    ],
    img: "",
  },
  Vendor: {
    title: "Vendor Data Space & Exchange",
    sub: "Your Data, Your Rules Plug into Multiple Brands Smoothly. Solution for upstream and downstream vendors to manage their own data spaces. For suppliers, duplication is the biggest pain point, entering the same data separately for multiple brands’ systems. Our vendor data space model fixes this problem",
    features: [
      "Self-owned data space: Vendors host their product and sustainability data independently.",
      "Data federation: Compliant with ESPR’s principle of decentralized data ownership: Vendors control, update, and share their own data.",
      "Multi-brand interoperability: Vendors working with multiple brands can share the same verified dataset into different DPPs, avoiding duplication.",
      "Secure exchange Data transferred through a federated data exchange ensuring trust, interoperability, and traceability.",
      "Outcome: Vendors reduce repetitive data entry, maintain control over their information, and improve efficiency and compliance readiness.",
    ],
    img: "",
  },
  Service: {
    title: "DPP-as-a-Service for SMEs",
    sub: "Plug-and-play DPP for small and medium enterprises. Simplified, subscription-based DPP solution for small and medium enterprises.",
    features: [
      "Low-cost - For SMEs that cannot afford full DPP infrastructure.",
      "Cloud-hosted, pre-configured modules -  easy onboarding, minimal IT setup.",
      "Scalable compliance  - SMEs stay aligned with ESPR requirements without overburdening resources.",
      "Pay-as-you-grow model - enabling gradual expansion across product lines and geographies.",
      "Outcome: SMEs get affordable access to DPP compliance and data-sharing capabilities, leveling the playing field in global supply chains.",
    ],
    img: "",
  },
  Brand: {
    title: "DPP for Brand Protection & Consumer Engagement",
    sub: "Every product becomes a trusted brand ambassador. Inspired by next-gen leaders in digital identity, our DPP does more than compliance it protects brands and connects them directly with consumers.",
    features: [
      "Anti-counterfeit protection - Each product has a unique, verifiable digital identity.",
      "Transparency with a scan - Consumers access verified product details via QR or NFC.",
      "CRM extension - Use DPP data to run targeted marketing, loyalty programs, and sustainability campaigns.",
      "Reputation shield - Authentic data helps defend against greenwashing and reputational risks.",
      "Outcome: The DPP becomes a brand trust engine - protecting against fakes, boosting loyalty, and opening a direct consumer channel.",
    ],
    img: "",
  },
};

const pills = [
  { key: "DPP", label: "End-to-End DPP for Brands" },
  { key: "Vendor", label: "Vendor Data Space & Exchange" },
  { key: "Service", label: "DPP-as-a-Service for SMEs" },
  { key: "Brand", label: "DPP for Brand Protection & Consumer Engagement" },
];

const TraceTag = () => {
  const control = [
    {
      icon: <FaDatabase />,
      title: "Gather Data ",
      info: "Capture sustainability, compliance, and performance data from your supply chain partners.",
    },
    {
      title: "Standardize & Secure",
      icon: <RiFileCheckFill />,
      info: " Convert raw inputs into EU-ready formats with GS1, CIRPASS, and Gaia-X standards.",
    },
    {
      title: "Share with Confidence",
      icon: <FaMobile />,
      info: "Give regulators, customers, and partners the verified data they need — instantly.",
    },
  ];

  const [activeKey, setActiveKey] = useState<keyof typeof DATA>("DPP");
  const product = DATA[activeKey];

  return (
    <>
      <div className="font-montserrat-light">
        <section className="pt-30 pb-20 px-6 text-white flex justify-center items-center bg-gradient-to-r to-blue-900 from-slate-900">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-4">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-5xl font-bold lg:w-lg md:text-left text-center"
                >
                  Digital Product
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-5xl font-bold mb-4 lg:w-lg md:text-left text-center"
                >
                  Passport
                </TextAnimate>

                <p className="text-gray-100 text-lg md:text-left text-center mb-4 font-inter">
                  Evolve is developing a CIRPASS-aligned Digital Product
                  Passport platform that will serve as a strategic compliance
                  and business enabler for brands, suppliers, and consumers. Our
                  approach leverages our strong regional presence in upstream
                  vendor ecosystems (where most textile suppliers operate),
                  giving us a unique advantage in enabling end-to-end adoption
                  across the value chain.
                </p>
                <h2 className="text-blue-400 font-bold">
                  Launching: Q2 2026 | Primary Sector: Textiles & Apparel Value
                  Chains
                </h2>
              </div>
              <div className="">
                <img
                  src={post}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-4xl"
                />
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-20 px-6 text-gray-700 ">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl font-bold text-center md:text-left"
                >
                  Digital Product Passport - 
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
                >
                Why Evolve?
                </TextAnimate>
                <p className="text-black text-lg text-center md:text-left mb-8 font-inter">
                  We recognize that the ESPR requires federated, decentralized,
                  and producer-owned data systems, which means brands, vendors,
                  and SMEs need tailored solutions not a one-size-fits-all
                  platform.
                </p>

                <ul className="space-y-4 text-black font-inter">
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <IoMdArrowDroprightCircle className="text-cyan"/>
                    </span>
                    Strategic regional advantage Strong presence in upstream
                    vendor ecosystems in textile-producing regions.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <IoMdArrowDroprightCircle className="text-cyan"/>
                    </span>
                    Decentralized by design Fully aligned with ESPR’s
                    requirement for producer-owned, federated data storage.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <IoMdArrowDroprightCircle className="text-cyan"/>
                    </span>
                    Scalable models Services tailored for global brands, SMEs,
                    and suppliers.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <IoMdArrowDroprightCircle className="text-cyan"/>
                    </span>
                    Future-ready architecture CIRPASS aligned, interoperable
                    with ESG and supply chain systems.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={sustain}
                  alt=""
                  className="w-full h-full object-center object-cover rounded-4xl"
                />
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-20 px-6 ">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
              >
                Track, manage, and share every step
              </TextAnimate>
              <div className="grid lg:grid-cols-3  grid-cols-1 gap-5">
                {control.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="p-8 bg-gradient-to-l from-[#101340] to-[#2C2283] rounded-2xl border border-neutral-400"
                    >
                      <div className="flex items-center gap-4">
                        <span className="p-2 bg-white text-3xl  text-cyan mb-5 flex item-start justify-start w-12 rounded-xl">
                          {item.icon}
                        </span>
                        <h2 className="text-2xl font-bold mb-4 text-white">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-xl  text-white">{item.info}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="py-20 px-6 text-gary-700">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-11">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left "
                >
                  Future-proof your business with full supply chain traceability
                </TextAnimate>
                <p className=" text-lg mb-8 text-black font-inter">
                  Show exactly where your products come from. Capture and share
                  the complete journey from cotton fields to fabric mills,
                  sewing factories, and final retail. Build trust with consumers
                  and prove compliance with EU’s Digital Product Passport
                  requirements.{" "}
                </p>
                <ul className="space-y-4 text-black font-inter">
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle className="text-cyan"/>
                    </span>
                    Identify where cotton was grown and prove it’s
                    deforestation-free.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle  className="text-cyan"/>
                    </span>
                    Track which fabric mills and dyeing facilities were used.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle className="text-cyan"/>
                    </span>
                    Record which sewing factory stitched the final garment.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle className="text-cyan"/>
                    </span>
                    Link the finished product to your brand and retail location.
                  </li>
                </ul>
              </div>
              <div>
                <WorldMap />
              </div>
            </div>
          </MotionFadeIn>
        </section>
        {/* <section className="py-20 px-6 text-gray-700">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-11 items-center">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left"
                >
                  Future-proof your products and 
                </TextAnimate>
                 <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
                >
                  increase their value
                </TextAnimate>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle className="text-cyan"/>
                    </span>
                    Deliver end-of-life instructions to customers through your
                    products.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle className="text-cyan"/>
                    </span>
                    Scale resale, rental and recycling with ready-to-activate
                    partner integrations.
                  </li>
                  <li className="flex items-center gap-6 text-xl">
                    <span className="text-3xl">
                      <FaRegCheckCircle className="text-cyan"/>
                    </span>
                    Grant business partners access to view your product data and
                    record lifecycle events.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
          
                <div className="flex justify-start">
                  <div className="bg-neutral-200 border border-gray-300 flex  p-4 rounded-2xl items-center gap-4 w-auto">
              
                    <div className="bg-cyan-500 flex justify-center items-center p-4 text-4xl sm:text-5xl md:text-7xl rounded-2xl">
                      <IoIosPricetags className="text-white"/>
                    </div>

                
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="text-center sm:text-left">
                        <NumberTicker
                          value={3078}
                          className="text-4xl sm:text-6xl md:text-7xl tracking-tighter text-gray-700 mb-2"
                        />
                        <p className="text-sm sm:text-base text-zinc-700">
                          Items Resold
                        </p>
                      </div>
                      <span className="p-3 sm:p-4 rounded-full text-3xl sm:text-5xl bg-green-700 text-white">
                        <IoAnalyticsOutline />
                      </span>
                    </div>
                  </div>
                </div>

               
                <div className="flex justify-end">
                  <div className="bg-neutral-200 border border-gray-300  flex justify-end p-4 rounded-2xl items-center gap-4 w-auto">
                   
                    <div className="bg-cyan-500 text-white flex justify-center items-center p-4 text-4xl sm:text-5xl md:text-7xl rounded-2xl">
                      <BiDollar />
                    </div>

          
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <p className="text-4xl sm:text-6xl md:text-7xl">$</p>
                          <NumberTicker
                            value={325}
                            className="text-4xl sm:text-6xl md:text-7xl tracking-tighter text-gray-700"
                          />
                        </div>
                        <p className="text-sm sm:text-base text-zinc-700">
                          Average Resale Price
                        </p>
                      </div>
                      <span className="p-3 sm:p-4 rounded-full text-3xl sm:text-5xl bg-green-700 text-white">
                        <IoAnalyticsOutline />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </MotionFadeIn>
        </section> */}
        <section className="pt-20 pb-20 px-6 text-black font-inter">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-center">
                  <img src={bag} alt="" className="w-auto" />
                </div>

                <div className="space-y-5">
                  <h2 className="text-2xl ">Digital Product Passport </h2>
                  <h1 className="md:text-3xl text-4xl">
                   Prepare for EU’s ESPR regulation compliant with CIRPASS framework 
                  </h1>

               
                </div>
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img src={shirt} alt="" className="w-full" />
                </div>

                <div className="space-y-5">
                  <h2 className="text-2xl ">DPP for Brand Protection & Consumer Engagement</h2>
                  <h1 className="md:text-3xl text-4xl">
                    Every product becomes a trusted brand ambassador
                  </h1>

              
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </section>
        <section className="pt-20 pb-20  px-6 bg-gradient-to-l from-[#101340] to-[#2C2283]">
          <MotionFadeIn>
            <div className="max-w-7xl mx-auto">
              <div>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-3xl md:text-4xl text-center font-bold mb-10 text-white"
                >
                  Digital Product Passport - Offering
                </TextAnimate>
              </div>
              <div>
                <div className="flex gap-3 lg:justify-center justify-start mb-8 overflow-y-auto scrollbar-hide ">
                  {pills.map((pill) => (
                    <button
                      key={pill.key}
                      onClick={() =>
                        setActiveKey(pill.key as keyof typeof DATA)
                      }
                      className={`px-4 py-2 flex-shrink-0 rounded-full text-sm font-medium transition cursor-pointer font-inter ${
                        activeKey === pill.key
                          ? "bg-cyan-500 text-white"
                          : "bg-white text-gray-700 "
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
                    <div className="">
                      <div>
                        <div className="">
                          <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-xl sm:text-2xl font-bold text-white "
                          >
                            {product.title}
                          </TextAnimate>
                          <div className="h-1 w-16 bg-cyan-500 my-3"></div>
                          <p className="text-white mb-6 font-inter">{product.sub}</p>
                        </div>
                        <ul className="flex lg:flex-row flex-col gap-2">
                          {product.features.map((feature, i) => (
                            <div
                              key={i}
                              className="relative overflow-hidden flex items-start justify-center gap-2 bg-neutral-200 p-4  rounded-xl "
                            >
                              <ShineBorder
                                duration={50}
                                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                                borderWidth={3}
                              />
                              {/* <IoCheckmarkSharp className="text-blue-500 mt-1" size={18} /> */}
                              <span className="text-gray-700 text-lg font-inter">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </ul>
                      </div>
                      {/* <div>
                                    <img
                                      src={product.img}
                                      alt=""
                                      className="w-full h-full object-cover object-center rounded-xl"
                                    />
                                  </div> */}
                    </div>
                  </motion.div>

                  {/* RIGHT */}
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </section>
      </div>
    </>
  );
};

export default TraceTag;
