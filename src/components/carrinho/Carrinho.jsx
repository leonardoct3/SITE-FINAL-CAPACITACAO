import './Carrinho.css';
import PropTypes from 'prop-types';
import thrashIcon from '../../assets/thrash.png';
import { useState } from 'react';

function Carrinho({ togglePopup, toggleCart, visible, selected, removeProduct, incrementQuantity, decrementQuantity }) {

  const [cep, setCep] = useState('');
  const [showInfos, setShowInfos] = useState(false);
  const [address, setAddress] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  const toggleInfos = () => {
    setShowInfos(!showInfos);
  }

  async function fetchAddress(cep) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
    try {
      const response = await fetch(proxyUrl + targetUrl);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const addressData = await response.json();
      console.log(addressData);
      toggleInfos();
      setAddress(addressData);
      return addressData;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  function doItAll() {
    togglePopup();
    toggleCart();
  }  

  return (
    <div className={`carrinho ${visible ? 'open' : ''}`}>
      <div className='line'>
        <h2>Carrinho de Compras</h2>
        <button onClick={() => toggleCart()} className="close-button">X</button>
      </div>
      <ul className="carrinho-products">
        {selected.map((product, index) => (
          <li key={index} className="carrinho-product">
            <img src={product.image} alt={product.description} className="cart-product-image" />
            <div className="product-details">
              <p className="product-title">{product.title}</p>
              <p className="product-sabor">{product.sabor}</p>
              <div className="product-quantity">
                <button onClick={() => decrementQuantity(product)} className="quantity-button">-</button>
                <span className="quantity">{product.quantity}</span>
                <button onClick={() => incrementQuantity(product)} className="quantity-button">+</button>
              </div>
              <p className="product-price">{`R$ ${(10 * product.quantity).toFixed(2)}`}</p>
            </div>
            <button onClick={() => removeProduct(product)} className="remove-button">
              <img src={thrashIcon} alt="Remover" />
            </button>
          </li>
        ))}
      </ul>
      <h3>Insira seu CEP*</h3>
      <div className='form'>
        <input 
          onChange={(e) => setCep(e.target.value)} 
          value={cep} 
          className='cep-input' 
          type="text" 
          placeholder='CEP'
        />
        <button onClick={() => fetchAddress(cep)} className='calc-button'>Calcular</button>
      </div>  
      
      
      <div className={'forma' + `${!showInfos ? ' none' : ''}`}>
        <h3>Endereço de Entrega</h3>
        <input className='cep-input' readOnly type="text" value={address.logradouro} />
        <input required className='cep-input' type="text" placeholder='Número*' />
        <input className='cep-input' type="text" placeholder='Complemento (se tiver)' />
        <input className='cep-input' readOnly type="text" value={address.bairro} />
        <input className='cep-input' readOnly type="text" value={address.localidade}/>
        <input className='cep-input' readOnly type="text" value={address.uf} />
      </div>
      <div className='subtotal'>
        <h3>Subtotal:</h3>
        <p className=''>R$ {selected.reduce((acc, product) => acc + (10 * product.quantity), 0).toFixed(2)}</p>
      </div>
      <button onClick={() => doItAll()} className='finalizar'>FINALIZAR PEDIDO</button>
    </div>
  );
}

Carrinho.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    sabor: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  removeProduct: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};

export default Carrinho;
