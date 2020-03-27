import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import authenticatedComponent from './authenticated.component';

const authenticatedModule = angular.module('authenticated', [
  uiRouter,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('authenticated', {
        abstract: true,
        component: 'authenticated',
      });
  })
  .component('authenticated', authenticatedComponent)

  .name;

export default authenticatedModule;
