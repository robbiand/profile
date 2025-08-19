import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

import Skills from './components/skills'
import Companies from './components/companies'

import profilePic from './assets/profile.png'

export const App = () => {

  return (
    <main className="h-screen w-full max-w-screen-md m-auto text-gray-900">
      <Header />
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-4 p-4 md:px-8 py-28 mt-20">
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
      <Skills />
      <Companies />
      <div className="h-10"></div>
      <Footer />
    </main>
  )
}

export default App
