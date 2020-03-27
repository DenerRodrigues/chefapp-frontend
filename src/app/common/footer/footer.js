import angular from 'angular';
import footerComponent from './footer.component';

const footerModule = angular.module('common.footer', [
])
  .component('ffooter', footerComponent)
  .name;

export default footerModule;
