import React from 'react'
import profilePic from './../../assets/profile.png'

const Main = ({ onClickButton }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 relative">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 blur-xl"></div>
        <img
          src={profilePic}
          className="w-[120px] md:w-52 rounded-full mx-auto relative z-10 border-4 border-white dark:border-gray-800 shadow-lg"
          alt="Profile picture"
        />
      </div>

      <div className="flex flex-col gap-3 text-center mt-8">
        <h3 className="text-3xl font-semibold tracking-tight">
          Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Andrian Robby Pratama</span>
        </h3>
        <p className="text-base font-light text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
          Frontend engineer. Web enthusiast.  
          Crafting clean interfaces & solid code.
        </p>
      </div>

      <div className="mt-6">
        <a
          href="#skills"
          className="px-5 py-2 text-sm font-medium rounded-full bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:scale-105 transition-transform"
          onClick={() => onClickButton()}
        >
          View My Work →
        </a>
      </div>

      <div className="text-gray-500 dark:text-gray-400 text-sm absolute bottom-10 right-4 animate-pulse">
        Swap to see skills & experiences →
      </div>
    </div>

  )
}

export default Main