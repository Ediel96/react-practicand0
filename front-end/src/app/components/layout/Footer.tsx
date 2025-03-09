import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-between p-4 mt-4 border-t">
      <p className="text-sm">© 2023 My App. All rights reserved.</p>
      <nav className="flex space-x-4">
        <a href="#" className="text-sm">Privacy Policy</a>
        <a href="#" className="text-sm">Terms of Service</a>
        <a href="#" className="text-sm">Contact Us</a>
      </nav>
    </footer>
  )
}

export default Footer