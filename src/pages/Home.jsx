import Nav from '../components/Nav'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import PipelineTeaser from '../components/PipelineTeaser'
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
      <CTASection />
      <Footer />
    </PageTransition>
  )
}
