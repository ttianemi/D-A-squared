import { HeroSection } from '../components/hero-section-5'
import { Gallery6 } from '../components/gallery6'
import CarouselSize from '../components/carouself'
import Example from '../components/examples/example_stories'
import '../App.css'

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <Gallery6 />
      <CarouselSize />
      <Example />
    </div>
  )
}

export default Home