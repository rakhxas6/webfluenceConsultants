import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  const clipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"

  return (
    <div className="min-h-screen">
      <Navbar />

      <div  className="relative isolate px-6 pt-32 lg:px-8 bg-cover bg-center">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{ clipPath }} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" />
        </div>

        <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-36">
          <div className=" mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-[#ff751f] ring-1 ring-[#0025cc]/20 hover:ring-[#0025cc]/40">
              Excited to take the next step.{" "}
              <a href="/learn" className="font-semibold text-[#0025cc]">
                <span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-[#0025cc] sm:text-7xl">
              Solution to enrich your online business
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-[#ff751f] sm:text-xl/8">
              Clicks, Conversions, Growth!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/learn" className="text-sm font-semibold px-4 py-2 bg-[#0025cc] text-white border border-[#0025cc] hover:bg-white hover:text-[#0025cc] transition-colors">Get started</a>
              <a href="/learn" className="text-sm font-semibold px-4 py-2 text-[#0025cc] border border-[#0025cc] hover:bg-[#0025cc] hover:text-white transition-colors">Learn more</a>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div style={{ clipPath }} className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
        </div>
      </div>
    </div>
  )
}

export default Home