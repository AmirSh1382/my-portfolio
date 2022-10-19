import React, { useEffect, useRef, useState } from "react";

// React-router-dom
import { Link, useLocation } from "react-router-dom";

// Styles
import styles from "./Header.module.css";

const Header = () => {

  const { pathname } = useLocation()

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const hamburgerIcon = useRef()
  const navbar = useRef()

  useEffect(() => {
    window.addEventListener("click", e => {
        if (hamburgerIcon.current.contains(e.target)) {
            return
        } else if (!navbar.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
    })
  }, [])

  return (
    <header className={styles.container}>
      <div>
        AmirSh
      </div>

      <i 
        ref={hamburgerIcon}
        onClick={() => setIsMenuOpen(true)}
        className={`${styles.hamburger} bi bi-list text-3xl`}
      ></i>

      <nav 
        ref={navbar} 
        className={`${styles.nav} ${isMenuOpen && styles.open}`}
      >
        <i 
          onClick={() => setIsMenuOpen(false)}
          className="bi bi-x-lg text-2xl"
        ></i>

        <ul>
          <li className={`${pathname === "/home" && styles.selected}`}>
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className={`${pathname === "/mywork" && styles.selected}`}>
            <Link to="/mywork" onClick={() => setIsMenuOpen(false)}>My Work</Link>
          </li>
          <li className={`${pathname === "/aboutme" && styles.selected}`}>
            <Link to="/aboutme" onClick={() => setIsMenuOpen(false)}>About Me</Link>
          </li>
        </ul>
      </nav>

      <div className={`${styles.menuCover} ${isMenuOpen && styles.open}`}></div>
    </header>
  );
};

export default Header;