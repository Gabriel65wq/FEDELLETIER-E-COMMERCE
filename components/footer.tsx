export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Fede Lettier</h3>
          <p>
            Importador directo 🇺🇸🇨🇳🇵🇾 de productos del momento.
            <br />
            +1000 Clientes satisfechos.
          </p>
        </div>

        <div className="footer-middle">
          <h3>Enlaces</h3>
          <nav aria-label="Enlaces del footer">
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#productos">Productos</a>
              </li>
              <li>
                <a href="#informacion">Información</a>
              </li>
              <li>
                <a href="#referencias">Referencias</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-right">
          <h3>Contacto</h3>
          <p>
            📞 <a href="tel:+5491124772377">+54 9 11 2477 2377</a>
          </p>
          <p>
            📞 <a href="tel:+5491136382378">+54 9 11 3638 2378</a>
          </p>
          <hr />
          <p>
            Diseñada por: <strong>Gabriel Diaz</strong>
          </p>
          <p>
            Tel: <a href="tel:+5491134295399">+54 9 11 3429 5399</a>
          </p>
        </div>
      </div>

      <hr className="footer-separator" />
      <p className="copyright-notice">© 2025 Fede Lettier. Todos los derechos reservados.</p>
    </footer>
  )
}
