import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { ChevronRight, ArrowRight, Menu, X } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { Progress } from './ui/progress'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left text-white">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl !text-white">Привет, Алия!</h1>
                                <p className="mt-12 max-w-2xl text-balance text-lg">Баланс китиков:</p>

                                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:w-full">
                                    {/* Buttons */}
                                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 rounded-full pl-5 pr-3 text-base bg-blue-700 hover:bg-blue-600">
                                            <Link to="#link">
                                                <span className="text-nowrap">10</span>
                                                <DrinkitLogo className="ml-2 h-5 w-5 fill-white" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                            <Link to="#link">
                                                <span className="text-nowrap">Перейти к покупкам</span>
                                                <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Progress */}
                                    <div className="w-full max-w-xs space-y-2">
                                        <Progress value={75} className="h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                //muted
                                playsInline
                                className="size-full object-cover"
                                src="/drinks.mp4"
                            />
                                <div className="absolute inset-0 bg-black/40" />

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            {/* Logo + text lockup */}
                            <Link
                                to="/location"
                                aria-label="home"
                                className="flex items-center gap-3">
                                <DrinkitLogo className="h-9 w-9 shrink-0 fill-blue-700 hover:fill-blue-600" />
                                <span className="flex flex-col leading-tight text-[#E6ECEF] hover:text-white">
                                    <span className="text-sm font-semibold tracking-tight">Drinkit location</span>
                                    <span className="text-xs opacity-50">working hours</span>
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link to="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link to="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const DrinkitLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(className)}>
            <path
                d="M7.30354 242C2.6686 242 0 239.893 0 234.556C0 220.792 18.2588 190.875 40.1695 164.611C30.3378 152.11 24.1579 134.132 24.1579 114.188C24.1579 67.1364 58.8497 42.6976 52.3889 42.6976C44.8044 42.6976 24.4388 82.5862 6.46082 82.5862C1.82588 82.5862 0 79.9176 0 75.0017C0 50.563 45.2258 0 68.26 0C73.1758 0 74.8613 2.24724 74.8613 5.75856C74.8613 14.6071 63.7655 31.1805 54.2147 40.7313H54.917C79.3558 15.8712 102.39 0 113.767 0C117.559 0 119.385 1.82589 119.385 5.0563C119.385 21.4893 72.1927 82.5862 52.108 82.5862C49.7203 82.5862 48.5966 81.7435 48.5966 80.1985C48.5966 72.4736 75.4231 47.7539 75.4231 43.3999C75.4231 42.9785 75.1422 42.6976 74.4399 42.6976C67.4173 42.6976 30.3378 86.7998 30.3378 102.952C30.3378 106.463 32.1637 108.71 36.6582 108.71C72.4736 108.71 135.115 0 197.757 0C230.202 0 242 29.3546 242 55.3384C242 73.7377 236.101 102.25 236.101 109.974C236.101 114.048 237.786 116.295 242 118.261C232.028 132.868 214.752 142.138 199.162 142.138C193.122 142.138 187.504 140.874 182.167 137.925H181.465C188.066 147.054 198.6 152.251 208.994 152.251C215.595 152.251 222.056 150.144 227.252 145.649L227.533 145.93C217.28 168.122 198.741 187.785 172.335 198.038C175.004 206.746 178.234 221.073 178.234 231.326C178.234 237.646 176.97 242 172.897 242C164.189 242 145.509 221.494 140.031 212.505C147.897 209.696 156.324 205.904 160.959 203.095V202.392C150.706 204.92 139.75 206.325 128.514 206.325C111.239 206.325 93.682 203.095 79.0749 196.072C86.5189 184.555 92.137 170.369 95.0865 158.571H94.3842C71.7713 194.948 29.3546 242 7.30354 242ZM164.189 122.053C164.189 125.846 167.139 128.795 171.071 128.795C175.004 128.795 177.813 125.846 177.813 122.053C177.813 118.121 174.864 115.171 171.071 115.171C167.279 115.171 164.189 118.121 164.189 122.053Z"
            />
        </svg>
    )
}