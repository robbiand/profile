import React from 'react'

const Companies = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center mb-20">
      <div className="w-full max-w-lg mx-auto">
        <h3 className="font-semibold text-2xl">
          Experience / Career Timeline
        </h3>
      </div>
      <div class="flex flex-col relative border-l border-gray-300 dark:border-gray-700 pl-6 mt-6">
        <div class="mb-10 relative">
          <span class="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900"></span>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 hover:shadow-md transition">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Senior Frontend Engineer @Blibli.com
            </h3>
            <p class="text-xs text-gray-500 mb-3">May 2022 - Present</p>
            <ul class="list-disc list-outside pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>Build and maintain large-scale e-commerce applications using Vue.js</li>
              <li>Collaborate with design and backend teams to improve UX and performance</li>
              <li>Optimize Core Web Vitals, achieving faster load times and better SEO</li>
            </ul>
          </div>
        </div>

        <div class="mb-10 relative">
          <span class="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 hover:shadow-md transition">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Frontend Engineer @Kitabisa.com
            </h3>
            <p class="text-xs text-gray-500 mb-3">Jan 2020 - May 2022</p>
            <ul class="list-disc list-outside pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed donation platform features using Typescript, React.js and Next.js</li>
              <li>Built and maintained a reusable component library to accelerate development</li>
              <li>Worked in cross-functional squads with backend, QA, and UI/UX teams</li>
              <li>Improved accessibility and mobile-first design for better user reach</li>
            </ul>
          </div>
        </div>

        <div class="mb-10 relative">
          <span class="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-red-500 border-2 border-white dark:border-gray-900"></span>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 hover:shadow-md transition">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Web Developer (Frontend) @Detik.com
            </h3>
            <p class="text-xs text-gray-500 mb-3">Nov 2017 - Jan 2020</p>
            <ul class="list-disc list-outside pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed high-traffic news portal features with focus on scalability and stability</li>
              <li>Implemented rendering and caching optimizations to handle peak traffic loads</li>
              <li>Optimized Core Web Vitals for faster load times and SEO improvements</li>
              <li>Integrated ad services and analytics tools without compromising performance</li>
            </ul>
          </div>
        </div>

        <div class="mb-10 relative">
          <span class="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-yellow-500 border-2 border-white dark:border-gray-900"></span>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 hover:shadow-md transition">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Fullstack Web Developer @Halojasa.com
            </h3>
            <p class="text-xs text-gray-500 mb-3">Apr 2017 - Nov 2017</p>
            <ul class="list-disc list-outside pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>Built and maintained a service marketplace with Laravel (backend) and JavaScript/jQuery (frontend)</li>
              <li>Designed and implemented relational database schemas for users, services, and transactions</li>
              <li>Optimized Core Web Vitals for better performance and SEO</li>
              <li>Integrated third-party payment gateways with security best practices</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Companies