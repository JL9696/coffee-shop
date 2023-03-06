import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(element) {
    const thisProduct = this;

    thisProduct.products = document.querySelector(select.containerOf.products);

    thisProduct.render(element);
  }

  render(element) {
    const thisProduct = this;

    const generatedHTML = templates.products();

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const productsWrapper = document.querySelectorAll(select.containerOf.productsWrapper);
    
    for (let products of productsWrapper) {
      const clone = thisProduct.element.cloneNode(true);
      products.appendChild(clone);
    }
  }

}

export default Product; 
