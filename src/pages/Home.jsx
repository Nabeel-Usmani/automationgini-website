import Nav from '../components/Nav'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import PipelineTeaser from '../components/PipelineTeaser'
import FeaturesTeaser from '../components/FeaturesTeaser'
import BrandStory from '../components/BrandStory'
import PricingTeaser from '../components/PricingTeaser'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition className="font-body">
      <Nav />
      <Hero />
      <TrustBar />
      <PipelineTeaser />
      <FeaturesTeaser />
      <BrandStory />
      <PricingTeaser />
      <FAQSection />
      <CTASection />
      <Footer />
    </PageTransition>
  )
}
