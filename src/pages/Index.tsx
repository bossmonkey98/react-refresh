import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import TimelineSection from "@/components/TimelineSection";
import TechnicalExcellence from "@/components/TechnicalExcellence";
import DomainsSection from "@/components/DomainsSection";
import DeviceExcellence from "@/components/DeviceExcellence";
import VerticalsSection from "@/components/VerticalsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MetricsSection />
        <TimelineSection />
        <TechnicalExcellence />
        <DomainsSection />
        <DeviceExcellence />
        <VerticalsSection />
        <CapabilitiesSection />
        <WhyPartnerSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
