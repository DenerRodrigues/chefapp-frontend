import angular from 'angular';

import chefFoodFormComponent from './form.component';

const chefFoodFormModule = angular.module('chefFoodForm', [])
  .component('chefFoodForm', chefFoodFormComponent)
  .name;

export default chefFoodFormModule;
