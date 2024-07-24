import './Infos.css';
import { Link } from 'react-router-dom';
import qualityIcon from '../../assets/quality-icon.png';
import inovationIcon from '../../assets/inovation-icon.png';
import compromiseIcon from '../../assets/compromise-icon.png';

const Infos = () => {
  return (
    <div className="infos">
      <h2>Quem Somos</h2>
      <p>
        Na BioNutri, nossa missão é promover um estilo de vida saudável e ativo através de alimentos nutritivos e saborosos. Valorizamos a qualidade, a sustentabilidade e o bem-estar de nossos clientes, oferecendo produtos que combinam o melhor da natureza com a ciência da nutrição. Com cada barrinha, buscamos inspirar e energizar você para alcançar seus objetivos.
      </p>
      <h2>Nossos Valores</h2>
      <ul className='valores'>
        <li className='valor'>
          <img src={qualityIcon} alt="" />
          <p className='title'>Qualidade</p>
          <p>Priorizamos ingredientes naturais e processos sustentáveis.</p>
        </li>
        <li className='valor'>
          <img src={inovationIcon} alt="" />
          <p className='title'>Inovação</p>
          <p>Estamos sempre buscando novas formas de melhorar nossos produtos.</p>
        </li>
        <li className='valor'>
          <img src={compromiseIcon} alt="" />
          <p className='title'>Compromisso</p>
          <p>Com a saúde e o bem-estar de nossos consumidores.</p>
        </li>
      </ul>
      <Link to='/produtos' className="link-button">
        <button className="gradient-button">Experimente Nossos Produtos</button>
      </Link>
    </div>
  );
};

export default Infos;
