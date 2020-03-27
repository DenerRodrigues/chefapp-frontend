class UserService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
    this.service = this.Restangular.one('account/');
    this.user = {};
  }

  setAddress() {
    if (this.user.address) {
      const addr = this.user.address;
      this.user.cep_address = addr.cep;
      this.user.str_address = `${addr.street}, ${addr.number} - ${addr.complement || ''} - ${addr.neighborhood} -
      ${addr.city} - ${addr.state} - ${addr.country}`.replace(',  ', '').replace('-  -', '-').replace('-  -', '').replace('- _ -', '-');
    }
  }

  getInfo() {
    return this.service.one('info/').get().then((response) => {
      this.user = response.plain();
      this.setAddress();
      return this.user;
    });
  }

  update(user) {
    user.address.complement = user.address.complement || '_';
    const data = {
      full_name: user.full_name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    };
    return this.service.one('info/').customPUT(data).then((response) => {
      this.user = response.plain();
      this.setAddress();
      return this.user;
    });
  }

  changePassword(current_password, new_password) {
    const data = {
      current_password,
      new_password,
    };
    return this.service.one('change_password/').customPUT(data);
  }

  inactiveAccount() {
    return this.service.remove();
  }

  getAddressByCep(cep) {
    return this.Restangular.one(`address/${cep.replace('-', '')}/`).get().then((response) => {
      return response.plain();
    });
  }
}

export default UserService;
