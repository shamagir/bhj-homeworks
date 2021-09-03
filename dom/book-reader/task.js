'use strict';

let book = document.querySelector('#book'),
  bookControls = Array.from(document.querySelectorAll('.book__control')),
  propertyKeys = {
    size: 'fs',
    textColor: 'color',
    bgColor: 'bg'
  };

bookControls.forEach(function (item) {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
      toggleActiveElement(event.target);
    }
  });
});

function toggleActiveElement(element) {
  let activeElementName = `${element.classList[0]}_active`,
    currentActiveElement = element.parentElement.querySelector(
      `.${activeElementName}`
    );

  currentActiveElement.classList.toggle(activeElementName);

  let removeClassProperty = getStyleProperty(currentActiveElement);

  removeBookClass(removeClassProperty);

  element.classList.toggle(activeElementName);

  let addClassProperty = getStyleProperty(element);

  addBookClass(addClassProperty);
}

function getStyleProperty(element) {
  let properties = JSON.parse(JSON.stringify(element.dataset)),
    property = [];

  (property['key'] = Object.keys(properties)[0]),
    (property['value'] = Object.values(properties)[0]);
  return property;
}

function removeBookClass(property) {
  if (property['key'] !== undefined) {
    let removingClass = `book_${propertyKeys[property['key']]}-${
      property['value']
    }`;
    book.classList.remove(removingClass);
  }
}

function addBookClass(property) {
  if (property['key'] !== undefined) {
    let addingClass = `book_${propertyKeys[property['key']]}-${
      property['value']
    }`;
    book.classList.add(addingClass);
  }
}

