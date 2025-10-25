"use client"

import { useState } from "react"
import { Home, User, ShoppingCart } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { AuthModal } from "./auth-modal"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { getTotalItems, setShowCart } = useCart()

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <h1>LOGO</h1>
          </div>

          <nav className="header-middle" aria-label="Navegación principal">
            <div className="centered-nav">
              <a href="#inicio" className="nav-button home-button" aria-label="Ir a inicio">
                <Home className="icon" />
              </a>

              <div className={`hamburger-menu ${showMenu ? "active" : ""}`}>
                <button
                  className="hamburger-button"
                  aria-label="Menú de navegación"
                  aria-expanded={showMenu}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div className="hamburger-options" role="menu">
                  <a href="#productos" role="menuitem" onClick={() => setShowMenu(false)}>
                    Productos
                  </a>
                  <a href="#informacion" role="menuitem" onClick={() => setShowMenu(false)}>
                    Información
                  </a>
                  <a href="#referencias" role="menuitem" onClick={() => setShowMenu(false)}>
                    Referencias
                  </a>
                </div>
              </div>

              <button
                className="nav-button account-button"
                aria-label="Mi cuenta"
                onClick={() => setShowAuthModal(true)}
              >
                <User className="icon" />
              </button>

              <button className="button cart-button" aria-label="Carrito de compras" onClick={() => setShowCart(true)}>
                <ShoppingCart className="icon" />
                {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
              </button>
            </div>
          </nav>

          <div className="header-right">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  )
}
