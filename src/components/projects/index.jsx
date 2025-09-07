import React from 'react'

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center mb-20">
      <div className="w-full max-w-lg mx-auto">
        <h3 className="font-semibold text-2xl">
          Selected Projects
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          A selection of web applications I've built and contributed to short descriptions and key technologies used.
        </p>
      </div>
      <div class="space-y-6">
        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">HaloJasa.com</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              A service marketplace platform that helps users find and book local service providers via web and mobile.
              I worked on both frontend and backend features to streamline listings, booking flows and user management.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: Fullstack development, DB design, API design, payment integration</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Node.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Vue.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">MySQL</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">REST API</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Payment Gateway</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">CNNIndonesia.com</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Large-scale news portal delivering national and international news. Focused on performance, SEO,
              and delivering reliable content under high traffic conditions.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: Frontend performance, SEO optimizations, integration</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">React.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Phalcon (PHP)</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">SEO</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Caching</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">CNBCIndonesia.com</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Real-time economic and business news portal engineered for availability and quick updates during market hours.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: Real-time features, scalability, performance tuning</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">React.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Phalcon (PHP)</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Performance</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Real-time updates</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">Haibunda.com</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Lifestyle and parenting portal for mothers — content-driven with emphasis on readability, mobile UX, and analytics.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: Frontend UI, analytics, content optimization</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">React.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Phalcon (PHP)</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">Beautynesia.com</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Fashion & beauty portal focused on trends, reviews, and lifestyle content with social integration and SEO-first approach.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: Frontend features, social integrations, SEO</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">React.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Phalcon (PHP)</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Social Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">PKMS (Procurement Knowledge Management) - LKPP</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Knowledge management system for government procurement — focused on secure role-based access and structured data management.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: Data modeling, RBAC, backend integrations</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Laravel</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">MySQL</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">REST API</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">RBAC</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="flex flex-col md:flex-row md:items-start gap-6 p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <div class="md:w-2/3">
            <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">Kitabisa.com</h3>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
              One of Indonesia’s largest fundraising platforms — focused on donation flows, reliability, and accessibility for mass users.
            </p>
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">Role highlights: PWA, TypeScript, performance, testing</p>
          </div>

          <div class="md:w-1/3 flex md:justify-end">
            <div class="w-full md:w-56">
              <div class="h-full flex flex-col justify-center border-l border-gray-100 dark:border-gray-800 pl-4 md:pl-6">
                <p class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">Tech stack</p>
                <ul class="flex flex-wrap gap-2">
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">Next.js</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">TypeScript</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">PWA</li>
                  <li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200">CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60">
          <h3 class="text-sm font-semibold uppercase text-slate-700 dark:text-slate-200 tracking-wide">Blibli — Payment & Procurement Projects</h3>
          <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
            Multiple internal and external applications: payment flows (Blipay, PayLater), procurement systems (SIPLAH), and monitoring dashboards.
            Focused on secure payment integration, data visualization and internal tooling for operations teams.
          </p>

          <div class="mt-4 grid grid-cols-1 gap-3">
            <div class="flex items-start gap-3">
              <ul class="flex-1 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                <li class="font-medium">Blipay PayLater</li>
                <li class="text-xs text-gray-500 dark:text-gray-400">Payment orchestration & BNPL flows</li>
              </ul>
              <div class="flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Vue.js</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Payments</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <ul class="flex-1 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                <li class="font-medium">Payment Monitoring Dashboard</li>
                <li class="text-xs text-gray-500 dark:text-gray-400">Internal analytics dashboard for transactions & reconciliation</li>
              </ul>
              <div class="flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Vue.js</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Chart.js</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <ul class="flex-1 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                <li class="font-medium">Blibli Payment</li>
                <li class="text-xs text-gray-500 dark:text-gray-400">Core payment integration & multi-provider support</li>
              </ul>
              <div class="flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Vue.js</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Security</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <ul class="flex-1 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                <li class="font-medium">SIPLAH (Procurement for Schools)</li>
                <li class="text-xs text-gray-500 dark:text-gray-400">Procurement information system for schools & stakeholders</li>
              </ul>
              <div class="flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Vue.js</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">APIs</span>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  )
}

export default Projects