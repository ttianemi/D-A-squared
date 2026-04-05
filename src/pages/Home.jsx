import { useRef } from "react"
import { HeroSection } from '../components/hero-section-5'
import { Gallery6 } from '../components/gallery6'
import { Specials } from '../components/specials'
import { History } from '../components/history'
import CarouselSize from '../components/carouself'
import Example from '../components/examples/example_stories'
import CookieNotice from '../components/cookie-notice'
import { motion, useInView } from "motion/react"
import { Level } from '../components/ui/level'
import DrinkitWrappedButton from "../components/DrinkitWrappedButton"

import '../App.css'

function Home() {
  const triggerRef = useRef(null)
  const isInView = useInView(triggerRef, { once: true })

  return (
    <div className="w-full">
      <HeroSection />

      {/* Invisible trigger — fires when scrolled past hero */}


      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex max-w-7xl w-full flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left text-black">
            <h1 className="mt-8 max-w-2xl text-balance !text-3xl md:!text-4xl lg:mt-16 xl:!text-4xl text-black">
              Специально для тебя
            </h1>
          </div>
        </div>
      </div>
      <Specials />

      <div ref={triggerRef} />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <CookieNotice />
      </motion.div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex max-w-7xl w-full flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left text-black">
            <h1 className="mt-8 max-w-2xl text-balance !text-3xl md:!text-4xl lg:mt-16 xl:!text-4xl text-black">
              Весенние фавориты
            </h1>
          </div>
        </div>
      </div>
      <Gallery6 />

<div className="relative z-10 flex h-full items-center">
                        <div className="mx-auto flex max-w-7xl w-full flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left text-black">
                                    <div className="w-full max-w-xs space-y-2">
                                        <Level value={75} className="h-5" />
                                    </div>
                                </div>
                            </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex max-w-7xl w-full flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left text-black">
            <h1 className="mt-8 max-w-2xl text-balance !text-3xl md:!text-4xl lg:mt-16 xl:!text-4xl text-black">
              История заказов
            </h1>
          </div>
        </div>
      </div>
      </div>
      <History />
      <DrinkitWrappedButton />
    </div>
  )
}

export default Home