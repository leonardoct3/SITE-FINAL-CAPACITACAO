import './BotaoCarrinho.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cartImage from '../../assets/cart.png';

function BotaoCarrinho({ toggleCart }) {
  const [displayButton, setDisplayButton] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('fixedButton');
      const footer = document.getElementById('footer');

      if (button && footer) {
        const buttonRect = button.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        if (buttonRect.bottom >= footerRect.top) {
          setDisplayButton(false);
        } else {
          setDisplayButton(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="fixedButtonContainer" style={{ display: displayButton ? 'block' : 'none' }}>
      <img onClick={() => toggleCart()} id='fixedButton' className='cart' src={cartImage} alt="carrinho" />
    </div>
  );
}

BotaoCarrinho.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default BotaoCarrinho;
