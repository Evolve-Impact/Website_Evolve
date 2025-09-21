import { TextAnimate } from "../components/magicui/text-animate"
import MotionFadeIn from "../components/ui/MotionFadIn"


const People = () => {
    return(
        <>
        <section id="our-people-and-culture" className="py-20 text-white px-6">
               <MotionFadeIn>

            <div className="max-w-7xl mx-auto">
                <TextAnimate animation="blurInUp" by="character" once className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-5">
                Our People & Culture
                </TextAnimate>
                <p className="text-gray-400 text-base md:text-lg text-center mb-8">Think Boldly, Build Responsibly, Evolve Continuously</p>
                
            </div>
               </MotionFadeIn>
        </section>
        
        </>
    )
}


export default People