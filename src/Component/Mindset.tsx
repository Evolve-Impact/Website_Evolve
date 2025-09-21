
import { LineShadowText } from "../components/magicui/line-shadow-text";
import { MagicCard } from "../components/magicui/magic-card";
import MotionFadeIn from "../components/ui/MotionFadIn";
// import { GiHiveMind } from "react-icons/gi";
import { IoBulb } from "react-icons/io5";
// import { FaTools } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
// import mind from '../assets/mind.png'
import { TextAnimate } from "../components/magicui/text-animate";
import { FaCode } from "react-icons/fa";


export default function Mindsets(){

    const mindset = [
        {
            icon : <IoBulb/>,
            title : "Think",
            description : "A culture where every idea is heard, <br/> curiosity is encouraged, <br/> and bold thinking is celebrated."
        },
        {
            icon : <FaCode/>,

            title : "Build",
            description : "Collaboration, ownership, and creativity <br/> come together to turn ideas <br/> into meaningful impact."
        },
        {
            icon : <GiGrowth/>,

            title : "Evolve",
            description : "Continuous growth, learning, and adaptability because people <br/> and innovation never stand still."
        },
    ]



    return(
        <>
          {/* <section id="products" className="py-20 text-white h-[90vh]">
                <MotionFadeIn>
              <div className="max-w-7xl mx-auto relative">
                 <div className="flex items-center justify-center gap-2 mb-4 ">  
                            <div className="border-t w-15 border-blue-800 shadow shadow-blue-500"></div>
                
                                <div className="bg-blue-950 border border-blue-800 flex justify-center items-center self-center rounded-full w-24 gap-2 px-2 py-1 text-sm ">
                                    <span className="text-blue-400"><GiHiveMind/></span>
                                    <h2 className="font-sans">Mindsets</h2>
                                </div>
                                <div className="border-t w-15 border-blue-800 shadow shadow-blue-500"></div>
                    </div>
                    <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold mb-8 text-center">
                                            The Evolvepers’ Mindset
                                          </TextAnimate>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            mindset.map((mind, index) => (
                                <MagicCard key={index} className="border border-neutral-700 rounded-2xl hover:scale-125">
                                    <div className="p-6 text-center">
                                        <span className="text-5xl flex justify-center mb-5">{mind.icon}</span>
                                        <LineShadowText className="text-4xl font-bold mb-5 drop-shadow-2xl drop-shadow-blue-400" shadowColor="white" >{mind.title}</LineShadowText>
                                        <h3 className="text-xl ">{mind.description}</h3>
                                    </div>
                                </MagicCard>
                            ))
                        }

                    </div>

                   
        
                <img src={mind} alt="" className="absolute -bottom-80"/>
              </div>
                </MotionFadeIn>
            </section> */}
                        <section id="mindsets" className="py-20 px-6 font-montserrat-light">
            <MotionFadeIn>
                <div className="max-w-7xl mx-auto relative">
                    

                <TextAnimate animation="blurInUp" by="character" once className="font-montserrat text-3xl sm:text-4xl md:text-5xl text-gray-700 font-bold mb-8 text-center">
                    The Evolveper Mindset
                </TextAnimate>
 
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {mindset.map((mind, index) => (
                    <MagicCard key={index} className="border border-neutral-700 rounded-2xl hover:scale-105 duration-200 transition">
                        <div className="p-6 text-center">
                        <span className="text-4xl sm:text-5xl flex justify-center mb-5 text-cyan">{mind.icon}</span>
                        <LineShadowText className="text-2xl sm:text-3xl font-bold mb-5 drop-shadow-2xl drop-shadow-blue-400" shadowColor="white">
                            {mind.title}
                        </LineShadowText>
                        <p className="text-base sm:text-lg font-inter"  dangerouslySetInnerHTML={{ __html: mind.description }}></p>
                        </div>
                    </MagicCard>
                    ))}
                </div>

                {/* <img src={mind} alt="" className="absolute w-full xl:-bottom-80 lg:-bottom-70 hidden lg:block" /> */}
                </div>
            </MotionFadeIn>
            </section>

        
        </>
    )
}