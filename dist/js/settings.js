export const select = {
  templateOf: {
    products: '#template-products',
    home: '#template-home',
    contact: '#template-contact',
  },
  containerOf: {
    productsWrapper: '.products-wrapper',
    pages: '.pages',
    home: '#home .container',
    products: '#products .container',
    contact: '#contact .container',
  },
  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
};