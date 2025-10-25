"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface AuthModalProps {
  onClose: () => void
}

export function AuthModal({ onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Funcionalidad de inicio de sesión - Conectar con tu backend")
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const password = (form.elements.namedItem("password") as HTMLInputElement).value
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    alert("Funcionalidad de registro - Conectar con tu backend")
  }

  return (
    <div className="auth-modal active" role="dialog" aria-labelledby="auth-modal-title">
      <div className="auth-modal-backdrop" onClick={onClose}></div>
      <div className="auth-modal-content">
        <button className="auth-modal-close" onClick={onClose} aria-label="Cerrar modal de autenticación">
          <X size={24} />
        </button>

        <div className="auth-tabs" role="tablist">
          <button
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
            role="tab"
            aria-selected={activeTab === "login"}
          >
            Iniciar Sesión
          </button>
          <button
            className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
            role="tab"
            aria-selected={activeTab === "register"}
          >
            Registrarse
          </button>
        </div>

        {activeTab === "login" ? (
          <div className="auth-form active" role="tabpanel">
            <h2 id="auth-modal-title">Bienvenido de nuevo</h2>
            <p className="auth-subtitle">Ingresa tus credenciales para continuar</p>

            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-email">Correo electrónico</label>
                <input type="email" id="login-email" placeholder="tu@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Contraseña</label>
                <input type="password" id="login-password" placeholder="••••••••" required />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" id="remember-me" />
                  <span>Recordarme</span>
                </label>
                <a href="#" className="forgot-password">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button type="submit" className="auth-submit-btn">
                Iniciar Sesión
              </button>
            </form>
          </div>
        ) : (
          <div className="auth-form active" role="tabpanel">
            <h2>Crear cuenta</h2>
            <p className="auth-subtitle">Únete a nuestra comunidad de clientes</p>

            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="register-name">Nombre completo</label>
                <input type="text" id="register-name" name="name" placeholder="Juan Pérez" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-email">Correo electrónico</label>
                <input type="email" id="register-email" name="email" placeholder="tu@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="register-password">Contraseña</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-confirm-password">Confirmar contraseña</label>
                <input
                  type="password"
                  id="register-confirm-password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>

              <label className="checkbox-label">
                <input type="checkbox" id="accept-terms" required />
                <span>
                  Acepto los <a href="#">términos y condiciones</a>
                </span>
              </label>

              <button type="submit" className="auth-submit-btn">
                Crear Cuenta
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
