import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import chefFoodComponent from './food.component';

import FoodService from './food.service';
import FoodFactory from './food.factory';

import ChefFoodForm from './form/form';

const chefFoodModule = angular.module('chefFood', [
  uiRouter,

  ChefFoodForm,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authenticated.chef-food', {
        url: '/chef/:id/foodrecipes/',
        views: {
          'content@authenticated': {
            component: 'chefFood',
          },
        },
      });
  })
  .component('chefFood', chefFoodComponent)
  .service('FoodService', FoodService)
  .factory('FoodFactory', FoodFactory)
  .name;

export default chefFoodModule;
