import template from './form.html';
import controller from './form.controller';
import './form.scss';

export default {
  bindings: {
    showForm: '=',
    chefSelected: '=',
  },
  template,
  controller,
};
