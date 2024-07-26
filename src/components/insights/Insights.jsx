import { Card, CardContent, Typography } from '@mui/material';
import './Insights.css';
import PropTypes from 'prop-types';

const Insights = ({ products }) => {
    


  const totalUnits = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = products.reduce((acc, product) => acc + product.preco * product.unidades * product.quantity, 0);
  
  const veganUnits = products.reduce((acc, product) => {
    if (product.sabor.includes('veganas')) {
      return acc + product.quantity;
    }
    return acc;
  }
  , 0);


  return (
    <div className="insights-container">
      <Card className="insight-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Total de Barrinhas em Estoque
          </Typography>
          <Typography variant="body2">
          {totalUnits + ' barrinhas'}
          </Typography>
        </CardContent>
      </Card>
      <Card className="insight-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Total de Barrinhas Veganas
          </Typography>
          <Typography variant="body2">
            {veganUnits + ' barrinhas veganas'}
          </Typography>
        </CardContent>
      </Card>
      <Card className="insight-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Valor Total de Barrinhas em Estoque
          </Typography>
          <Typography>
            {'R$ '+totalPrice.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Insights.propTypes = {
  products: PropTypes.array.isRequired
};

export default Insights;
