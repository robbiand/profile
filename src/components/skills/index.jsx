import React from 'react'

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 md:px-8 justify-center mb-20">
      <div className="w-full max-w-lg mx-auto">
        <h3 className="text-center font-semibold text-xl md:text-3xl">
          Skills & Tech Stack
        </h3>
      </div>
      <div className="flex flex-col gap-8 mt-4 md:mt-10">
        <div class="space-y-6">
          <div class="flex flex-row md:items-start pb-2">
            <div class="md:w-1/4 font-semibold text-gray-800 w-1/3">Frontend</div>
            <div class="w-2/3 md:w-3/4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">JavaScript</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">TypeScript</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">React.js</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Next.js</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Vue.js</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Nuxt.js</span>
            </div>
          </div>
          <div class="flex flex-row md:items-start pb-2">
            <div class="md:w-1/4 font-semibold text-gray-800 w-1/3">Backend</div>
            <div class="w-2/3 md:w-3/4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Node.js (basic)</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">AdonisJS</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Laravel</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">PHP</span>
            </div>
          </div>
          <div class="flex flex-row md:items-start pb-2">
            <div class="w-1/3 md:w-1/4 font-semibold text-gray-800">Styling</div>
            <div class="w-2/3 md:w-3/4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">TailwindCSS</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Bootstrap</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Material UI</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Sass</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Styled Components</span>
            </div>
          </div>
          <div class="flex flex-row md:items-start pb-2">
            <div class="w-1/3 md:w-1/4 font-semibold text-gray-800">Tools</div>
            <div class="w-2/3 md:w-3/4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Git</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Jenkins</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Docker</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Vite</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Webpack</span>
            </div>
          </div>
          <div class="flex flex-row md:items-start pb-2">
            <div class="w-1/3 md:w-1/4 font-semibold text-gray-800">Testing</div>
            <div class="w-2/3 md:w-3/4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Jest</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">Vitest</span>
            </div>
          </div>
          <div class="flex flex-row md:flex-row md:items-start">
            <div class="w-1/3 md:w-1/4 font-semibold text-gray-800">Other</div>
            <div class="w-2/3 md:w-3/4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">PWA</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">WebSocket</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">SSE</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">REST API</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md font-mono">GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills