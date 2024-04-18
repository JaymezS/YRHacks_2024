class shopItem {
  constructor(imageSrc, id) {
    this.imageSrc = imageSrc
    this.id = id
    this.HTML_CONTAINER;
  }

  createItemHTML() {
    this.HTML_CONTAINER = document.createElement("div");
    this.HTML_CONTAINER.setAttribute("class", "shop-item");

    const LABEL = document.createElement("p");
    LABEL.style.fontSize = "Large"
    LABEL.style.color = "black"
    LABEL.innerText = this.id;
  
    const IMAGE = document.createElement("img")
    IMAGE.src = `./imgs/${this.imageSrc}`; 
    IMAGE.style.width = "160px";
    IMAGE.style.height = "90px";

    const BUTTON = document.createElement("button");
    BUTTON.innerText = "Buy";
    BUTTON.setAttribute("id", this.id + "-button");

    this.HTML_CONTAINER.appendChild(IMAGE)
    this.HTML_CONTAINER.appendChild(LABEL)
    this.HTML_CONTAINER.appendChild(BUTTON)

    return this.HTML_CONTAINER;
  }

  deleteItemHTML() {
    this.HTML_CONTAINER.remove();
  }

}