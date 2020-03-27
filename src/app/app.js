import angular from 'angular';

import ngUiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize';

import 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import 'angular-input-masks';

import Common from './common/common';
import Components from './components/components';

import AppComponent from './app.component';

function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (Number.isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+`${value[0]}e${value[1] ? (+value[1] - exp) : -exp}`);
  // Shift back
  value = value.toString().split('e');
  return +`${value[0]}e${value[1] ? (+value[1] + exp) : exp}`;
}

// Decimal round
if (!Math.round10) {
  Math.round10 = (value, exp) => decimalAdjust('round', value, exp);
}
// Decimal floor
if (!Math.floor10) {
  Math.floor10 = (value, exp) => decimalAdjust('floor', value, exp);
}
// Decimal ceil
if (!Math.ceil10) {
  Math.ceil10 = (value, exp) => decimalAdjust('ceil', value, exp);
}

angular.module('ChefApp', [
  ngUiRouter,
  ngSanitize,

  Common,
  Components,

  'ui.utils.masks',
])
  .config(($locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('!');
  })
  .run(($rootScope) => {
    'ngInject';

    $rootScope.theme = 'theme-clean';
  })
  .component('app', AppComponent)
  .filter('floor', () => (value, decimalPlaces) => {
    if (value < 0) {
      return Math.ceil10(value, -decimalPlaces);
    }
    return Math.floor10(value, -decimalPlaces);
  });
