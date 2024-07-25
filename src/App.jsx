import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import './App.css';
import Header from './components/header/Header';
import Destaques from './components/destaques/Destaques';
import Infos from './components/infos/Infos';
import Avaliacoes from './components/avaliacoes/Avaliacoes';
import Footer from './components/footer/Footer';
import LoginCliente from './Login'; // Importe a página de login
import Produtos from './Produtos';
import B2b from './components/B2B/B2B';
import CadastroCliente from './Cadastro';
import Operacoes from './Operacoes';
import { useState } from 'react';
//import Overview from './Overview';
//import Contact from './Contact';
//import Signup from './Signup';
import Banner from './components/banner/Banner';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLog = () => {
    setLoggedIn(true);
  }
  const unLog = () => {
    setLoggedIn(false);
  }
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/login" element={<LoginCliente loggedIn={loggedIn} handleLog={handleLog} unLog={unLog} />} />
          
          {/* Adicione outras rotas aqui conforme necessário */}
          <Route path="/cadastro" element={<CadastroCliente loggedIn={loggedIn} handleLog={handleLog} unLog={unLog}/>} />
          
          <Route path="/produtos" element={<Produtos loggedIn={loggedIn} unLog={unLog}/>} />
          <Route path="/operacoes" element={<Operacoes loggedIn={loggedIn} unLog={unLog}/>} />
          <Route path="/" element={
            <>
              <Header loggedIn={loggedIn} unLog={unLog}/>
              <Banner />
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
