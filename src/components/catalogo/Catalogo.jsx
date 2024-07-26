// Imports: React (useState), CSS, Imagens, Componentes
import { useState } from 'react';
import './Catalogo.css';
import brownieUnica from '../../assets/barra-unica-brownie.png';
import chocolateVeganaUnica from '../../assets/barra-unica-chocolate-vegana.png';
import chocolateUnica from '../../assets/barra-unica-chocolate.png';
import cookiesAndCreamVeganaUnica from '../../assets/barra-unica-cookies-and-cream-vegana.png';
import cookiesAndCreamUnica from '../../assets/barra-unica-cookies-and-cream.png';
import doceDeLeiteUnica from '../../assets/barra-unica-doce-de-leite.png';
import browniePack from '../../assets/pack-barras-brownie.png';
import chocolateVeganasPack from '../../assets/pack-barras-chocolate-veganas.png';
import chocolatePack from '../../assets/pack-barras-chocolate.png';
import cookiesAndCreamVeganasPack from '../../assets/pack-barras-cookies-and-cream-veganas.png';
import cookiesAndCreamPack from '../../assets/pack-barras-cookies-and-cream.png';
import doceDeLeitePack from '../../assets/pack-barras-doce-de-leite.png';
import BotaoCarrinho from '../botao-carrinho/BotaoCarrinho';
import Carrinho from '../carrinho/Carrinho';
import PropTypes from 'prop-types';

// Componente: Catalogo
function Catalogo({ togglePopup, loggedIn }) {

  // Estados
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Funções manipuladoras das variáveis de estado
  const addProduct = (product) => {
    const existingProduct = selectedProducts.find(p => p.sabor === product.sabor);
    if (existingProduct) {
      setSelectedProducts(
        selectedProducts.map(p => 
          p.sabor === product.sabor ? { ...p, quantity: p.quantity + product.unidades } : p
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: product.unidades }]);
    }
  };

  const incrementQuantity = (product) => {
    setSelectedProducts(
      selectedProducts.map(p => 
        p.sabor === product.sabor ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrementQuantity = (product) => {
    setSelectedProducts(
      selectedProducts.map(p => 
        p.sabor === product.sabor && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const removeProduct = (product) => {
    setSelectedProducts(selectedProducts.filter(p => p.sabor !== product.sabor));
  };

  function toggleCart() {
    setCartVisible(!cartVisible);
    console.log(cartVisible);
  }


  // Produtos hardcoded
  const products = [
    {
      image: brownieUnica,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'brownie'
    },
    {
      image: chocolateVeganaUnica,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'chocolate vegana'
    },
    {
      image: chocolateUnica,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'chocolate'
    },
    {
      image: cookiesAndCreamVeganaUnica,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'cookies and cream vegana'
    },
    {
      image: cookiesAndCreamUnica,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'cookies and cream'
    },
    {
      image: doceDeLeiteUnica,
      unidades: 1,
      proteina: 10,
      preco: 10.00,
      sabor: 'doce de leite'
    },
    {
      image: browniePack,
      unidades: 12,
      proteina: 120,
      preco: 120.00,
      sabor: 'brownie'
    },
    {
      image: chocolateVeganasPack,
      unidades: 12,
      proteina: 120,
      preco: 120.00,
      sabor: 'chocolate veganas'
    },
    {
      image: chocolatePack,
      unidades: 12,
      proteina: 120,
      preco: 120.00,
      sabor: 'chocolate'
    },
    {
      image: cookiesAndCreamVeganasPack,
      unidades: 12,
      proteina: 120,
      preco: 120.00,
      sabor: 'cookies and cream veganas'
    },
    {
      image: cookiesAndCreamPack,
      unidades: 12,
      proteina: 120,
      preco: 120.00,
      sabor: 'cookies and cream'
    },
    {
      image: doceDeLeitePack,
      unidades: 12,
      proteina: 120,
      preco: 120.00,
      sabor: 'doce de leite'
    }
  ];

  // Funções manipuladoras dos filtros
  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
    setFilterValue('');
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Produtos filtrados
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
  
  // Renderização do componente
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
            <button onClick={() => addProduct(product)} className="product-button">Adicionar</button>
          </div>
        ))}
      </div>
      <BotaoCarrinho toggleCart={toggleCart} />
      <Carrinho 
        loggedIn={loggedIn}
        togglePopup={togglePopup}
        toggleCart={toggleCart} 
        visible={cartVisible} 
        selected={selectedProducts} 
        removeProduct={removeProduct} 
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity} 
      />
    </div>
  );
}

// Prop Types
Catalogo.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
// Exporta o componente Catalogo
export default Catalogo;
