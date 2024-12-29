import React from 'react'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
        <div className="logo">
        <img src={logo} alt="logo" style={{width:'50px', height:'50px' }} />
        <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark activeTheme"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        
        </div>

   
    </header>
  )
}

export default Header