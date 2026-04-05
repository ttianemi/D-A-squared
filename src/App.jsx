import { Routes, Route } from 'react-router-dom'
import { HeroSection } from './components/hero-section-5'
import { Gallery6 } from './components/gallery6'
import CarouselSize from './components/carouself'
import Example from './components/examples/example_stories'
import './App.css'
import Home from "./pages/Home"
import Location from "./pages/Location"
import Wrapped from "./pages/Wrapped"

export default function App() {
	return (
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/location" element={<Location />} />
    <Route path="/wrapped" element={<Wrapped />} />
	  </Routes>
	)
  }