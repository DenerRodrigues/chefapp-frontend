import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import chefComponent from './chef.component';
import ChefService from './chef.service';
import ChefFactory from './chef.factory';

import ChefForm from './form/form';
import ChefFood from './food/food';

const chefModule = angular.module('chef', [
  uiRouter,

  ChefForm,
  ChefFood,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authenticated.chef', {
        url: '/chef/',
        views: {
          'content@authenticated': {
            component: 'chef',
          },
        },
      });
  })
  .component('chef', chefComponent)
  .service('ChefService', ChefService)
  .factory('ChefFactory', ChefFactory)
  .name;

export default chefModule;
