import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t py-4 fixed bottom-0 left-0 bg-white">
      <div className="px-4 md:px-8 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Andrian Robby Pratama. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
