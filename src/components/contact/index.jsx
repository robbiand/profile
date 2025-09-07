import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center mb-20">
      <div className="w-full max-w-lg mx-auto">
        <h3 className="font-semibold text-2xl">
          Social Links
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          You can find me on the following platforms.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-6 mt-6">
        <a
          href="https://github.com/robbiand"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-colors"
        >
          <Github className="w-5 h-5 text-black dark:text-white" />
          <span className="text-black dark:text-white">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/andrian-robby-pratama-786401137/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
          <span className="text-blue-600">LinkedIn</span>
        </a>
        <a
          href="mailto:arprobi@gmail.com"
          className="flex items-center gap-2 hover:opacity-80 transition-colors"
        >
          <Mail className="w-5 h-5 text-red-600" />
          <span className="text-red-600">Email</span>
        </a>
        <a
          href="https://wa.me/6285790567597"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-colors"
        >
          <Phone className="w-5 h-5 text-green-600" />
          <span className="text-green-600">WhatsApp</span>
        </a>
      </div>

    </div>
  )
}

export default Contact