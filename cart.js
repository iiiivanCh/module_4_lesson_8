"use strict"

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    this.totalPrice;
  },
  add(product, price, count) {
    this.items.push({
      product,
      price,
      count,
    });
    this.increaseCount();
    this.calculateItemPrice();
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, {price, count}) => sum + (price * count), 0);
  },
  increaseCount() {
    this.count = this.items.reduce((sum, {count}) => sum + count, 0);
  },
  print() {
    const basket = JSON.stringify(this.items);
    console.log(basket + '\n' + this.totalPrice);
  },
  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
};
cart.add("сапоги", 5000, 15);
cart.add("пальто", 5000, 10);
cart.add("шапка", 5000, 1);
cart.add("рубашка", 5000, 100);
cart.add("штаны", 5000, 20);
cart.add("портянки", 5000, 100);
cart.print();
cart.clear();
cart.print();