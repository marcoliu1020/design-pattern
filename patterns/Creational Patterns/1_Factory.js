class Burger {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  print() {
    console.log(this.ingredients);
  }
}

class BurgerFactory {
  createCheeseBurger() {
    let ingredients = ["bun", "cheese", "beef-patty"];
    return new Burger(ingredients);
  }

  createDeluxeCheeseBurger() {
    let ingredients = ["bun", "tomatoe", "lettuce", "cheese", "beef-patty"];
    return new Burger(ingredients);
  }

  createVeganBurger() {
    let ingredients = ["bun", "special-sauce", "veggie-patty"];
    return new Burger(ingredients);
  }
}

const burgerFactory = new BurgerFactory();
burgerFactory.createCheeseBurger().print();
burgerFactory.createDeluxeCheeseBurger().print();
burgerFactory.createVeganBurger().print();
