import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Explore a diverse menu filled with delectable dishes, crafted from the finest ingredients to satisfy your cravings and elevate your dining experience—one unforgettable bite at a time.</p>
            <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header