class SidebarController {
  constructor($scope, $state, $stateParams) {
    'ngInject';

    this.name = 'sidebar';

    this.$scope = $scope;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.$scope.$watch(() => this.$state.current.name, () => {
      this.stateName = this.$state.current.name;
    });
  }
}

export default SidebarController;
