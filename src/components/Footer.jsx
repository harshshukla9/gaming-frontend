import React from 'react'
import AnimatedTitle from './AnimateTitle'

const Footer = () => {
  return (
    <section className="my-20 min-h-40 w-screen  px-10">
      <div className="rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      <AnimatedTitle
            title="Explore"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          </div>
          <div className="bg-black text-white py-6">
          <div className="bg-black text-white py-6">
  <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 space-y-4 sm:space-y-0">
    {/* Left Side: Text */}
    <div>
      <h2 className="text-lg font-semibold">Stay Connected</h2>
      <p className="text-sm mt-1 text-gray-400">
        Empowering the future of decentralized technology.
      </p>
    </div>

    {/* Center: Made with Love */}
    <div className="flex items-center text-center">
      <p className="text-sm mr-40 text-gray-400">
        Made with <span className="text-red-500">❤️</span> by Harsh Shukla
      </p>
    </div>

    {/* Right Side: Links */}
    <div className="flex space-x-6">
      <a href="#wallet" className="hover:text-blue-400">
        Wallet
      </a>
      <a href="#web3" className="hover:text-blue-400">
        Web3
      </a>
      <a href="#contactus" className="hover:text-blue-400">
        Contact Us
      </a>
    </div>
  </div>
</div>
</div>


    </section>
  )
}

export default Footer