import { TextAnimate } from "../components/magicui/text-animate"
import { GlareCard } from "../components/ui/glare-card"
import MotionFadeIn from "../components/ui/MotionFadIn"
import { LuWorkflow } from "react-icons/lu";
import { GiPlatform } from "react-icons/gi";
import { TbAutomation } from "react-icons/tb";
    import { RiPlantFill } from "react-icons/ri";

const Mission = () => {

    const mission = [
        {
            icon : <LuWorkflow/>,
            description : "To translate business processes into technology-driven systems that embed sustainability, compliance, and transparency by design.",
        },
        {
            icon : <GiPlatform/>,
            description : "To develop enterprise-grade platforms that support regulatory alignment in areas such as product traceability, ESG data sharing, and circular economy adoption.",
        },
        {
            icon : <TbAutomation/>,
            description : "To leverage advanced technologies AI, blockchain, automation, and cloud - to help corporations operate responsibly, efficiently, and at scale.",
        },
        {
            icon : <RiPlantFill/>,
            description :   "To continuously evolve our solutions in line with global standards, customer needs, and emerging sustainability challenges."

        }

    ]


    return(
        <>
        {/* <section id="Mission" className="py-20 text-white">
                   <MotionFadeIn>

            <div className="max-w-7xl mx-auto">
                <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold mb-4 text-center">
                                                      Our Mission
                </TextAnimate>
                <div className="flex justify-center items-center">
                    <p className="text-gray-400 text-lg w-3xl text-center mb-8">Turning Sustainability Challenges into Technology Opportunities</p>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {
                        mission.map((mis, index) => (
                            <>  
                               <GlareCard key={index} className="flex flex-col items-center justify-center p-6">
                                    <h2 className="text-7xl">{mis.icon}</h2>
                                     <p className="text-white text-xl mt-4 text-center">{mis.description}</p>
                                </GlareCard>
                            
                            </>
                        ))
                        
                    }


                </div>

            </div>
                </MotionFadeIn>
        </section> */}
        <section id="Mission" className="pt-20 pb-20 px-6 font-montserrat-light text-gray-500">
          <MotionFadeIn>
              <div className="max-w-8xl mx-auto">
                <TextAnimate animation="blurInUp" by="character" once className=" text-gray-700 text-3xl md:text-5xl font-bold mb-6 text-center">
                  Mission
                </TextAnimate>
                <div className="flex justify-center items-center">
                  <p className="text-base md:text-lg w-full md:w-3/4 lg:w-2/3 text-center mb-8 text-black font-inter">
                    Turning Sustainability Challenges into Technology Opportunities
                  </p>
                </div>

                {/* Responsive grid */}
                <div className="flex flex-wrap justify-center gap-4">
                  {mission.map((mis, index) => (
                    <GlareCard key={index} className="flex flex-col md:w-full items-center justify-center p-6">
                      <h2 className="text-5xl md:text-7xl">{mis.icon}</h2>
                      <p className="text-white text-lg md:text-xl mt-4 text-center font-inter ">{mis.description}</p>
                    </GlareCard>
                  ))}
                </div>
              </div>
          </MotionFadeIn>
        </section>

        
        </>
    )
}


export default Mission