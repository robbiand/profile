import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Main from './components/main'
import Skills from './components/skills'
import Companies from './components/companies'
import Projects from './components/projects'
import Contact from './components/contact'

export const App = () => {
  const swiperRef = useRef(null)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div
      className={`h-screen flex justify-center bg-gray-100 p-2 ${
        darkMode ? "dark bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full max-w-[480px] relative max-h-screen md:border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="w-full h-12 flex justify-between items-center p-4">
          <div></div>
          <div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-700 shadow"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="h-[calc(100%-3rem)] overflow-y-auto p-4"
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          <SwiperSlide
            className="p-4 max-h-full overflow-y-auto"
          >
            <Main onClickButton={() => swiperRef.current.slideNext()} />
          </SwiperSlide>
          <SwiperSlide
            className="p-4 max-h-full overflow-y-auto"
          >
            <Skills />
          </SwiperSlide>
          <SwiperSlide
            className="p-4 max-h-full overflow-y-auto"
          >
            <Companies />
          </SwiperSlide>
          <SwiperSlide
            className="p-4 max-h-full overflow-y-auto"
          >
            <Projects />
          </SwiperSlide>
          <SwiperSlide
            className="p-4 max-h-full overflow-y-auto"
          >
            <Contact />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default App
