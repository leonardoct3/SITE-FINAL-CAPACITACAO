import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import './Header.css'; // Importando o arquivo de estilo
import PropTypes from 'prop-types';

function Header({ loggedIn, unLog }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to='/'><h1 className='show'>Bio<span className="nutri">Nutri</span></h1></Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li className='home'><Link to="/">HOME</Link></li>
          <li className='contato'><a href="#footer">CONTATO</a></li>
          <li className='produtos'><Link to='/produtos'><a href="#contact">PRODUTOS</a></Link></li>
          {!loggedIn ? <li className='login'><Link to="/login-cliente">LOGIN</Link></li> : null}
          {!loggedIn ? <li className='cadastro'><Link to='/cadastro-cliente'><a href="/cadastro">CADASTRO</a></Link></li> : null}
          {loggedIn ? <li className='cadastro'><Link onClick={() => unLog()} to='/'><a  href="/">SAIR</a></Link></li> : null}
        </ul>
      </nav>
    </header>
  );
}



Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  unLog: PropTypes.func.isRequired
};

export default Header;
