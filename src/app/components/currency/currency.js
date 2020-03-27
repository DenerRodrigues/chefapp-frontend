import angular from 'angular';
import currencyComponent from './currency.component';

const currencyModule = angular.module('currency', [])
  .component('currency', currencyComponent)
  .name;

export default currencyModule;
