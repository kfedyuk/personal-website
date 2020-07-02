import React from "react"
import buttonStyles from "./Button.module.scss"

const Button = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles.button}
    >
      {children}
    </a>
  )
}

export default Button
