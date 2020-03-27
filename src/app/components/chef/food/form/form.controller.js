import angular from 'angular';

class ChefFoodFormController {
  constructor($state, $stateParams, ChefService, FoodFactory) {
    'ngInject';

    this.name = 'chef-food-form';

    this.$state = $state;
    this.$stateParams = $stateParams;

    this.ChefService = ChefService;
    this.FoodFactory = FoodFactory;

    this.CATEGORIES = this.FoodFactory.CATEGORIES;

    this.chefId = this.$stateParams.id;
  }

  $onInit() {
    if (this.foodSelected) {
      this.food = angular.copy(this.foodSelected);
      this.food.preparation_time = new Date(0, 0, 0, this.food.preparation_time.split(':')[0], this.food.preparation_time.split(':')[1]);
    } else {
      this.food = {
        name: '',
        description: '',
        category: '',
        price: 0.0,
        preparation_time: new Date(0, 0, 0, 0, 30),
      };
    }
  }

  saveFood() {
    this.ChefService.saveFood(this.chefId, this.food).then(() => {
      this.$state.reload();
    }, (reject) => {
      this.message = {
        text: reject.data,
        type: 'is-danger',
      };
    });
  }

  removeFood() {
    this.ChefService.removeFood(this.chefId, this.food.id).then(() => {
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

export default ChefFoodFormController;
