import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
        <div className='hero-content'>
            <h1 className="hero-title">Potencialize seu dia com a energia de cada mordida!</h1>
            <Link to='/produtos'><button className="hero-button">Explore nossos produtos</button></Link>
      </div>
    </div>
  );
}

export default Hero;
