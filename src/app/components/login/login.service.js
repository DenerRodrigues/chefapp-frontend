export default function LoginService(AuthTokenService) {
  'ngInject';

  function signIn(email, password) {
    return AuthTokenService.authToken(email, password);
  }

  return {
    signIn,
  };
}
