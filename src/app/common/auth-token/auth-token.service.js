class AuthTokenService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
  }

  authToken(email, password) {
    return this.Restangular.one('token/').customPOST({ email, password }).then((response) => {
      this.Restangular.setDefaultHeaders({ Authorization: `Bearer ${response.access}` });
      // eslint-disable-next-line no-undef
      localStorage.setItem('app_token', response.access);
      return response;
    });
  }

  revokeToken() {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('app_token');
  }
}

export default AuthTokenService;
