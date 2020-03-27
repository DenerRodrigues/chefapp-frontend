export default function SignUpService(Restangular) {
  'ngInject';

  function signUp(full_name, email, password, phone, cep_address) {
    const user = {
      full_name,
      email,
      password,
      phone,
      cep_address,
    };
    return Restangular.one('signup/').customPOST(user).then((response) => {
      this.user = response;
      return this.user;
    });
  }

  return {
    signUp,
  };
}
