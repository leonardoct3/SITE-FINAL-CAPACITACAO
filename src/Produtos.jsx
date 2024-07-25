import './Produtos.css'; // Importando o arquivo de estilo
import { useState } from 'react'; // Importando o hook useState
import Header from './components/header/Header';
import Heroi from './components/heroi/Heroi';
import Catalogo from './components/catalogo/Catalogo';
import Footer from './components/footer/Footer';
import Promo from './components/promo/Promo';
import Popup from './components/popup/Popup';
import PropTypes from 'prop-types';

const Produtos = ({ loggedIn }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div>
        <Header loggedIn={loggedIn} />
        <Popup showPopup={showPopup}/>
        <Heroi />
        <Catalogo togglePopup={togglePopup} />
        <Promo />
        <Footer />
    </div>
  );
};

Produtos.propTypes = {
  loggedIn: PropTypes.bool.isRequired
  
};

export default Produtos;
