class ChefController {
  constructor(ChefService, ChefFactory) {
    'ngInject';

    this.name = 'chef';

    this.ChefService = ChefService;
    this.ChefFactory = ChefFactory;

    this.DAYS_OF_WEAK = this.ChefFactory.DAYS_OF_WEAK;

    this.Object = Object;
    this.search = '';
    this.showForm = false;
  }

  $onInit() {
    this.ChefService.listChefs().then((response) => {
      this.chefs = response;
      this.hasChef = !!this.chefs;
    });
  }
}

export default ChefController;
