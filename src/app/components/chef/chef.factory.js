const ChefFactory = () => {
  'ngInject';

  const DAYS_OF_WEAK = [
    { id: 'MONDAY', value: 'Segunda-Feira' },
    { id: 'TUESDAY', value: 'Terça-Feira' },
    { id: 'WEDNESDAY', value: 'Quarta-Feira' },
    { id: 'THURSDAY', value: 'Quinta-Feira' },
    { id: 'FRIDAY', value: 'Sexta-Feira' },
    { id: 'SATURDAY', value: 'Sábado' },
    { id: 'SUNDAY', value: 'Domingo' },
  ];

  return { DAYS_OF_WEAK };
};

export default ChefFactory;
