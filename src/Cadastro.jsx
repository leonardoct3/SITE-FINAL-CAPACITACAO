import './Cadastro.css'; // Importando o arquivo de estilo
import { useState } from 'react';
import Header from './components/header/Header';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postLogin } from './api/register-user-api';

const CadastroCliente = ({ loggedIn, handleLog, unLog }) => {
  
  let navigate = useNavigate();
  
  const [login, setLogin] = useState({
    name: '',
    email: '',
    password: '',
    is_employee: false
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }


const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!login.name || !login.email || !login.password) {
    alert('Preencha todos os campos!');
    return;
  }
  
  if (login.password === confirmPassword) {
    
    let { response } = await postLogin(login);
    console.log(response);
    
    if (response.ok) {
      navigate('/produtos');
      handleLog();
    }
  }
}


  return (
    <div className='tudo'>
      <Header loggedIn={loggedIn} unLog={unLog} />
      <div className="login-container">
        <div className="login-content">
          <h2 className="login-title">Cadastro</h2>
          <div className="gradient-line"></div>
          <p className="welcome-text">Bem-vindo! Por favor, insira suas informações.</p>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Nome:</label>
              <input onChange={(e) => handleChange(e)} type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email:</label>
              <input onChange={(e) => handleChange(e)} type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="sr-only">Senha:</label>
              <input onChange={(e) => handleChange(e)} type="password" id="password" name="password" placeholder="Senha" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="sr-only">Confirme sua senha:</label>
              <input onChange={(e) => handleConfirmPassword(e)} type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" required />
            </div>
            <button onClick={(e) => handleSubmit(e)} type="submit" className="login-button">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

CadastroCliente.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLog: PropTypes.func.isRequired,
  unLog: PropTypes.func.isRequired,
};

export default CadastroCliente;
