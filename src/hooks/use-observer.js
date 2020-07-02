import { useState, useEffect, useRef } from "react"

export default ref => {
  const [visible, setVisible] = useState(false)
  const observer = useRef(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.01,
      }
    )

    ref.current && observer.current.observe(ref.current)

    return () => observer.current.disconnect()
  }, [ref])

  return visible
}
