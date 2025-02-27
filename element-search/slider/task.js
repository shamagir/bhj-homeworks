let sliderItems = Array.from(document.querySelectorAll('.slider__item')),
  sliderArrows = Array.from(document.querySelectorAll('.slider__arrow')),
  sliderDots = Array.from(document.querySelectorAll('.slider__dot')),
  sliderIndex = 0;

sliderArrows.forEach(function (item) {
  item.onclick = function () {
    toggleActive();
    sliderIndex = this.classList.contains('slider__arrow_next')
      ? sliderIndex + 1
      : sliderIndex - 1;
    checkSliderIndex();
  };
});

sliderDots.forEach(function (item) {
  item.onclick = function () {
    toggleActive();
    sliderIndex = sliderDots.indexOf(this);
    toggleActive();
  };
});

function checkSliderIndex() {
  sliderIndex = sliderIndex === sliderItems.length ? 0 : sliderIndex;
  sliderIndex = sliderIndex < 0 ? sliderItems.length - 1 : sliderIndex;
  toggleActive();
}

function toggleActive() {
  sliderItems[sliderIndex].classList.toggle('slider__item_active');
  sliderDots[sliderIndex].classList.toggle('slider__dot_active');
}

