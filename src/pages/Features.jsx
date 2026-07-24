import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import Pipeline from '../components/Pipeline'
import FeatureGrid from '../components/Features'
import NicheShowcase from '../components/NicheShowcase'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function FeaturesPage() {
  return (
    <PageTransition className="font-body">
      <Nav />
      <PageHero
        eyebrow="The platform"
        title="Every tool a lead-gen agency actually needs."
        subtitle="One flow from a search result to a paid client — discovery, live AI demos, and the production builds that turn a lead into recurring revenue."
      />
      <Pipeline />
      <FeatureGrid />
      <NicheShowcase />
      <CTASection />
      <Footer />
    </PageTransition>
  )
}
