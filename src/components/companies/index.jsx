import React from 'react'

import blibliPic from './../../assets/company/blibli.png'
import detikPic from './../../assets/company/detik.png'
import halojasaPic from './../../assets/company/halojasa.png'
import kitabisaPic from './../../assets/company/kitabisa.png'

const Companies = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 md:px-8 justify-center mb-20">
      <div className="w-full max-w-lg mx-auto">
        <h3 className="text-center font-semibold text-xl md:text-3xl">
          Experience / Career Timeline
        </h3>
      </div>
      <div className="flex flex-col gap-8 mt-4 md:mt-10">
        <div className="flex flex-row gap-4 w-full px-2 items-center">
          <div className="w-1/3 md:w-1/2">
            <img src={blibliPic} alt="company2" className="w-full md:max-w-[118px]" />
          </div>
          <div className="w-2/3 md:w-1/2">
            <h3 className="font-semibold">Senior Frontend Engineer</h3>
            <p className="text-sm text-gray-500">May 2022 - Present</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full px-2 items-center">
          <div className="w-1/3 md:w-1/2">
            <img src={kitabisaPic} alt="company2" className="w-full md:max-w-[176px]" />
          </div>
          <div className="w-2/3 md:w-1/2">
            <h3 className="font-semibold">Mid Frtonend Engineer</h3>
            <p className="text-sm text-gray-500">Jan 2020 - May 2022</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full px-2 items-center">
          <div className="w-1/3 md:w-1/2">
            <img src={detikPic} alt="company2" className="w-full md:max-w-[178px]" />
          </div>
          <div className="w-2/3 md:w-1/2">
            <h3 className="font-semibold">Web Developer (Frontend)</h3>
            <p className="text-sm text-gray-500">Nov 2017 - Jan 2020</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full px-2 items-center">
          <div className="w-1/3 md:w-1/2">
            <img src={halojasaPic} alt="company1" className="w-full md:max-w-[180px]" />
          </div>
          <div className="w-2/3 md:w-1/2">
            <h3 className="font-semibold">Fullstack Web Developer</h3>
            <p className="text-sm text-gray-500">Apr 2017 - Nov 2017</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies