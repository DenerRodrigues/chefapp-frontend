import angular from 'angular';

import Guest from './guest/guest';
import SignUp from './signup/signup';
import Login from './login/login';

import Authenticated from './authenticated/authenticated';

import Profile from './profile/profile';

import Food from './food/food';
import Chef from './chef/chef';

import Currency from './currency/currency';

const viewsModule = angular.module('app.components', [
  Guest,
  SignUp,
  Login,

  Authenticated,

  Profile,

  Food,
  Chef,

  Currency,
])
  .name;

export default viewsModule;
