import angular from 'angular';
import sideBarComponent from './sidebar.component';

const SideBarModule = angular.module('common.sidebar', [
])
  .component('sidebar', sideBarComponent)
  .name;

export default SideBarModule;
