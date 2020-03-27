class ChefFoodController {
  constructor($stateParams, ChefService, FoodFactory) {
    'ngInject';

    this.name = 'chef-food';

    this.$stateParams = $stateParams;

    this.ChefService = ChefService;
    this.FoodFactory = FoodFactory;

    this.CATEGORIES = this.FoodFactory.CATEGORIES;

    this.search = '';
    this.showForm = false;
    this.showForm = false;

    this.chefId = this.$stateParams.id;
  }

  $onInit() {
    this.ChefService.getChef(this.chefId).then((response) => {
      this.chef = response;
    });
    this.ChefService.listFoodRecipes(this.chefId).then((response) => {
      this.foodRecipes = response;
      this.hasFood = this.foodRecipes.length > 0;
    });
  }
}

export default ChefFoodController;
