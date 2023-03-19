import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
    thisContact.Contact = document.querySelector(select.containerOf.contact);
  }

  render(element) {
    const thisContact = this;

    const generatedHTML = templates.contact();

    thisContact.element = utils.createDOMFromHTML(generatedHTML);

    element.appendChild(thisContact.element).innerHTML;
  }
}

export default Contact;
