import { useState } from 'react';
import PropTypes from 'prop-types';
import './NovoProduto.css';

const NovoProduto = ({ addProduct, showPopup, togglePopup }) => {
  const [product, setProduct] = useState({
    image: '',
    unidades: '',
    proteina: '',
    preco: '',
    sabor: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    togglePopup();
  };

  return (
    <div className={'prod-popup' + `${showPopup ? '' : ' none'}`}>
      <div className="prod-popup-inner">
        <h2>Adicionar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Imagem:</label>
            <input 
              type="text" 
              name="image" 
              value={product.image} 
              onChange={handleChange} 
              placeholder="URL da imagem" 
              required 
            />
          </div>
          <div>
            <label>Unidades:</label>
            <input 
              type="number" 
              name="unidades" 
              value={product.unidades} 
              onChange={handleChange} 
              placeholder="Unidades" 
              required 
            />
          </div>
          <div>
            <label>Quantidade de Proteína (g):</label>
            <input 
              type="number" 
              name="proteina" 
              value={product.proteina} 
              onChange={handleChange} 
              placeholder="Quantidade de Proteína" 
              required 
            />
          </div>
          <div>
            <label>Sabor:</label>
            <input 
              type="text" 
              name="sabor" 
              value={product.sabor} 
              onChange={handleChange} 
              placeholder="Sabor" 
              required 
            />
          </div>
          <div>
            <label>Preço:</label>
            <input 
              type="number" 
              name="preco" 
              value={product.preco} 
              onChange={handleChange} 
              placeholder="Preço" 
              required 
            />
          </div>
          <div>
            <label>Estoque:</label>
            <input 
              type="number" 
              name="quantity" 
              value={product.quantity} 
              onChange={handleChange} 
              placeholder="Quantidade em Estoque" 
              required 
            />
          </div>
          <button type="submit">Adicionar Produto</button>
          <button type="button" onClick={togglePopup}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

NovoProduto.propTypes = {
  addProduct: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired
};

export default NovoProduto;
