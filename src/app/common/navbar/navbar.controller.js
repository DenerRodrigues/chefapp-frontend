class NavbarController {
  constructor($rootScope, $state, AuthTokenService, envService) {
    'ngInject';

    this.name = 'navbar';

    this.$rootScope = $rootScope;
    this.$state = $state;
    this.theme = this.$rootScope.theme;
    this.AuthTokenService = AuthTokenService;
    this.apiUrl = envService.read('apiUrl');
  }

  logout() {
    this.AuthTokenService.revokeToken();
    this.$state.go('guest.login');
  }
}

export default NavbarController;
