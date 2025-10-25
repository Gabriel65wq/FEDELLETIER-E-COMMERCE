"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const shouldBeDark = savedTheme === "dark"
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return { isDark, toggleTheme }
}
