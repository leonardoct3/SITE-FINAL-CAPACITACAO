import './Produtos.css'; // Importando o arquivo de estilo
import Header from './components/header/Header';
import Heroi from './components/heroi/Heroi';
import Catalogo from './components/catalogo/Catalogo';
import Footer from './components/footer/Footer';
import Promo from './components/promo/Promo';

const Login = () => {
  return (
    <div>
        <Header />
        <Heroi />
        <Catalogo />
        <Promo />
        <Footer />
    </div>
  );
};

export default Login;
