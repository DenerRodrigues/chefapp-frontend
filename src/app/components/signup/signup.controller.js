class SignupController {
  constructor(SignUpService) {
    'ngInject';

    this.name = 'login';

    this.SignUpService = SignUpService;
    this.initForm();
  }

  initForm() {
    this.user = {
      full_name: '',
      email: '',
      password: '',
      phone: '',
      cep_address: '',
    };
  }

  signup() {
    this.SignUpService.signUp(this.user.full_name, this.user.email, this.user.password, this.user.phone, this.user.cep_address).then(() => {
      this.initForm();
      this.message = {
        type: 'is-success',
        text: 'Usuário registrado com sucesso',
      };
    }, (reject) => {
      if (reject.data) {
        this.message = {
          type: 'is-danger',
          text: reject.data.result,
        };
      } else {
        this.message = {
          type: 'is-danger',
          text: reject,
        };
      }
    });
  }
}

export default SignupController;
