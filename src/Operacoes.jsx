import Header from './components/header/Header';
import './Operacoes.css';
import brownieUnica from './assets/barra-unica-brownie.png';
import chocolateVeganaUnica from './assets/barra-unica-chocolate-vegana.png';
import chocolateUnica from './assets/barra-unica-chocolate.png';
import cookiesAndCreamVeganaUnica from './assets/barra-unica-cookies-and-cream-vegana.png';
import cookiesAndCreamUnica from './assets/barra-unica-cookies-and-cream.png';
import doceDeLeiteUnica from './assets/barra-unica-doce-de-leite.png';
import browniePack from './assets/pack-barras-brownie.png';
import chocolateVeganasPack from './assets/pack-barras-chocolate-veganas.png';
import chocolatePack from './assets/pack-barras-chocolate.png';
import cookiesAndCreamVeganasPack from './assets/pack-barras-cookies-and-cream-veganas.png';
import cookiesAndCreamPack from './assets/pack-barras-cookies-and-cream.png';
import doceDeLeitePack from './assets/pack-barras-doce-de-leite.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import NovoProduto from './components/novoProduto/NovoProduto';
import Insights from './components/insights/Insights';
import Footer from './components/footer/Footer';

const Operacoes = ({ loggedIn, unLog }) => {
    // Your code here
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    const [products, setProducts] = useState([
      {
        image: brownieUnica,
        unidades: 1,
        proteina: 10,
        preco: 10.00,
        sabor: 'brownie',
        quantity: 15
      },
      {
        image: chocolateVeganaUnica,
        unidades: 1,
        proteina: 10,
        preco: 10.00,
        sabor: 'chocolate vegana',
        quantity: 20
      },
      {
        image: chocolateUnica,
        unidades: 1,
        proteina: 10,
        preco: 10.00,
        sabor: 'chocolate',
        quantity: 25
      },
      {
        image: cookiesAndCreamVeganaUnica,
        unidades: 1,
        proteina: 10,
        preco: 10.00,
        sabor: 'cookies and cream veganas',
        quantity: 30
      },
      {
        image: cookiesAndCreamUnica,
        unidades: 1,
        proteina: 10,
        preco: 10.00,
        sabor: 'cookies and cream',
        quantity: 35
      },
      {
        image: doceDeLeiteUnica,
        unidades: 1,
        proteina: 10,
        preco: 10.00,
        sabor: 'doce de leite',
        quantity: 40
      },
      {
        image: browniePack,
        unidades: 12,
        proteina: 120,
        preco: 100.00,
        sabor: 'brownie',
        quantity: 10
      },
      {
        image: chocolateVeganasPack,
        unidades: 12,
        proteina: 120,
        preco: 100.00,
        sabor: 'chocolate vegana',
        quantity: 8
      },
      {
        image: chocolatePack,
        unidades: 12,
        proteina: 120,
        preco: 100.00,
        sabor: 'chocolate',
        quantity: 12
      },
      {
        image: cookiesAndCreamVeganasPack,
        unidades: 12,
        proteina: 120,
        preco: 100.00,
        sabor: 'cookies and cream veganas',
        quantity: 9
      },
      {
        image: cookiesAndCreamPack,
        unidades: 12,
        proteina: 120,
        preco: 100.00,
        sabor: 'cookies and cream',
        quantity: 7
      },
      {
        image: doceDeLeitePack,
        unidades: 12,
        proteina: 120,
        preco: 100.00,
        sabor: 'doce de leite',
        quantity: 5
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
            <Insights products={products} />
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
            <Footer />
        </div>
    );
};



Operacoes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  unLog: PropTypes.func.isRequired
};

export default Operacoes;