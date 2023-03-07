import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Products {
  constructor(data) {
    const thisProduct = this;

    thisProduct.data = data;
    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.products({ products: thisProduct.data });
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);

    const productsWrapper = document.querySelectorAll(select.containerOf.productsWrapper);
    for (let products of productsWrapper) {
      const clone = generatedDOM.cloneNode(true);
      products.appendChild(clone);
    }
  }

}

export default Products; 
