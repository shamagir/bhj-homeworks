let sliderItems = Array.from(document.querySelectorAll('.slider__item')),
  sliderArrows = Array.from(document.querySelectorAll('.slider__arrow')),
  sliderDots = Array.from(document.querySelectorAll('.slider__dot')),
  sliderIndex = 0;

sliderArrows.forEach(function (item) {
  item.onclick = function () {
    setSliderUnactive();
    sliderIndex = this.classList.contains('slider__arrow_next')
      ? sliderIndex + 1
      : sliderIndex - 1;
    checkSliderIndex();
  };
});

sliderDots.forEach(function (item) {
  item.onclick = function () {
    setSliderUnactive();
    sliderIndex = sliderDots.indexOf(this);
    setSliderActive();
  };
});

function checkSliderIndex() {
  sliderIndex = sliderIndex === sliderItems.length ? 0 : sliderIndex;
  sliderIndex = sliderIndex < 0 ? sliderItems.length - 1 : sliderIndex;
  setSliderActive();
}

function setSliderActive() {
  sliderItems[sliderIndex].classList.add('slider__item_active');
}

function setSliderUnactive() {
  sliderItems[sliderIndex].classList.remove('slider__item_active');
}

