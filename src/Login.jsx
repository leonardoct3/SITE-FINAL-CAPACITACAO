import './Login.css'; // Importando o arquivo de estilo
import { useState } from 'react';
import Header from './components/header/Header';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logIn } from './api/user-login-api';

const Login = ({ loggedIn, handleLog, unLog }) => {
  let navigate = useNavigate();
  
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }


const handleSubmit = async (e) => {
  e.preventDefault();
  
  let { response, data } = await logIn(login);
  console.log(response);
  
    if (response.ok) {
      if (data.is_employee == false) {
        navigate('/produtos');
      } else {
        navigate('/operacoes');
      }
      handleLog();
    }
  
}
  return (
    <div className='tudo'>
    <Header loggedIn={loggedIn} unLog={unLog} />
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <div className="gradient-line"></div>
        <p className="welcome-text">Bem-vindo de volta! Por favor, entre com suas credenciais.</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email:</label>
            <input onChange={(e) => handleChange(e)} type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Senha:</label>
            <input onChange={(e) => handleChange(e)} type="password" id="password" name="password" placeholder="Senha" required />
          </div>
          <button onClick={(e) => handleSubmit(e)} type="submit" className="login-button">Continue</button>
        </form>
      </div>
    </div>
    </div>
  );
};



Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLog: PropTypes.func.isRequired,
  unLog: PropTypes.func.isRequired,
};

export default Login;
