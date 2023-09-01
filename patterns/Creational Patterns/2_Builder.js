class Burger {
  constructor() {
    this.buns = null;
    this.patty = null;
    this.cheese = null;
  }

  setBuns(bunStyle) {
    this.buns = bunStyle;
  }

  setPatty(pattyStyle) {
    this.patty = pattyStyle;
  }

  setCheese(cheeseStyle) {
    this.cheese = cheeseStyle;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addBuns(bunStyle) {
    this.burger.setBuns(bunStyle);
    return this;
  }

  addPatty(pattyStyle) {
    this.burger.setPatty(pattyStyle);
    return this;
  }

  addCheese(cheeseStyle) {
    this.burger.setCheese(cheeseStyle);
    return this;
  }

  build() {
    return this.burger;
  }
}

// could combine Factory
const swissCheeseBurger = new BurgerBuilder()
  .addBuns("sesame")
  .addPatty("fish-patty")
  .addCheese("swiss cheese")
  .build();

console.log(swissCheeseBurger);
