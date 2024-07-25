import { useState } from 'react';
import './B2B.css'; // Arquivo de estilos para o componente

const B2b = () => {
  // Estados para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário
    console.log(formData); // Exemplo: enviar para um backend ou API
    // Resetar o formulário após o envio (opcional)
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="b2b-container">
      <div className="b2b-description">
        <h2 className='b2b-title'>Conectando Negócios, Transformando Oportunidades</h2>
        <p className='b2b-text'>
          Se você tem interesse em fazer negócios conosco, preencha este formulário e faça parte dessa família!
          Descubra como podemos colaborar para transformar seu potencial em realidade e levar sua empresa a novos patamares de sucesso.
          Juntos, podemos alcançar grandes resultados!
        </p>
      </div>
      <div className="b2b-form">
        
        <form onSubmit={handleSubmit}>
          <div className='linha'>
              <input
              placeholder='Nome da Empresa'
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              />

              <input
              placeholder='Nome do Contato'
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              />
          </div>
          <div className='linha'>
              <input
              placeholder='E-mail'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              />

              <input
              placeholder='Telefone'
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              />
          </div>
          <textarea
              placeholder='Mensagem'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default B2b;
