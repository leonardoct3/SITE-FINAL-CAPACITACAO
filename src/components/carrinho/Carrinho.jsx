import './Carrinho.css';
import PropTypes from 'prop-types';
import thrashIcon from '../../assets/thrash.png';

function Carrinho({ togglePopup, toggleCart, visible, selected, removeProduct, incrementQuantity, decrementQuantity }) {

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
              <p className="product-price">{`R$ ${(product.preco * product.quantity).toFixed(2)}`}</p>
            </div>
            <button onClick={() => removeProduct(product)} className="remove-button">
              <img src={thrashIcon} alt="Remover" />
            </button>
          </li>
        ))}
      </ul>
      <h3>Insira seu CEP:</h3>
      <div className='form'>
        <input className='cep-input' type="text" placeholder='CEP'/>
        <button className='calc-button'>Calcular</button>
      </div>  
      <h3>Cupom de Desconto (Opcional)</h3>
      <div className='form'>
        <input className='cupom-input' type="text" placeholder='Cupom de Desconto' />
        <button className='calc-button'>Aplicar</button>
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
