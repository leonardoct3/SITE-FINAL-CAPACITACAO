import { Card, CardContent, Typography } from '@mui/material';
import brownieImage from '../../assets/brownie-isolated-white-background.jpg';
import strawberryImage from '../../assets/protein-bar-strawberry.png';
import cookiesImage from '../../assets/protein-bar-cookies&cream.png';
import './Insights.css';

const Insights = () => {
    const products = [
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
      ];


  const totalUnits = products.reduce((acc, product) => acc + product.unidades, 0);
  

  const flavors = products.reduce((acc, product) => {
    acc[product.sabor] = (acc[product.sabor] || 0) + 1;
    return acc;
  }, {});
  const mostFrequentFlavor = Object.keys(flavors).reduce((a, b) => flavors[a] > flavors[b] ? a : b);

  const priceByFlavor = products.reduce((acc, product) => {
    acc[product.sabor] = (acc[product.sabor] || 0) + product.preco;
    return acc;
  }, {});

  return (
    <div className="insights-container">
      <Card className="insight-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Total de Barrinhas em Estoque
          </Typography>
          <Typography variant="body2">
            {totalUnits} unidades
          </Typography>
        </CardContent>
      </Card>
      <Card className="insight-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Sabor de Barrinha Mais Frequente
          </Typography>
          <Typography variant="body2">
            {mostFrequentFlavor} ({flavors[mostFrequentFlavor]} vezes)
          </Typography>
        </CardContent>
      </Card>
      <Card className="insight-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Preço Total por Sabor
          </Typography>
          {Object.keys(priceByFlavor).map((flavor) => (
            <Typography key={flavor} variant="body2">
              {flavor}: R${priceByFlavor[flavor].toFixed(2)}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;
