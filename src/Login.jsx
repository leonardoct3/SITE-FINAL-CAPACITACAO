import './Login.css'; // Importando o arquivo de estilo
import Header from './components/header/Header';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='tudo'>
    <Header />
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
          <Link to='/produtos'><button type="submit" className="login-button">Continue</button></Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
