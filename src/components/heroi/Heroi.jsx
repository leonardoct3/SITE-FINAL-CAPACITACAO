import './Heroi.css';
import barraImage from '../../assets/barra-grande.png';

function Heroi() {
  return (
    <div className="heroi">
      <div className="heroi-content">
        <div className="heroi-text">
          <h1 className="heroi-title">não é só uma <span className='highlight'>barrinha</span>, é uma <span className='highlight'>experiência!</span></h1>
        </div>
        <div className="heroi-image">
          <img 
            src={barraImage} 
            alt="Imagem Grande" 
          />
        </div>
      </div>
    </div>
  );
}

export default Heroi;
