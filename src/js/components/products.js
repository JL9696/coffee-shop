import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
    constructor(element) {
        const thisProduct = this;

        thisProduct.products = document.querySelectorAll(select.containerOf.products);

        thisProduct.render(element);
    }

    render(element) {
        const thisProduct = this;

        const generatedHTML = templates.products();

        thisProduct.element = utils.createDOMFromHTML(generatedHTML);

        element.appendChild(thisProduct.element).innerHTML;
    }

}

export default Product; 
