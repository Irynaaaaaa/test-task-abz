import React from 'react'

import Button from '../../components/Button/Button'

import logo from '../../assets/icons/Logo.svg'
import './styles.scss'

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" />

      <div className="header-buttons">
        <Button>Users</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  )
}

export default Header
