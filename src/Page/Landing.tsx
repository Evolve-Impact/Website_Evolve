import Agentic from "../Component/Agentic";
import Hero from "../Component/Hero";
import Mindsets from "../Component/Mindset";
import Product from "../Component/Product";
import Culture from "../Component/Culture";

const Landing = () => {
  return (
    <>
      {/* <section> */}
      <Hero />
      {/* </section> */}
      <Culture />
      <Agentic />
      <Mindsets />
      <Product />
    </>
  );
};

export default Landing;
