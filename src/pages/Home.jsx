import Hero from '../components/Hero'
import Stats from '../components/Stats'
import AboutPreview from '../components/AboutPreview'
import Services from '../components/Services'
import ProjectsTeaser from '../components/ProjectsTeaser'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <Services />
      <ProjectsTeaser />
      <Brands />
      <Testimonials />
    </>
  )
}
