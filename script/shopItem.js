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
    LABEL.innerText = this.id;
  
    const IMAGE = document.createElement("img")
    IMAGE.src = `../imgs/${this.imageSrc}`; 
    IMAGE.style.width = "160px";
    IMAGE.style.height = "90px";

    this.HTML_CONTAINER.appendChild(IMAGE)
    this.HTML_CONTAINER.appendChild(LABEL)
  }

  deleteItemHTML() {
    this.HTML_CONTAINER.remove();
  }

}