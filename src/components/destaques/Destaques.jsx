import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Destaques.css';

import brownieImage from '../../assets/pack-barras-brownie.png';
import doceDeLeiteImage from '../../assets/pack-barras-chocolate-veganas.png';
import cookiesImage from '../../assets/pack-barras-doce-de-leite.png';

const Destaques = () => {
  const sliderRef = useRef(null);

  const products = [
    {
      title: 'Brownie',
      imgSrc: brownieImage,
      description: 'Barrinha de Proteína de Brownie, feita com ingredientes naturais e rica em proteínas. Perfeita para recarregar suas energias a qualquer hora do dia!',
    },
    {
      title: 'Chocolate Vegana',
      imgSrc: doceDeLeiteImage,
      description: 'Barrinha de Proteína de Chocolate Vegana, feita com ingredientes naturais e rica em proteínas. Perfeita para recarregar suas energias a qualquer hora do dia!',
    },
    {
      title: 'Doce de Leite',
      imgSrc: cookiesImage,
      description: 'Barrinha de Proteína de Doce de Leite, vegana, feita com ingredientes naturais e rica em proteínas. Perfeita para recarregar suas energias a qualquer hora do dia!',
    },
    // Adicione mais produtos conforme necessário
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const next = () => {
    sliderRef.current.slickNext();
  }

  const prev = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <div className="destaques">
      <h1 className='queridinhos'>Combos <span className="highlight">Queridinhos</span></h1>
      <div className="carousel-container">
        <button className="nav-button prev-button" onClick={prev}>{"<"}</button>
        <div className="slider-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.imgSrc} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </Slider>
        </div>
        <button className="nav-button next-button" onClick={next}>{">"}</button>
      </div>
    </div>
  );
};

export default Destaques;
