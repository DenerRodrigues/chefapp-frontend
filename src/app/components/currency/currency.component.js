import template from './currency.html';
import controller from './currency.controller';
import './currency.scss';

export default {
  bindings: {
    value: '=',
    code: '=',
    decimalPlaces: '=',
  },
  template,
  controller,
};
