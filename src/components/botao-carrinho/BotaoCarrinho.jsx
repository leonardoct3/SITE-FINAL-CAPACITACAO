import './BotaoCarrinho.css';

import cartImage from '../../assets/cart.png';

function BotaoCarrinho() {
  return (
    <img id='fixedButton' className='cart' src={cartImage} alt="carrinho" />
  );
}

export default BotaoCarrinho;
