class Bigfoot {
  constructor(obj) {
    this.name = obj.name;
    this.hair = true;
    this.scent = obj.scent || 'weird';
    this.mood = 'meh';
    this.wardrobe = [];
    this.appetite = 'starving!';
    this.caloriesConsumed = 0;
  }

  makeover(hairDid, moodyMood) {
    this.hair = hairDid;
    this.mood = moodyMood;
  }

  shoppingSpree(boughtItems) {
    // for (var i = 0; i < boughtItems.length; i++) {
    // this.wardrobe.push(boughtItems[i]);
    // }
    // this.wardrobe.reverse();
    this.wardrobe = boughtItems.reverse();
  }

  munch() {
    this.caloriesConsumed += 1000;
    if (this.caloriesConsumed > 10000)
    this.appetite = 'content.';
    if (this.caloriesConsumed >= 20000)
    this.appetite = 'queasy :(';
  }

}

module.exports = Bigfoot;
