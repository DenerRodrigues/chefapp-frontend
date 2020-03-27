class FoodController {
  constructor(FoodService, FoodFactory, ChefService, ChefFactory) {
    'ngInject';

    this.name = 'food';

    this.FoodService = FoodService;
    this.FoodFactory = FoodFactory;
    this.ChefService = ChefService;
    this.ChefFactory = ChefFactory;

    this.CATEGORIES = this.FoodFactory.CATEGORIES;
    this.DAYS_OF_WEAK = this.ChefFactory.DAYS_OF_WEAK;

    this.search = '';
  }

  $onInit() {
    this.listAllFoodRecpies();
    this.ChefService.listAllChefs().then((response) => { this.chefs = response; });
  }

  listAllFoodRecpies(category = '', chef_id = '') {
    this.FoodService.listAllFoodRecpies(category, chef_id).then((response) => {
      this.foodRecipes = response;
    });
  }
}

export default FoodController;
