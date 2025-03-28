// Este é um exemplo de como você pode interagir com uma API para recuperar produtos
// Aqui usamos mock data, mas o código pode ser adaptado para uma API real

export const getProducts = () => {
    return [
      { id: 1, name: 'Caderno Santa Terezinha', price: 69.00, imageUrl: '/assets/images/caderno.jpg' },
      { id: 2, name: 'Caderno Universitário', price: 45.00, imageUrl: '/assets/images/caderno.jpg' },
      { id: 3, name: 'Caneta Esferográfica', price: 2.50, imageUrl: '/assets/images/caderno.jpg' },
      // Outros produtos
    ];
  };
  