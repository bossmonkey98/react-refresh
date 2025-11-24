import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import TimelineSection from "@/components/TimelineSection";
import DomainsSection from "@/components/DomainsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
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
        <DomainsSection />
        <CaseStudiesSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
