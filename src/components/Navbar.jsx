import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Smoked Wings')

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div 
          className={`nav-item ${activeItem === 'Smoked Wings' ? 'active' : ''}`}
          onClick={() => setActiveItem('Smoked Wings')}
        >
          <span>Smoked Wings</span>
        </div>
        <div 
          className={`nav-item ${activeItem === 'Appetizers and sides' ? 'active' : ''}`}
          onClick={() => setActiveItem('Appetizers and sides')}
        >
          <span>Appetizers and sides</span>
        </div>
        <div 
          className={`nav-item ${activeItem === 'Sauces' ? 'active' : ''}`}
          onClick={() => setActiveItem('Sauces')}
        >
          <span>Sauces</span>
        </div>
        <div 
          className={`nav-item ${activeItem === 'Drinks' ? 'active' : ''}`}
          onClick={() => setActiveItem('Drinks')}
        >
          <span>Drinks</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar