import { useState } from 'react';
import './Catalogo.css';
import brownieImage from '../../assets/brownie-isolated-white-background.jpg';
import strawberryImage from '../../assets/protein-bar-strawberry.png';
import cookiesImage from '../../assets/protein-bar-cookies&cream.png';
import BotaoCarrinho from '../botao-carrinho/BotaoCarrinho';


function Catalogo() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterValue, setFilterValue] = useState('');

  const products = [
    {
      image: brownieImage,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'chocolate'
    },
    {
      image: strawberryImage,
      unidades: 12,
      proteina: 10,
      preco: 120.00,
      sabor: 'morango'
    },
    {
      image: cookiesImage,
      unidades: 36,
      proteina: 10,
      preco: 360.00,
      sabor: 'cookies&cream'
    },
    {
      image: strawberryImage,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'morango'
    },
    {
      image: brownieImage,
      unidades: 12,
      proteina: 10,
      preco: 120.00,
      sabor: 'chocolate'
    },
    {
      image: brownieImage,
      unidades: 36,
      proteina: 10,
      preco: 360.00,
      sabor: 'chocolate'
    },
    {
      image: cookiesImage,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'cookies&cream'
    },
    {
      image: cookiesImage,
      unidades: 12,
      proteina: 10,
      preco: 120.00,
      sabor: 'cookies&cream'
    },
    {
      image: strawberryImage,
      unidades: 36,
      proteina: 10,
      preco: 360.00,
      sabor: 'morango'
    }
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
    setFilterValue('');
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredProducts = selectedFilter
    ? products.filter((product) => {
        if (selectedFilter === 'unidades' && filterValue) {
          return product.unidades === parseInt(filterValue, 10);
        } else if (selectedFilter === 'proteinas' && filterValue) {
          return product.proteina === parseInt(filterValue, 10);
        } else if (selectedFilter === 'sabor' && filterValue) {
          return product.sabor.toLowerCase().includes(filterValue.toLowerCase());
        } else {
          return products;
        }
      })
    : products;

  return (
    <div className="catalogo">
      <div className="catalogo-filters">
        <h2>Filtros</h2>
        <ul>
          <li className='filtro' onClick={() => handleFilterClick('unidades')}>
            <p>Unidades</p>
            <p>{selectedFilter === 'unidades' ? '-' : '+'}</p>
            </li>
          <li className='custom-select'>
            {selectedFilter === 'unidades' && (
            <select onChange={handleFilterChange} value={filterValue}>
                <option value="">Selecione Unidades</option>
                {[...new Set(products.map((product) => product.unidades))].map((unidades) => (
                <option key={unidades} value={unidades}>{unidades}</option>
                ))}
            </select>
            )}
          </li>
          <li className='filtro' onClick={() => handleFilterClick('proteinas')}>
            <p>Qtde de Proteína</p>
            <p>{selectedFilter === 'proteinas' ? '-' : '+'}</p>
            </li>
          <li className='custom-select'>
            {selectedFilter === 'proteinas' && (
            <select onChange={handleFilterChange} value={filterValue}>
                <option value="">Selecione Proteína</option>
                {[...new Set(products.map((product) => product.proteina))].map((proteina) => (
                <option key={proteina} value={proteina}>{proteina}</option>
                ))}
            </select>
            )}
          </li>
          <li className='filtro' onClick={() => handleFilterClick('sabor')}>
            <p>Sabor</p>
            <p>{selectedFilter === 'sabor' ? '-' : '+'}</p>
            </li>
          <li className='custom-select'>
            {selectedFilter === 'sabor' && (    
            <select onChange={handleFilterChange} value={filterValue}>
                <option value="">Selecione Sabor</option>
                {[...new Set(products.map((product) => product.sabor))].map((sabor) => (
                <option key={sabor} value={sabor}>{sabor}</option>
                ))}
            </select>
            )}
          </li>
        </ul>
      </div>
      <div className="catalogo-products">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.sabor} className="product-image" />
            <p className="product-description">{`${product.unidades} barrinha${product.unidades > 1 ? 's' : ''} de ${product.sabor} com ${product.proteina}g de proteína!`}</p>
            <p className="product-price">{`R$ ${product.preco.toFixed(2)}`}</p>
            <button className="product-button">Adicionar</button>
          </div>
        ))}
      </div>
      <BotaoCarrinho />
    </div>
  );
}

export default Catalogo;
