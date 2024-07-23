import { useRef } from 'react';
import Slider from 'react-slick';
import './Avaliacoes.css';

import avaliacaoImage from '../../assets/avaliacao.png';

function Avaliacoes() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Desativar os botões de controle padrão
  };

  const reviews = [
    {
      text: "Excelente produto, recomendo a todos!",
      author: "João Silva"
    },
    {
      text: "Atendimento impecável e entrega rápida.",
      author: "Maria Oliveira"
    },
    {
      text: "Muito satisfeito com a qualidade.",
      author: "Carlos Pereira"
    }
  ];

  const next = () => {
    sliderRef.current.slickNext();
  }

  const prev = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <div className="avaliacoes">
      <h2 className="avaliacoes-title">Avaliações</h2>
      <div className="avaliacoes-content">
        <div className="avaliacoes-left">
          <p className="avaliacoes-score"><span className='highlight'>4,9</span> de 5</p>
          <img 
            src={avaliacaoImage} 
            alt="Diagrama das Avaliações" 
            className="avaliacoes-diagram" 
          />
        </div>
        <h1 className='aspas'>&ldquo;</h1>
        <div className="avaliacoes-right">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="avaliacao">
                <p className="avaliacao-text">&ldquo;{review.text}&rdquo;</p>
                <p className="avaliacao-author">- {review.author}</p>
              </div>
            ))}
            
          </Slider>
          <div className='buttons'>
            <button className="av-button" onClick={prev}>{"<"}</button>
            <button className="av-button" onClick={next}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avaliacoes;
