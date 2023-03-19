import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.home = document.querySelector(select.containerOf.home);
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.home();

    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    element.appendChild(thisHome.element).innerHTML;
  }
}

export default Home;
