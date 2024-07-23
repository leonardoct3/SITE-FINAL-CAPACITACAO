import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import './App.css';
import Header from './components/header/Header';
import Destaques from './components/destaques/Destaques';
import Infos from './components/infos/Infos';
import Avaliacoes from './components/avaliacoes/Avaliacoes';
import Footer from './components/footer/Footer';
import Login from './Login'; // Importe a página de login
import Cadastro from './Cadastro';
import Produtos from './Produtos';
//import Overview from './Overview';
//import Contact from './Contact';
//import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Adicione outras rotas aqui conforme necessário */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero /> {/* Inserindo o componente Hero */}
              <Destaques />
              <Infos />
              <Avaliacoes />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
