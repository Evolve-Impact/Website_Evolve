import { TextAnimate } from "../components/magicui/text-animate";
import MotionFadeIn from "../components/ui/MotionFadIn";

const AICosultation = () => {
    return(
        <>
        <section className="py-20 text-white flex items-center justify-center ">
                  <MotionFadeIn>
                    <div className="max-w-7xl mx-auto ">
                       <TextAnimate
                                         animation="blurInUp"
                                         by="character"
                                         once
                                         className="text-3xl md:text-5xl font-bold mb-4"
                                       >
                                         AI Consulation
                                       </TextAnimate>
                    </div>
                  </MotionFadeIn>
                </section>
        </> 
    )
}


export default AICosultation;