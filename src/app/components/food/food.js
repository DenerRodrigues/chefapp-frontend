import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import foodComponent from './food.component';

const foodModule = angular.module('food', [
  uiRouter,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authenticated.food', {
        url: '/',
        views: {
          'content@authenticated': {
            component: 'food',
          },
        },
      });
  })
  .component('food', foodComponent)
  .name;

export default foodModule;
