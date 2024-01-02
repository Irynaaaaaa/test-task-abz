import React from 'react'

import './styles.scss'

const Button = ({
  children,
  type = 'yellow',
  size = 'base',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`base-button base-button-${size} base-button-${type}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
