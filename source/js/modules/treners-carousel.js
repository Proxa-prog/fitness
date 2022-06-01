const slides = document.querySelectorAll('.treners__item');

const slider = (slideIndex, ifClick) => {
  let index = 0;

  if (ifClick) {
    for (let j = 0; j < slides.length; j++) {
      slides[j].style.display = 'none';
    }
  }

  for (let i = 0; i < slides.length; i++) {
    if (i + slideIndex > slides.length) {
      slideIndex = 0;
    }

    if (document.documentElement.clientWidth > 1278) {
      if (index === 4) {
        return;
      }
    }

    if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1279) {
      if (index === 2) {
        return;
      }
    }

    if (document.documentElement.clientWidth < 767) {
      if (index === 1) {
        return;
      }
    }

    if (i + slideIndex > slides.length) {
      let startIndex = i + slideIndex - slides.length;
      slides[-1 + startIndex].style.display = 'block';
    }

    if (i + slideIndex < slides.length) {
      slides[i + slideIndex].style.display = 'block';
      index++;
    }
  }
};

export default slider;
