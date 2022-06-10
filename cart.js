"use strict"

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,



  getTotalPrice() {
    this.totalPrice;
  },
  add(productName, priceName, countName) {
    this.items.push({
      productName,
      priceName,
      countName,
    });
    this.increaseCount();
    this.calculateItemPrice();
  },
  calculateItemPrice() {
    this.totalPrice += (this.items[this.items.length-1].priceName * this.items[this.items.length-1].countName);
  },
  increaseCount() {
    this.count += this.items[this.items.length-1].countName;
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
cart.print();
cart.clear();
cart.print();
