import './Popup.css';
import PropTypes from 'prop-types';

const Popup = ({ showPopup }) => {
    const popup = document.querySelector('.popup');
    const handleClick = () => {
        popup.classList.add('hidden');
    }
    
    return (
        <div className={`popup ${showPopup ? '' : 'hidden'}`}>
            <h2>Obrigado pela sua compra!</h2>
            <p>Aproveite cada mordida!</p>
            <button onClick={handleClick} className="back-button">Fechar</button>
        </div>
    );
};

Popup.propTypes = {
    showPopup: PropTypes.bool.isRequired,
};

export default Popup;