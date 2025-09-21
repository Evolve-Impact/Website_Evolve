// import Roadmap from "../Component/Roadmap";
import { TextAnimate } from "../components/magicui/text-animate";
import Carousel from "../components/ui/carousel";
import MotionFadeIn from "../components/ui/MotionFadIn";

import { IconBulb, IconTarget, IconRocket } from "@tabler/icons-react";

const ProductDevelopement = () => {
interface SlideData {
  title: string;
  description: string;
  icon: React.ReactNode; // Can accept any icon (from Tabler, Lucide, Heroicons, etc.)
  button: string;
  src: string;
}



const slideData: SlideData[] = [
  {
    title: "Discover",
    description:
      "Our journey begins with in-depth research and foresight scanning. We analyze industry trends, regulatory landscapes, and competitor offerings to identify key challenges.",
    icon: <IconBulb size={48} className="text-yellow-400" />,
    button: "Learn More",
    src: "/images/discover.jpg",
  },
  {
    title: "Define",
    description:
      "Once opportunities are identified, we translate them into precisely framed problem statements and product visions. This includes outlining the regulatory, operational, and sustainability dimensions of the challenge, and defining clear impact outcomes. Instead of chasing incremental fixes, we set ambitious goals that position our products as enablers of resilience, compliance, and growth for global enterprises.",
    icon: <IconTarget size={48} className="text-green-400" />,
    button: "View Strategy",
    src: "/images/strategy.jpg",
  },
  {
    title: "Design",
    description:
      "Our design phase blends UX/UI innovation with enterprise-grade architecture thinking. We focus on creating intuitive interfaces while ensuring that system design considers integration, security, scalability and interoperability. Our design process goes beyond user experience. ",
    icon: <IconRocket size={48} className="text-blue-400" />,
    button: "Get Started",
    src: "/images/launch.jpg",
  },
  {
    title: "Develop",
    description:
      "This is where technology takes center stage. Leveraging modern software development frameworks, cloud platforms, AI, and automation, our engineering teams bring designs to life with precision and agility. Our focus is on writing clean, scalable, and secure code — ensuring products are future-ready and enterprise-compliant.",
    icon: <IconBulb size={48} className="text-yellow-400" />,
    button: "Learn More",
    src: "/images/discover.jpg",
  },
  {
    title: "Deploy",
    description:
      "Deployment is about go-to-market readiness. We manage secure rollouts, system integrations, and user onboarding with a corporate focus. This stage also includes training, change management, and support to ensure smooth adoption across organizations.",
    icon: <IconTarget size={48} className="text-green-400" />,
    button: "View Strategy",
    src: "/images/strategy.jpg",
  },
  {
    title: "Evolve",
    description:
      "Technology never stands still, and neither do we. We continuously monitor performance, gather feedback, learn from real-world usage, and continuous future proofing to refine and enhance our products. This cycle of improvement ensures our solutions remain relevant, resilient, and transformative — delivering long-term value for our clients.",
    icon: <IconRocket size={48} className="text-blue-400" />,
    button: "Get Started",
    src: "/images/launch.jpg",
  },
];







  return(
    <>
    <section className="pt-20 text-white flex justify-center lg:h-screen items-center px-6" id="Philosophy">
        <MotionFadeIn>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
                    <div>
                        <TextAnimate   
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-3xl md:text-5xl lg:text-left text-center font-bold mb-8">
                        Our Philosophy
                        </TextAnimate>
                        <div className="mt-4 text-gray-300 lg:text-left text-justify relative">
                            <p className="mt-4 text-blue-400 text-lg font-bold">"Give me two hours a day of activity, and I'll take the other twenty-two in dream."</p>
                            <p className="text-neutral-400 self-end text-lg absolute -bottom-6 right-0 font-semibold">Salvador Dalí</p>
                        </div>
                        <div className="mt-12 text-gray-300 lg:text-left text-lg space-y-4 text-justify">
                            <p>	We see product development as the perfect blend of dreaming and doing. Like Dalí’s vision, we believe imagination fuels invention, and disciplined execution brings it to life.</p>
                            <p>	At our core, we are not just writing code we are translating bold ideas into software that solves real problems. The “dreaming hours” are where we push boundaries, explore new possibilities, and reimagine what technology can achieve. The “doing hours” are where we transform those visions into products that are robust, scalable, and impactful.</p>
                            <p>This balance is our philosophy: dream boldly, build brilliantly. By combining creativity with precision, we craft software that doesn’t just meet today’s needs but anticipates tomorrow’s opportunities.</p>
                        </div>
                    </div>
                    <div>
                        
                
                    </div>

            </div>
        </MotionFadeIn>
    </section>
     <section className="py-20 px-6 text-white flex justify-center items-center" id="Methodology">
        <MotionFadeIn>

            <div className="w-full max-w-7xl mx-auto ">
                        <TextAnimate   
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-3xl md:text-5xl lg:text-left font-bold mb-8">
                        Our Methodology
                        </TextAnimate>
                    
                    
                    
                <div className="relative overflow-hidden w-full h-full">
                        <Carousel slides={slideData} />
                </div>

            </div>
        </MotionFadeIn>
    </section>
            {/* <Roadmap /> */}

    </>
  )
}

export default ProductDevelopement;