import angular from 'angular';

class ChefFormController {
  constructor($state, ChefService, ChefFactory) {
    'ngInject';

    this.name = 'chef-form';

    this.$state = $state;

    this.ChefService = ChefService;
    this.ChefFactory = ChefFactory;

    this.DAYS_OF_WEAK = this.ChefFactory.DAYS_OF_WEAK;
  }

  $onInit() {
    if (this.chefSelected) {
      this.chef = angular.copy(this.chefSelected);
      this.chef.open_at = new Date(0, 0, 0, this.chef.open_at.split(':')[0], this.chef.open_at.split(':')[1]);
      this.chef.close_at = new Date(0, 0, 0, this.chef.close_at.split(':')[0], this.chef.close_at.split(':')[1]);
    } else {
      this.chef = {
        name: '',
        description: '',
        open_at: new Date(0, 0, 0, 10),
        close_at: new Date(0, 0, 0, 22),
        email: '',
        phone: '',
      };
    }
  }

  saveChef() {
    this.ChefService.saveChef(this.chef).then(() => {
      this.$state.reload();
    }, (reject) => {
      this.message = {
        text: reject.data,
        type: 'is-danger',
      };
    });
  }

  removeChef() {
    this.ChefService.removeChef(this.chef.id).then(() => {
      this.$state.reload();
    }, (reject) => {
      this.message = {
        text: reject.data,
        type: 'is-danger',
      };
    });
  }

  back() {
    this.$state.reload();
  }
}

export default ChefFormController;
