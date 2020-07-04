import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FiLinkedin, FiMail, FiDownload, FiGithub } from "react-icons/fi"
import { BsArrowDown } from "react-icons/bs"
import frontViewStyles from "./FrontView.module.scss"
import Button from "../Button"

const FrontView = () => {
  const [scrolled, setScrolled] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      cv: allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(true)
      window.removeEventListener("scroll", onScroll)
    }

    window.addEventListener("scroll", onScroll)
  }, [])

  return (
    <section className={frontViewStyles.wrapper}>
      <div className={`container ${frontViewStyles.container}`}>
        <h1>
          Hello, I'm <br /> Khrystyna Fedyuk
        </h1>
        <p>I'm a software engineer, who especializes in Java.</p>
        <div className={frontViewStyles.buttonWrapper}>
          <Button href={data.cv.edges[0].node.publicURL}>
            {" "}
            Resume <FiDownload />{" "}
          </Button>
          <a
            href="https://www.linkedin.com/in/khrystyna-fedyuk/"
            target="blank"
            rel="noopener noreferrer"
            className={frontViewStyles.anchor}
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/kfedyuk"
            target="blank"
            rel="noopener noreferrer"
            className={frontViewStyles.anchor}
          >
            <FiGithub />
          </a>
          <a
            href="mailto:kfedyuk.geral@gmail.com"
            target="blank"
            rel="noopener noreferrer"
            className={frontViewStyles.anchor}
          >
            <FiMail />
          </a>
        </div>
      </div>
      <div
        className={`${frontViewStyles.scrollIndicator} ${
          scrolled ? frontViewStyles.hidden : ""
        }`}
      >
        <small>Scroll down</small>
        <BsArrowDown />
      </div>
    </section>
  )
}

export default FrontView
