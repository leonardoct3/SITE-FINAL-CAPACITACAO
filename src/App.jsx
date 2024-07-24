import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import './App.css';
import Header from './components/header/Header';
import Destaques from './components/destaques/Destaques';
import Infos from './components/infos/Infos';
import Avaliacoes from './components/avaliacoes/Avaliacoes';
import Footer from './components/footer/Footer';
import LoginCliente from './Login'; // Importe a página de login
import CadastroFuncionario from './CadastroFuncionario';
import Produtos from './Produtos';
import B2b from './components/B2B/B2B';
import LoginFuncionario from './LoginFuncionario';
import CadastroCliente from './Cadastro';
//import Overview from './Overview';
//import Contact from './Contact';
//import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/login-cliente" element={<LoginCliente />} />
          <Route path='/login-funcionario' element={<LoginFuncionario />} />
          {/* Adicione outras rotas aqui conforme necessário */}
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route path='/cadastro-funcionario' element={<CadastroFuncionario/>} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero /> {/* Inserindo o componente Hero */}
              <Destaques />
              <Infos />
              <Avaliacoes />
              <B2b />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
