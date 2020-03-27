import angular from 'angular';

import Env from './environment';
import Api from './api/api';
import AuthToken from './auth-token/auth-token';
import User from './user/user';

import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

const commonModule = angular.module('app.common', [
  Env,
  Api,
  AuthToken,
  User,

  Navbar,
  Sidebar,
  Footer,
])
  .name;

export default commonModule;
