import { Navigation } from "./components/Navigation";
import { EGrowHero } from "./components/EGrowHero";
import { EGrowFeatures } from "./components/EGrowFeatures";
import { HowItWorks } from "./components/HowItWorks";
import { ProductPreview } from "./components/ProductPreview";
import { Pricing } from "./components/Pricing";
// import { FinalCTA } from "./components/FinalCTA";
// import { EGrowFooter } from "./components/EGrowFooter";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EGrowHero />
      <EGrowFeatures />
      <HowItWorks />
      <ProductPreview />
      <Pricing />
      {/* <FinalCTA /> */}
      {/* <EGrowFooter /> */}
    </div>
  );
}
