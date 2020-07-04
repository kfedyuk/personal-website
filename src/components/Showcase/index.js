import React, { useRef, useEffect, useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import useObserver from "../../hooks/use-observer"
import Content from "../Content"
import showcaseStyles from "./Showcase.module.scss"

const Showcase = () => {
  const sliderRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const activitiesRef = useRef(null)
  const educationVisible = useObserver(educationRef)
  const experienceVisible = useObserver(experienceRef)
  const skillsVisible = useObserver(skillsRef)
  const activitiesVisible = useObserver(activitiesRef)
  const [currentBlock, setCurrentBlock] = useState("education")

  useEffect(() => {
    const blocks = [
      ["education", educationVisible],
      ["experience", experienceVisible],
      ["skills", skillsVisible],
      ["activities", activitiesVisible],
    ]

    const toBeCurrentBlock = blocks.reduce(
      (prevBlock, [block, visible]) => (visible ? block : prevBlock),
      currentBlock
    )

    toBeCurrentBlock !== currentBlock && setCurrentBlock(toBeCurrentBlock)
  }, [
    educationVisible,
    experienceVisible,
    skillsVisible,
    activitiesVisible,
    currentBlock,
  ])

  const isActive = block =>
    currentBlock === block ? showcaseStyles.active : ""

  const scroll = (backward = false) => () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: sliderRef.current.offsetWidth * (backward ? -1 : 1),
      behavior: "smooth",
    })
  }

  const isDisabled = block => (currentBlock === block ? true : false)

  const scrollTo = block => e => {
    e.preventDefault()

    const blocks = ["education", "experience", "skills", "activities"]

    if (currentBlock !== block) {
      const numScreens = -(blocks.indexOf(currentBlock) - blocks.indexOf(block))

      sliderRef.current.scrollBy({
        top: 0,
        left: sliderRef.current.offsetWidth * numScreens,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className={showcaseStyles.container}>
      <div className={showcaseStyles.header}>
        <div className={showcaseStyles.headerContent}>
          <button
            className={showcaseStyles.left}
            disabled={isDisabled("education")}
          >
            <BsArrowLeft onClick={scroll(true)} />
          </button>
          <a
            href="#education"
            className={isActive("education")}
            onClick={scrollTo("education")}
          >
            Education
          </a>
          <span>|</span>
          <a
            href="#experience"
            className={isActive("experience")}
            onClick={scrollTo("experience")}
          >
            Professional Experience
          </a>
          <span>|</span>
          <a
            href="#skills"
            className={isActive("skills")}
            onClick={scrollTo("skills")}
          >
            Skills
          </a>
          <span>|</span>
          <a
            href="#activities"
            className={isActive("activities")}
            onClick={scrollTo("activities")}
          >
            Other Activities
          </a>
          <button
            className={showcaseStyles.right}
            onClick={scroll()}
            disabled={isDisabled("activities")}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div ref={sliderRef} className={showcaseStyles.slider}>
        <article
          ref={educationRef}
          className={showcaseStyles.block}
          id="education"
        >
          <Content
            title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa"
            subtitle="Integrated M.Sc. in Computer Science and Engineering"
            text="Currently working on my thesis to end the course. My average grade is
          15."
            date="2014 – 2020"
          />
          <Content
            title="Université Grenoble Alpes"
            subtitle="M.Sc. in Computer Science and Engineering"
            text="A semester in Grenoble, France by the Erasmus program, where I took the Programming language and compiler design course."
            date="Sep 2017 – Jan 2018"
          />
          <Content
            title="National School of Computer Science and Applied Mathematics of Grenoble"
            subtitle="M.Sc. in Computer Science and Engineering"
            text="A semester in Grenoble, France by the Erasmus program where I took the Human Computer Interaction and Parallel Systems courses."
            date="Sep 2017 – Jan 2018"
          />
        </article>
        <article
          ref={experienceRef}
          className={showcaseStyles.block}
          id="experience"
        >
          <Content
            title="LightKone - Lightweight Computation for Networks at the Edge"
            subtitle="Research Grant"
            text="Worked with the Computer Systems Groups of NOVA LINCS to design an architecture, potentially based on microservice architectures, that will manage the execution of distributed applications across the cloud-edge spectrum. I focused on developing and testing a Java based discovery service for microservices for cloud/edge settings."
            date="May 2019 – Oct 2019"
          />
          <Content
            title="NOVA FCT"
            subtitle="Teaching Assistant"
            text="Selected to support the course Algorithms and Data Structures at NOVA FCT (taught in C), being responsible for teaching a class of Electrical Engineering BSc students during the Spring semester."
            date="Mar 2019 – Jul 2019"
          />
          <Content
            title="NetCAOS, Lda"
            subtitle="Internship"
            text="Worked in a team in web development with VB.NET - ASP.NET MVC and SQL Server to test and extend a backoffice management website with an automatic billing system, integrated with API Mandrill, IfThenPay and WeoInvoice."
            date="Jul 2018 – Aug 2018"
          />
        </article>
        <article ref={skillsRef} className={showcaseStyles.block} id="skills">
          <Content
            title="Programming Languages"
            text="Java (Maven, Gradle), C, C++, Python, SQL, Javascript, HTML, CSS"
          />
          <Content
            title="Frameworks and Libraries"
            text="Spring, Jersey, React (Gatsby), Akka"
          />
          <Content
            title="Other Tools"
            text="Git, Postman, Tomcat, Google App Engine, Amazon EC2, MongoDB, levelDB, Google Cloud Data Store, SQL Server, MySQL"
          />
          <Content
            title="Spoken Languages"
            text="Portuguese, English, French, Russian, Ukrainian"
          />
        </article>
        <article
          ref={activitiesRef}
          className={showcaseStyles.block}
          id="activities"
        >
          <Content
            title="Personal Website"
            subtitle="Project"
            text="My personal website that I developed with Gatsby and React as I didn't like the idea of using a template and wanted to make it more personal."
            date="2020"
          />
          <Content
            title="ExpoFCT"
            subtitle="Volunteer"
            text={`ExpoFCT is an annual event where each department shows its educational offer to pre-university (or younger) students through different workshops and activities.`}
            bulletpoints={[
              "2019 - Helped my department in the preparations for ExpoFCT and was part of a team responsible to introduce and guide the NanoRobots activity, where students learned basic programming concepts in an interactive and simple way with the help of Ozobots.",
              `2018 - Invited to present my project "Almada Consigo" in the "Innovation Projects" section, where students showcase interesting projects that they developed.`,
            ]}
            date="Apr 2018 - 2019"
          />
          <Content
            title="Almada Consigo"
            subtitle="Project"
            text="Project developed as part of the Engineering Project course where I developed, in a team of 5 people, an Angular frontend application with Java backend, supported by Google App Engine, along with an Android mobile application. The application is a service that allows you to post occurrences on the public road, such as potholes, and follow the resolution process, as well as share it and obtain feedback from the community."
            date="2017"
          />
        </article>
      </div>
    </section>
  )
}

export default Showcase
