import _ from 'underscore';

class FoodService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
    this.public = this.Restangular.one('public/foodrecipe/');
    this.foodrecipes = {};
  }

  setAddress(address) {
    const addr = `${address.street}, ${address.number} - ${address.complement || ''} - ${address.neighborhood} -
      ${address.city} - ${address.state} - ${address.country}`;
    return addr.replace(',  ', '').replace('-  -', '-').replace('-  -', '').replace('- _ -', '-');
  }

  listAllFoodRecpies(category, chef_id) {
    return this.public.get({ category, chef_id }).then((response) => {
      this.foodrecipes = response.plain();
      _.each(this.foodrecipes, (food) => { food.chef.address_str = this.setAddress(food.chef.address); });
      return this.foodrecipes;
    });
  }

  listAllCategories() {
    return this.public.one('category/').get().then(response => response.plain());
  }
}

export default FoodService;
