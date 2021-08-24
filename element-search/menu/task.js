let menuItems = Array.from(document.querySelectorAll('.menu__item')),
  closestSubHref;

menuItems.forEach(function (item, i, arr) {
  checkSub(item);
});

function checkSub(element) {
  if (element.querySelector('.menu_sub')) {
    closestSubHref = element.querySelector('.menu__link');
    closestSubHref.onclick = function () {
      subSwitcher(element);
      return false;
    };
  }
  return;
}

function subSwitcher(element) {
  if (element.querySelector('.menu_active')) {
    element.querySelector('.menu_active').classList.remove('menu_active');
  } else {
    element.querySelector('.menu_sub').classList.add('menu_active');
  }
  return;
}

