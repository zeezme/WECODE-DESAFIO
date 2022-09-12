import React from "react";
import menuItems from "../../../config/footerMenuItems.json";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
      <div className="footer-container">
        <div className="footer-logo" />
        <div className="footer-newsletter">
          <p id="footer-newsletter-title">Newsleter</p>
          <p>Receba nossas novidades e ofertas através da nossa newsletter</p>

          <form className="footer-newsletter-form">
            <input
              id="footer-newsletter-form-input"
              placeholder="Digite seu e-mail"
            ></input>
            <button id="footer-newsletter-form-submit" type="submit"></button>
          </form>
        </div>
        <div className="footer-social">
          <p id="footer-social-title">Siga nossas redes sociais</p>
          <div className="footer-social-images">
            <div className="footer-social-image1" />
            <div className="footer-social-image2" />
            <div className="footer-social-image3" />
          </div>
        </div>
        <div className="footer-menu-container">
          {menuItems.map((content, index) => (
            <div key={index}>
              <FooterMenu content={content} />
            </div>
          ))}
        </div>
        <div className="footer-certificates">
          <p>Certificados &amp; Selos</p>
          <div className="footer-certificates-image" />
        </div>
        <div className="footer-rights">
          <div className="footer-rights-logo" />
          <p>
            © 2021 wecode.digital - e-commerce technology. Todos os direitos
            reservados. Rua Plácido de Castro, 1063 - Sala 403 - Exposição,
            Caxias do Sul - RS, 95084-370 Telefone: (54) 3028-9452
          </p>
          <div className="footer-rights-vtex" />
        </div>
      </div>
  );
}
