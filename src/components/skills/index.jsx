import React from 'react'

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center">
      <div className="w-full max-w-lg mx-auto">
        <h3 className="font-semibold text-2xl">
          Skills & Tech Stack
        </h3>
      </div>
      <div class="mt-6 space-y-6">
        <div>
          <h3 class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Frontend</h3>
          <div class="flex gap-3 flex-wrap">
            <span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm">JavaScript</span>
            <span class="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-sm">TypeScript</span>
            <span class="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 text-sm">React.js</span>
            <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-sm">Next.js</span>
            <span class="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm">Vue.js</span>
            <span class="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-sm">Nuxt.js</span>
          </div>
        </div>

        <div>
          <h3 class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Backend</h3>
          <div class="flex gap-3 flex-wrap">
            <span class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 text-sm">Node.js (basic)</span>
            <span class="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 text-sm">AdonisJS</span>
            <span class="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 text-sm">Laravel</span>
            <span class="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm">PHP</span>
          </div>
        </div>

        <div>
          <h3 class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Styling</h3>
          <div class="flex gap-3 flex-wrap">
            <span class="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-200 text-sm">TailwindCSS</span>
            <span class="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-sm">Bootstrap</span>
            <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-sm">Material UI</span>
            <span class="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 text-sm">Sass</span>
            <span class="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-sm">Styled Components</span>
          </div>
        </div>

        <div>
          <h3 class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Tools</h3>
          <div class="flex gap-3 flex-wrap">
            <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">Git</span>
            <span class="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm">Jenkins</span>
            <span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm">Docker</span>
            <span class="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-sm">Vite</span>
            <span class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 text-sm">Webpack</span>
          </div>
        </div>

        <div>
          <h3 class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Testing</h3>
          <div class="flex gap-3 flex-wrap">
          <span class="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-sm">Jest</span>
          <span class="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200 text-sm">Vitest</span>
          <span class="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-sm">React Testing Library</span>
          <span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm">Playwright</span>
          </div>
        </div>

        <div>
          <h3 class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Other</h3>
          <div class="flex gap-3 flex-wrap">
            <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-sm">PWA</span>
            <span class="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 text-sm">WebSocket</span>
            <span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm">SSE</span>
            <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">REST API</span>
            <span class="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 text-sm">GraphQL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills