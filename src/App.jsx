import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AboutPreview from './components/AboutPreview'
import Services from './components/Services'
import SmartFeatures from './components/SmartFeatures'
import Industries from './components/Industries'
import Brands from './components/Brands'
import ProjectsGallery from './components/ProjectsGallery'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutPreview />
        <Services />
        <SmartFeatures />
        <Industries />
        <Brands />
        <ProjectsGallery />
        <WhyChooseUs />
        <Testimonials />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
