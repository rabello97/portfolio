import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer class="footer" id="contato">
        <div class="footer-container">
          <p class="footer-texto">
            Estou disponível para novos projetos no momento. Entre em contato
            comigo e marcamos uma conversa 👋
          </p>
          <ul class="footer-contato">
            <li>lobo@email.com</li>
            <li>+55 21 9999-9999</li>
            <li>
              <a href="/">@instagram</a>
            </li>
          </ul>
          <p class="footer-copy">Lobo. Alguns direitos reservados.</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
