import { settings, select, classNames } from './settings.js';
import Product from './components/products.js';
import Home from './components/home.js';
import Contact from './components/contact.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages.id;
    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);
    
    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for (let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initHome: function () {
    const thisApp = this;
    const widgetContainer = document.querySelector(select.containerOf.home);
    thisApp.Home = new Home(widgetContainer);
  },

  initProduct: function () {
    const thisApp = this;

    const widgetContainer = document.querySelector(select.containerOf.products);   
    thisApp.products = new Product(widgetContainer);
  },

  initContact: function () {
    const thisApp = this;
    const widgetContainer = document.querySelector(select.containerOf.contact);
    thisApp.Contact = new Contact(widgetContainer);
  },

  initData: function() {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initProduct();
      });
  },

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initProduct();
    thisApp.initContact();
    thisApp.initHome();
  },
};

app.init();