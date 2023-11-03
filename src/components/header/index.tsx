import { useCallback, useEffect, useState } from "react"
import Nav from "../../components/nav"
import Logo from "/images/Digital_Spaniel_Logo.png"

function Header() {
  const [isTop, setIsTop] = useState(true)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setVisible(lastScrollY > currentScrollY || currentScrollY < 50)
    setIsTop(currentScrollY < 50)
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    // Add the scroll listener to the window
    window.addEventListener("scroll", handleScroll)

    // Clean up the scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <header
      className={`header ${visible ? "fixed-header" : "header-hidden"} ${
        isTop ? "" : "scrolled-header"
      }`}
    >
      <div className="header__wrapper">
        <img className="logo" src={Logo} alt="logo" />
        <Nav />
      </div>
    </header>
  )
}

export default Header
