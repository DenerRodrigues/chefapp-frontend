class LoginController {
  constructor($state, LoginService, AuthTokenService) {
    'ngInject';

    this.name = 'login';

    this.$state = $state;
    this.LoginService = LoginService;
    this.AuthTokenService = AuthTokenService;
  }

  $onInit() {
    this.AuthTokenService.revokeToken();
  }

  login() {
    let service = this.LoginService.signIn(this.email, this.password);
    service.then((res) => {
      console.log('response', res);
      this.$state.go('authenticated.food');
    }, (reject) => {
      this.AuthTokenService.revokeToken();
      console.log('reject', reject);
      if (reject.status === -1) {
        this.message = {
          type: 'is-danger',
          text: 'The API has gonna away',
        };
      } else if (reject.status === 401) {
        this.message = {
          type: 'is-danger',
          text: 'E-mail or Password Error',
        };
      }
    });
  }
}

export default LoginController;
