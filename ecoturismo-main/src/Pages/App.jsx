import Layout from "../components/Layout";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";
import Destacados from "../components/Destacados";
import Ambiente from "../components/Ambiente";

function App() {
  const refScroll = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const MoreInfo = () => {
    refScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <Layout inView={inView}>
        <Hero refNav={ref} MoreInfo={MoreInfo} />
        <Destacados refScroll={refScroll} />
        <Ambiente />
      </Layout>
  );
}

export default App;
