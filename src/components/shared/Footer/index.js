import React from "react"
import { FiLinkedin, FiMail } from "react-icons/fi"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={`container ${footerStyles.container}`}>
        <p>© 2020 Khrystyna Fedyuk</p>
        <p className={footerStyles.divider}>|</p>
        <div className={footerStyles.contact}>
          <a
            href="https://www.linkedin.com/in/khrystyna-fedyuk/"
            target="blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:kfedyuk.geral@gmail.com"
            target="blank"
            rel="noopener noreferrer"
          >
            <FiMail /> kfedyuk.geral@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
