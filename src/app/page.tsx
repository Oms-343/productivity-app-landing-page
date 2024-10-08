import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Clients from "@/sections/Clients";
import ProductInfo from "@/sections/ProductInfo";
import AdhocFeatures from "@/sections/AdhocFeatures";
import Pricing from "@/sections/Pricing";
import Testimoials from "@/sections/Testimoials";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <ProductInfo />
      <AdhocFeatures />
      <Pricing />
      <Testimoials />
      <CallToAction />
      <Footer />
    </>
  );
}
