class Shop {
  shopList;
  shopDisplayElement;
  constructor() {
    this.shopList = [];
  }

  setShopDisplayElement(element) {
    this.shopDisplayElement = element;
  }

  addItem(shop) {
    this.shopList.push(shop) 
  }

  displayAll() {
    this.shopDisplayElement.innerHTML = "";
    for (let i = 0; i < this.shopList.length; i++) {
      const ITEM = this.shopList[i];
      this.shopDisplayElement.appendChild(ITEM.createItemHTML())
    }
  }

  removeItemByIndex(id) {
    for (let i = 0; i < this.shopList.length; i++) {
      const ITEM = this.shopList[i]
      if (ITEM.id === id) {
        delete this.shopList[i]
      }
    }
  }
}