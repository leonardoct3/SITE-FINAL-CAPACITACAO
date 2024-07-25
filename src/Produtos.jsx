import './Produtos.css'; // Importando o arquivo de estilo
import { useState } from 'react'; // Importando o hook useState
import Header from './components/header/Header';
import Heroi from './components/heroi/Heroi';
import Catalogo from './components/catalogo/Catalogo';
import Footer from './components/footer/Footer';
import Promo from './components/promo/Promo';
import Popup from './components/popup/Popup';
import PropTypes from 'prop-types';

const Produtos = ({ loggedIn, unLog }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div>
        <Header loggedIn={loggedIn} unLog={unLog} />
        <Popup showPopup={showPopup}/>
        <Heroi />
        <Catalogo togglePopup={togglePopup} />
        <Promo />
        <Footer />
    </div>
  );
};

Produtos.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  unLog: PropTypes.func.isRequired
  
};

export default Produtos;
