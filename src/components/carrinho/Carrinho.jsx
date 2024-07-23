import './Carrinho.css';

function Carrinho( cartOpen , products ) {
   
  return (
    <div className={`carrinho ${cartOpen ? 'open' : ''}`}>
      <h2>Carrinho de Compras</h2>
      <ul className="carrinho-products">
        {products.map((product, index) => (
          <li key={index} className="carrinho-product">
            <img src={product.image} alt={product.description} className="product-image" />
            <div className="product-details">
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;
