import angular from 'angular';

import chefFormComponent from './form.component';

const chefFormModule = angular.module('chefForm', [])
  .component('chefForm', chefFormComponent)
  .name;

export default chefFormModule;
