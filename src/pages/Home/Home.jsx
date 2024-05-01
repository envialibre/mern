import { AboutSix } from "../../components/About/AboutSix";
import { BannerFive } from "../../components/Banners/BannerFive";
import { BrandFive } from "../../components/Brand/BrandFive";
import { CounterAreaThree } from "../../components/CounterAreas/CounterAreaThree";
import { ProjectAreaFour } from "../../components/ProjectAreas/ProjectAreaFour";
import { RequestAreaOne } from "../../components/RequestAreas/RequestAreaOne";
import { ServiceFour } from "../../components/Services/ServiceFour";
import { Layout } from "../../layouts/Layout";

const Home = () => {
  return (
    <Layout header={5} footer={2}>
      {/* banner-area */}
      <BannerFive />

      {/* brand-area */}
      <BrandFive />

      {/* services-area */}
      <ServiceFour />

      {/* about-area */}
      <AboutSix />

      {/* counter-area */}
      <CounterAreaThree />

      {/* project-area */}
      <ProjectAreaFour />

      {/* request-area */}
      <RequestAreaOne />
    </Layout>
  );
};

export default Home;
