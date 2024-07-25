import Header from './components/header/Header';
import './Operacoes.css';
import brownieImage from './assets/brownie-isolated-white-background.jpg';
import strawberryImage from './assets/protein-bar-strawberry.png';
import cookiesImage from './assets/protein-bar-cookies&cream.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import NovoProduto from './components/novoProduto/NovoProduto';

const Operacoes = ({ loggedIn, unLog }) => {
    // Your code here
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    const [products, setProducts] = useState([
        {
          image: brownieImage,
          unidades: 1,
          proteina: 10,
          preco: 10.00,
          sabor: 'chocolate',
          quantity: 1
        },
        {
          image: strawberryImage,
          unidades: 12,
          proteina: 10,
          preco: 120.00,
          sabor: 'morango',
          quantity: 1
        },
        {
          image: cookiesImage,
          unidades: 36,
          proteina: 10,
          preco: 360.00,
          sabor: 'cookies&cream',
            quantity: 1
        },
        {
          image: strawberryImage,
          unidades: 1,
          proteina: 10,
          preco: 10.00,
          sabor: 'morango',
            quantity: 1
        },
        {
          image: brownieImage,
          unidades: 12,
          proteina: 10,
          preco: 120.00,
          sabor: 'chocolate',
            quantity: 1
        },
        {
          image: brownieImage,
          unidades: 36,
          proteina: 10,
          preco: 360.00,
          sabor: 'chocolate',
            quantity: 1
        },
        {
          image: cookiesImage,
          unidades: 1,
          proteina: 10,
          preco: 10.00,
          sabor: 'cookies&cream',
            quantity: 1
        },
        {
          image: cookiesImage,
          unidades: 12,
          proteina: 10,
          preco: 120.00,
          sabor: 'cookies&cream',
          quantity: 1
        },
        {
          image: strawberryImage,
          unidades: 36,
          proteina: 10,
          preco: 360.00,
          sabor: 'morango',
            quantity: 1
        }
      ]);

      const incrementQuantity = (product) => {
        setProducts(products.map((p) => {
            if (p.sabor === product.sabor && p.unidades === product.unidades) {
                return {
                    ...p,
                    quantity: p.quantity + 1
                };
                }
                return p;
            }))
      };
    
      const decrementQuantity = (product) => {
        setProducts(products.map((p) => {
            if (p.sabor === product.sabor && p.quantity > 0 && p.unidades === product.unidades) {
                return {
                    ...p,
                    quantity: p.quantity - 1
                };
            }
            return p;
        }))
      };

      const addProduct = (product) => {
        setProducts([...products, product
        ]);
      };

    return (
        <div>
            <Header loggedIn={loggedIn} unLog={unLog} />
            <div className='big-container'>
            <div className='title-content'>
                <h2 className='title'>Controle de estoque</h2>
            </div>
            <div className='small-container'>
                <div className='gap'>
                
                <button onClick={togglePopup} className='button-add'>+ Novo Produto</button>
                <p>{`${products.length} produtos`}</p>
                </div>
            <div className="catalogo-products">
                {products.map((product, index) => (
                  console.log(product),
                <div key={index} className="produto-card">
                    <img src={product.image} alt={product.sabor} className="imagem-produto" />
                    <p className="product-description">{`${product.unidades > 1 ? 'Pacote com ' : ''}${product.unidades > 1 ? product.unidades : `${product.unidades} unidade de`} barrinha${product.unidades > 1 ? 's' : ''} de ${product.sabor.toUpperCase()}, com ${product.proteina}g de proteína${product.unidades > 1 ? ' cada.' : '.'}`}</p>
                    <button onClick={() => decrementQuantity(product)} className="quantity-button">-</button>
                        <span className="quantity">{product.quantity}</span>
                    <button onClick={() => incrementQuantity(product)} className="quantity-button">+</button>
                </div>
                ))}
            </div>
            </div>
            </div>
            <div className='save-container'>
                <button className='button-save'>SALVAR</button>
            </div>
            <NovoProduto showPopup={showPopup} togglePopup={togglePopup} addProduct={addProduct} />
        </div>
    );
};



Operacoes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  unLog: PropTypes.func.isRequired
};

export default Operacoes;