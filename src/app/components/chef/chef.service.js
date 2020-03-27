import _ from 'underscore';

class ChefService {
  constructor(Restangular) {
    'ngInject';

    this.Restangular = Restangular;
    this.public = this.Restangular.one('public/chef/');
    this.service = this.Restangular.one('chef/');
    this.chefs = {};
  }

  setAddress(address) {
    const addr = `${address.street}, ${address.number} - ${address.complement || ''} - ${address.neighborhood} -
      ${address.city} - ${address.state} - ${address.country}`;
    return addr.replace(',  ', '').replace('-  -', '-').replace('-  -', '').replace('- _ -', '-');
  }

  listAllChefs() {
    return this.public.get().then((response) => {
      this.chefs = response.plain();
      _.each(this.chefs, (chef) => { chef.address_str = this.setAddress(chef.address); });
      return this.chefs;
    });
  }

  listChefs() {
    return this.service.get().then((response) => {
      this.chefs = response.plain();
      _.each(this.chefs, (chef) => { chef.address_str = this.setAddress(chef.address); });
      return this.chefs;
    });
  }

  getChef(chefId) {
    return this.service.one(`${chefId}/`).get().then(response => response.plain());
  }

  removeChef(chefId) {
    return this.service.one(`${chefId}/`).remove();
  }

  saveChef(chef) {
    chef.address.complement = chef.address.complement || '_';
    const data = {
      name: chef.name,
      description: chef.description || '_',
      email: chef.email,
      phone: chef.phone,
      cep_address: chef.address.cep,
      address: chef.address,
      open_at: `${chef.open_at.getHours()}:${chef.open_at.getMinutes()}`,
      close_at: `${chef.close_at.getHours()}:${chef.close_at.getMinutes()}`,
      days_of_weak: chef.days_of_weak,
    };
    if (chef.id) {
      return this.service.one(`${chef.id}/`).customPUT(data).then(response => response.plain());
    }
    return this.service.customPOST(data).then(response => response.plain());
  }

  listFoodRecipes(chefId) {
    return this.service.one(`${chefId}/foodrecipe/`).get().then((response) => {
      this.foodRecipes = response.plain();
      return this.foodRecipes;
    });
  }

  getFood(chefId, foodId) {
    return this.service.one(`${chefId}/foodrecipe/${foodId}/`).get().then(response => response.plain());
  }

  removeFood(chefId, foodId) {
    return this.service.one(`${chefId}/foodrecipe/${foodId}/`).remove();
  }

  saveFood(chefId, food) {
    const data = {
      name: food.name,
      description: food.description || '_',
      category: food.category,
      price: food.price,
      preparation_time: `${food.preparation_time.getHours()}:${food.preparation_time.getMinutes()}`,
    };
    if (food.id) {
      return this.service.one(`${chefId}/foodrecipe/${food.id}/`).customPUT(data).then(response => response.plain());
    }
    return this.service.one(`${chefId}/foodrecipe/`).customPOST(data).then(response => response.plain());
  }
}

export default ChefService;
