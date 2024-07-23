import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import './Header.css'; // Importando o arquivo de estilo

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to='/'><h1 className='show'>Bio<span className="nutri">Nutri</span></h1></Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li className='overview'><Link to="/">OVERVIEW</Link></li>
          <li className='contato'><a href="#contact">CONTATO</a></li>
          <li className='login'><Link to="/login">LOGIN</Link></li> {/* Use Link em vez de a */}
          <li className='cadastro'><Link to='/cadastro'><a href="/cadastro">CADASTRO</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
