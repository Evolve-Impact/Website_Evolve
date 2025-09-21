import { IoBulb } from "react-icons/io5";
import { BoxReveal } from "../components/magicui/box-reveal";
import { TextAnimate } from "../components/magicui/text-animate";
import MotionFadeIn from "../components/ui/MotionFadIn";
// import { IoIosArrowForward } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";

// import { AnimatedBeam } from "../components/magicui/animated-beam";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedEvolve";
// import { GlareCard } from "../components/ui/glare-card";
import GlareCards from "./GlareCards";
import logo from "../assets/Evolve Text-01 (1).png"
// import wing from "../assets/Evolve Wings-01 (1).png"


const Evelopers = () => {
  const TBE = [
    {
      title: "Think",
      icon: <IoBulb />,
      className: " group-hover:text-yellow-400",
      description:
        "We believe every voice has value. At Evolve, thinking means more than problem-solving it means imagining, questioning, and exploring without boundaries. We encourage curiosity, diversity of thought, and open dialogue, creating a safe space where ideas flow freely. Whether it’s a bold new concept or a small process improvement, great change always begins with the courage to think differently.",
    },
    {
      title: "Build",
      icon: <FaTools />,
      className: "group-hover:text-blue-500",
      description:
        "Ideas alone don’t change the world action does. At Evolve, building means collaboration, ownership, and purposeful execution. Teams work side by side across disciplines, guided by trust and mutual respect. We give people the freedom to experiment, fail, and try again, because innovation is born from persistence. Building at Evolve isn’t about outputs it’s about creating meaningful solutions with impact.",
    },
    {
      title: "Evolve",
      icon: <GiGrowth />,
      className: "group-hover:text-green-400",
      description:
        "Change is constant, and growth is essential. At Evolve, evolving means investing in people their learning, their well-being, and their future. We provide opportunities to upskill, experiment, and take on new challenges, empowering individuals to grow beyond roles and titles. Together, we evolve not only as a company but as a community striving for positive impact.",
    },
  ];

  return (
    <>
      <section id="Evelopers" className="py-20 text-white px-6">
        <MotionFadeIn>
          <div className="max-w-7xl mx-auto ">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
            >
              Evolvepers Mindset
            </TextAnimate>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-4 mb-8">
            <div>
              <p className="text-gray-400 lg:text-xl md:text-lg">
                At Evolve, culture is not an afterthought it’s the foundation of
                everything we do. The way we think, build, and evolve
                together defines not only the products we create but also the
                people we become.
              </p>
              <AnimatedBeamMultipleOutputDemo />
            </div>
             <GlareCards
              width="w-full"
              height="h-full"
              glareColor="from-pink-500/40 to-purple-500/20"
              glareOpacity="opacity-50"
              borderRadius="rounded-3xl"
              padding="p-8"
              shadow="shadow-2xl shadow-purple-900/30"
            >
               <div className="flex flex-col items-start">
                <div className="flex items-center mb-8">
                    {/* <img src={wing} alt="logo" className="w-12 sm:w-14" /> */}
                    <img src={logo} alt="logo" className="w-32" />
                  </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-start gap-2">
                    <h2 className="text-lg font-bold">Noun</h2>
                    <code className="text-lg bg-slate-700 p-0.5 px-2 rounded-md">
                      Evolveper
                    </code>
                  </div>
                  <div className="flex items-start gap-2">
                    <h2 className="text-lg font-bold">Pronounce</h2>
                    <code className="text-lg bg-slate-700 p-0.5 px-2 rounded-md">
                      ih-välv-pər
                    </code>
                  </div>
                  <div className="flex items-start  gap-2">
                    <h2 className="text-lg font-bold">Plural</h2>
                    <code className="text-lg bg-slate-700 p-0.5 px-2 rounded-md">
                      Evolvepers
                    </code>
                  </div>
                </div>

                <ul className="space-y-4 mt-4 flex flex-col items-start ">
                  <h2 className="text-3xl text-[#009EE2]">Definition</h2>
                  <li className=" gap-1 text-lg text-justify">
                    A member of the Evolve community who combines strategic
                    foresight, creativity, and discipline to transform ideas
                    into impactful technology.
                  </li>
                  <li className="text-justify gap-1 text-lg">
                    A professional who bridges business insight with advanced
                    technologies AI, blockchain, cloud, automation to build
                    solutions that help global corporations thrive sustainably.
                  </li>
                  <li className="text-justify gap-1 text-lg">
                    A culture-bearer of Evolve's philosophy: Think boldly, Build
                    responsibly, Evolve continuously.
                  </li>
                </ul>
              </div>


            </GlareCards>

          </div>
        </MotionFadeIn>
        <MotionFadeIn>
          <div className="max-w-7xl mx-auto">
            <div className="items-center space-y-4">
              {TBE.map((item, index) => (
                <div key={index} className="flex md:flex-row flex-col gap-4 items-center justify-between group">
                  <div className="max-w-2xl">
                    <BoxReveal boxColor={"#1b44c1"} duration={0.5}>
                      <h1 className="text-[3.5rem] font-semibold">
                        {item.title}
                      </h1>
                    </BoxReveal>
                    <BoxReveal boxColor={"#1b44c1"} duration={0.5}>
                      <p className="text-lg">{item.description}</p>
                    </BoxReveal>
                  </div>
                  <div className="flex justify-center">
                    <span className={`text-9xl ${item.className}`}>{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionFadeIn>
      </section>
    </>
  );
};

export default Evelopers;
