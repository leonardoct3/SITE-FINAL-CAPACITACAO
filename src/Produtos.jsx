import './Produtos.css'; // Importando o arquivo de estilo
import { useState } from 'react'; // Importando o hook useState
import Header from './components/header/Header';
import Heroi from './components/heroi/Heroi';
import Catalogo from './components/catalogo/Catalogo';
import Footer from './components/footer/Footer';
import Promo from './components/promo/Promo';
import Popup from './components/popup/Popup';

const Produtos = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div>
        <Header />
        <Popup showPopup={showPopup}/>
        <Heroi />
        <Catalogo togglePopup={togglePopup} />
        <Promo />
        <Footer />
    </div>
  );
};

export default Produtos;
