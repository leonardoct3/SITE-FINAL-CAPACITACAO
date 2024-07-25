import './Login.css'; // Importando o arquivo de estilo
import Header from './components/header/Header';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginCliente = ({ loggedIn, handleLog }) => {
  return (
    <div className='tudo'>
    <Header loggedIn={loggedIn} />
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <div className="gradient-line"></div>
        <p className="welcome-text">Bem-vindo de volta! Por favor, entre com suas credenciais.</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Senha" required />
          </div>
          <Link to='/login-funcionario'><a className='linkref'>Sou funcionário</a></Link>
          <Link to='/produtos'><button onClick={() => handleLog()} type="submit" className="login-button">Continue</button></Link>
        </form>
      </div>
    </div>
    </div>
  );
};



LoginCliente.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLog: PropTypes.func.isRequired
};

export default LoginCliente;
