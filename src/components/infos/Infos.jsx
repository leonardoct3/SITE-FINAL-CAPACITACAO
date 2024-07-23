import './Infos.css';
import { Link } from 'react-router-dom';

const Infos = () => {
  return (
    <div className="infos">
      <h2>Quem Somos</h2>
      <p>
      Na BioNutri, nossa missão é promover um estilo de vida saudável e ativo através de alimentos nutritivos e saborosos. Valorizamos a qualidade, a sustentabilidade e o bem-estar de nossos clientes, oferecendo produtos que combinam o melhor da natureza com a ciência da nutrição. Com cada barrinha, buscamos inspirar e energizar você para alcançar seus objetivos.
      </p>
      <Link to='/produtos'><button className="gradient-button">Experimente!</button></Link>
    </div>
  );
};

export default Infos;
