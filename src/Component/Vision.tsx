import { TextAnimate } from "../components/magicui/text-animate"
import MotionFadeIn from "../components/ui/MotionFadIn"

// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Vision = () => {

    // const mission = [
    //     {
    //         icon : <LuWorkflow/>,
    //         description : "To translate business processes into technology-driven systems that embed sustainability, compliance, and transparency by design.",
    //     },
    //     {
    //         icon : <GiPlatform/>,
    //         description : "To develop enterprise-grade platforms that support regulatory alignment in areas such as product traceability, ESG data sharing, and circular economy adoption.",
    //     },
    //     {
    //         icon : <TbAutomation/>,
    //         description : "To leverage advanced technologies AI, blockchain, automation, and cloud - to help corporations operate responsibly, efficiently, and at scale.",
    //     },
    //     {
    //         icon : <RiPlantFill/>,
    //         description :   "To continuously evolve our solutions in line with global standards, customer needs, and emerging sustainability challenges."

    //     }

    // ]


    return(
        <>
        {/* <section id="Vission" className="pt-20 text-white">
                   <MotionFadeIn>
                        <div className="max-w-7xl mx-auto">
                            <TextAnimate animation="blurInUp" by="character" once className="text-5xl font-bold mb-4 text-center">
                                                                Our Vision
                            </TextAnimate>
                            <div className="flex justify-center items-center">
                                <p className="text-gray-400 text-lg w-3xl text-center mb-8">To enable global corporations to meet the demands of international regulations on sustainability, product traceability, and circularity through intelligent, future-ready technologies.</p>
                            </div>
                        

                        </div>
                </MotionFadeIn>
        </section> */}
            <section id="Vision" className="pt-20 pb-20 text-white px-4 font-montserrat-light bg-gradient-to-r from-[#101340] to-[#2C2283]">
                <MotionFadeIn>
                    <div className="max-w-7xl mx-auto ">
                    <TextAnimate animation="blurInUp" by="character" once className="text-3xl md:text-5xl font-bold mb-6 text-center ">
                        Vision
                    </TextAnimate>
                    <div className="flex justify-center items-center">
                        <p className="text-base md:text-xl w-full md:w-3/4 lg:w-4/5   text-center text-gray-100 font-inter">
                       <span className="text-3xl">&#8220;</span> To enable global corporations to meet the demands of international regulations on sustainability, product traceability, and circularity through intelligent, future-ready technologies.
                        <span className="text-3xl">&#8221;</span>
                        </p>
                    </div>
                    </div>
                </MotionFadeIn>
                </section>

        
        </>
    )
}


export default Vision