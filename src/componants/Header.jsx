import React from 'react'
import logo from '../assets/images/logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="navbar">
  <img src={logo} alt="entri logo" className="logo" />
  <nav className="links">
    <ul>
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
      <Link to="/">New</Link>
      </li>
      <li className="link">
      <Link to="/">Popular</Link>
      </li>
      <li className="link">
      <Link to="/">Trending</Link>
      </li>
      <li className="link">
      <Link to="/">Category</Link>
      </li>
    </ul>
  </nav>
</header>

    </div>
  )
}

export default Header