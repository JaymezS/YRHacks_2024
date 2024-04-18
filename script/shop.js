class Shop {
  shopList;
  shopDisplayElement;
  type;
  constructor(type) {
    this.shopList = [];
    this.type = type;
  }

  setShopDisplayElement(element) {
    this.shopDisplayElement = element;
  }

  addItem(shop) {
    this.shopList.push(shop);
  }

  displayAll() {
    this.shopDisplayElement.innerHTML = "";
    for (let i = 0; i < this.shopList.length; i++) {
      const ITEM = this.shopList[i];
      if (this.type === "bunnies") {
        this.shopDisplayElement.appendChild(ITEM.createItemHTML(100, 100));
      } else if (this.type === "background") {
        this.shopDisplayElement.appendChild(ITEM.createItemHTML(160, 90));
      }
    }
  }

  removeItemByIndex(id) {
    for (let i = 0; i < this.shopList.length; i++) {
      const ITEM = this.shopList[i];
      if (ITEM.id === id) {
        delete this.shopList[i];
      }
    }
  }
}