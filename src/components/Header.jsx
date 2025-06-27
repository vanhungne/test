import React from 'react'

const Header = () => {
  return (
    <header className="site-header w-full bg-white border-b border-gray-100" role="banner">
      <nav className="main-navigation max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="nav-container flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation */}
          <div className="nav-left flex-1">
            {/* Mobile Menu Button */}
            <button type="button" className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            
            <ul className="nav-menu hidden sm:flex items-center space-x-4 sm:space-x-6 md:space-x-8" role="menubar">
              <li role="none">
                <a href="#skincare" role="menuitem" className="link-underline text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Skincare</a>
              </li>
              <li role="none">
                <a href="#accessories" role="menuitem" className="link-underline text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Accessories</a>
              </li>
              <li role="none">
                <a href="#new" role="menuitem" className="new-badge link-underline flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  New
                  <span aria-label="New items available" className="text-xs">⭐</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Logo */}
          <div className="nav-center flex-shrink-0 px-4">
            <a href="/" className="logo" aria-label="SALIENT homepage">
              <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">SALIENT</h1>
            </a>
          </div>
          
          {/* Right Navigation */}
          <div className="nav-right flex-1 flex justify-end">
            <ul className="nav-menu flex items-center space-x-4 md:space-x-6" role="menubar">
              <li role="none" className="hidden md:block">
                <a href="#demos" role="menuitem" className="link-underline text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Demos</a>
              </li>
              <li role="none">
                <button type="button" aria-label="Search products" role="menuitem" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </li>
              <li role="none">
                <button type="button" aria-label="User account" role="menuitem" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </button>
              </li>
              <li role="none">
                <button type="button" aria-label="Shopping cart" role="menuitem" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header