import angular from 'angular';
import navbarComponent from './navbar.component';

const navbarModule = angular.module('common.navbar', [
])
  .component('navbar', navbarComponent)
  .name;

export default navbarModule;
