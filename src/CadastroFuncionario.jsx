import './Cadastro.css'; // Importando o arquivo de estilo
import Header from './components/header/Header';
import { Link } from 'react-router-dom';

const CadastroFuncionario = () => {
  return (
    <div className='tudo'>
    <Header />
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Cadastro</h2>
        <div className="gradient-line"></div>
        <p className="welcome-text">Bem-vindo! Por favor, insira suas informações.</p>
        <form className="login-form">
        <div className="form-group">
            <label htmlFor="name" className="sr-only">Chave de acesso interna:</label>
            <input type="name" id="name" name="name" placeholder="Chave de Acesso interna" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Senha" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Confirme sua senha:</label>
            <input type="password" id="password" name="password" placeholder="Confirme sua senha" required />
          </div>
          <Link to='/cadastro-cliente'><a className='linkref'>Sou cliente</a></Link>
          <Link to='/produtos'><button type="submit" className="login-button">Continue</button></Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CadastroFuncionario;
