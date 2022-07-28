var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') {
    return 'id'
  }
  if (selector[0] === '.') {
    return 'class'
  } else {
    if (selector.includes('.')) {
      return 'tag.class'
    } else {
      return 'tag'
    }
  }
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = (ele) => ele.id === selector.slice(1)
  } else if (selectorType === "class") {
    // matchFunction = (ele) => ele.classList.contains(selector(slice(1)))    no me funca
    matchFunction = function (ele) {
      let e = ele.classList;
      for (let i = 0; i < e.length; i++) {
        if (e[i] === selector.slice(1)) {
          return true;
        } 
      }
      return false;        
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (ele) {
      let [tag, classN] = selector.slice('.');
      return (matchFunctionMaker(tag)(ele) && matchFunctionMaker(`.${classN}`)(ele));
    }
    
  } else if (selectorType === "tag") {
    matchFunction = (ele) => ele.tagName.toUpperCase() === selector.toUpperCase();
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
