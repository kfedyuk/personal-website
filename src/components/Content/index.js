import React from "react"
import contentStyles from "./Content.module.scss"

const Content = ({ title, subtitle, text, bulletpoints, date }) => {
  return (
    <div className={contentStyles.wrapper}>
      <div className={contentStyles.left}>
        <p className={contentStyles.title}>{title}</p>
        {subtitle && <p className={contentStyles.subtitle}>{subtitle}</p>}
        {date && <small>{date}</small>}
        <p>{text}</p>
        {bulletpoints && (
          <ul>
            {bulletpoints.map((bulletpoint, i) => (
              <li key={i}>{bulletpoint}</li>
            ))}
          </ul>
        )}
      </div>
      {date && (
        <div className={contentStyles.right}>
          <p>{date}</p>
        </div>
      )}
    </div>
  )
}

export default Content
