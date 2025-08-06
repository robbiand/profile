import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

import profilePic from './assets/profile.png'
import blibliPic from './assets/company/blibli.png'
import detikPic from './assets/company/detik.png'
import halojasaPic from './assets/company/halojasa.png'
import kitabisaPic from './assets/company/kitabisa.png'

export const App = () => {

  return (
    <main className="h-screen w-full max-w-screen-2xl m-auto text-gray-900">
      <Header />
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-4 p-4 md:px-8 py-28">
        <div className="px-2">
          <img
            src={profilePic}
            className="w-[120px] md:w-52 rounded-full mx-auto"
            alt="Profile picture"
          />
        </div>
        <div className="px-2 flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-3xl">
            Hi, I am <b>Andrian Robby Pratama</b>
          </h3>
          <div className="text-base md:text-lg font-light">
            Frontend engineer. Web enthusiast. <br />Crafting clean interfaces & solid code.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 md:px-8">
        <div className="w-full max-w-lg mx-auto">
          <h3 className="text-center font-semibold text-xl md:text-3xl">
            I'm proud to have collaborated with some awesome companies:
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-10">
          <div className="flex items-center justify-center px-4 border border-gray-200 rounded-md min-h-20">
            <img src={halojasaPic} alt="company1" className="max-h-20 object-contain" />
          </div>
          <div className="flex items-center justify-center px-4 border border-gray-200 rounded-md min-h-20">
            <img src={detikPic} alt="company2" className="max-h-20 object-contain" />
          </div>
          <div className="flex items-center justify-center px-4 border border-gray-200 rounded-md min-h-20">
            <img src={kitabisaPic} alt="company3" className="max-h-20 object-contain" />
          </div>
          <div className="flex items-center justify-center px-4 border border-gray-200 rounded-md min-h-20">
            <img src={blibliPic} alt="company4" className="max-h-20 object-contain" />
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <Footer />
    </main>
  )
}

export default App
