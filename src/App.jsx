import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Header } from './components/header-2'
import './App.css'
import { Gallery6 } from './components/gallery6'
import CarouselSize from './components/carouself'
import { Stories } from './components/stories-carousel'
import Example from './components/examples/example_stories'

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className="w-full">
			<Header />
			<Gallery6 />
			<CarouselSize />
      <Example />
		</div>
	);
}

export default App