import './Footer.css';

import locImage from '../../assets/loc-icon.png';
import instaImage from '../../assets/insta-icon.png';
import emailImage from '../../assets/email-icon.png';
function Footer() {
  return (
    <footer id='footer' className="footer">
      <div className="footer-section">
        <h2 className="footer-title">Bio<span className="highlight">Nutri</span></h2>
        <div className="footer-icons">
          <img alt='loc' src={locImage} className="icon icon1"></img>
          <img alt='insta' src={instaImage} className="icon icon2"></img>
          <img alt='email' src={emailImage} className="icon icon3"></img>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Contato</h2>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: contato@bionutri.com</p>
        <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
        <p>Horário: Seg - Sex, 9h - 18h</p>
      </div>
      <div className="footer-section">
        <h2 className="footer-title highlight">INSCREVA-SE</h2>
        <p>Receba novidades sobre nossas barrinhas!</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Seu email" className="footer-input"/>
          <button className="subscribe-button">Enviar</button>
        </div>
        <p>Fique tranquilo, não enviamos spam.</p>
      </div>
    </footer>
  );
}

export default Footer;
