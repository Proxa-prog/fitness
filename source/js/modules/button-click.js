const buttonClickPrevious = (buttonName, slideIndex, slides, slider) => {
  buttonName.addEventListener('click', () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    }

    slideIndex--;
    slider(slideIndex, true);
  });
};

const buttonClickForvard = (buttonName, slideIndex, slides, slider) => {
  buttonName.addEventListener('click', () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    }

    slideIndex++;
    slider(slideIndex, true);
  });
};

export {buttonClickPrevious, buttonClickForvard};
