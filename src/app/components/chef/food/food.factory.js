const FoodFactory = () => {
  'ngInject';

  const CATEGORIES = [
    { id: 'OTHERS', value: 'Outros' },
    { id: 'BRAZILIAN', value: 'Brasileira' },
    { id: 'ARABIC', value: 'Árabe' },
    { id: 'ASIAN', value: 'Asiática' },
    { id: 'MEXICAN', value: 'Mexicana' },
    { id: 'ITALIAN', value: 'Italiana' },
    { id: 'SCNACK', value: 'Lanche' },
    { id: 'PACKED_LUNCH', value: 'Marmita' },
    { id: 'MEAT', value: 'Carne' },
    { id: 'PIZZA', value: 'Pizza' },
    { id: 'PASTA', value: 'Maça' },
    { id: 'FIT', value: 'Fit' },
    { id: 'VEGETARIAN', value: 'Vegetariana' },
    { id: 'VEGAN', value: 'Vegana' },
    { id: 'DRINK', value: 'Bebidas' },
  ];

  return { CATEGORIES };
};

export default FoodFactory;
