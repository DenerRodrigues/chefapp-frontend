class ProfileController {
  constructor(UserService) {
    'ngInject';

    this.name = 'profile';

    this.UserService = UserService;
    this.showChangePasswordForm = false;
  }

  $onInit() {
    this.UserService.getInfo().then(() => {
      this.user = this.UserService.user;
    });
  }

  saveProfile() {
    this.UserService.update(this.user).then(() => {
      this.user = this.UserService.user;
      this.message = {
        type: 'is-success',
        text: 'Updated Profile',
      };
    }, (reject) => {
      this.message = {
        type: 'is-danger',
        text: reject.data.result,
      };
    });
  }

  getAddressByCep() {
    console.log(this.user.address.cep)

    if (this.user.address.cep) {
      this.UserService.getAddressByCep(this.user.address.cep).then((response) => {
        this.user.address = response;
        console.log(response)
      });
    }
  }
}

export default ProfileController;
