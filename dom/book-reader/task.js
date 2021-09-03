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
      toggleActiveElement(event);
    }
  });
});

function toggleActiveElement(event) {
  let element = event.target
  let activeElementName = `${element.classList[0]}_active`,
    currentActiveElement = event.currentTarget.querySelector(
      `.${activeElementName}`
    );

  currentActiveElement.classList.toggle(activeElementName);

  let removeClass = getStyleProperty(currentActiveElement);

  removeBookClass(removeClass);

  element.classList.toggle(activeElementName);

  let addClass = getStyleProperty(element);

  addBookClass(addClass);
}

function getStyleProperty(element) {
  let properties = JSON.parse(JSON.stringify(element.dataset)),
    property = [];

    property['key'] = Object.keys(properties)[0],
    property['value'] = Object.values(properties)[0];

    let toggleClass = (property['key'] !== undefined) ? `book_${propertyKeys[property['key']]}-${property['value']}` : '';
  return toggleClass;
}

function removeBookClass(removingClass) {
  if(removingClass !== '') {
    book.classList.remove(removingClass);
  }
}

function addBookClass(addingClass) {
  if(addingClass !== '') {
    book.classList.add(addingClass);
  }
}

