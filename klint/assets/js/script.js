var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};

var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};

var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};

var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};
var utils = {
  docReady: docReady,
  getData: getData,
};

var typedTextInit = function typedTextInit() {
  var typedTexts = document.querySelectorAll('.typed-text');

  if (typedTexts.length && window.Typed) {
    typedTexts.forEach(function (typedText) {
      return new window.Typed(typedText, {
        strings: utils.getData(typedText, 'typedText'),
        typeSpeed: 80,
        loop: true,
        backDelay: 1500
      });
    });
  }
};
docReady(typedTextInit);