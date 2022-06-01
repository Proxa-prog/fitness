import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import playVideo from './modules/play-video';
import changeSelection from './modules/subscription-carousel';
import slider from './modules/treners-carousel';
import {buttonClickPrevious, buttonClickForvard} from './modules/button-click';
const buttonBack = document.querySelector('.treners__button-back');
const buttonForward = document.querySelector('.treners__button-forward');
const slides = document.querySelectorAll('.treners__item');
let slideIndex = 0;

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  playVideo();
  changeSelection('subscription__item-month-current', 'subscription__item-month');
  slider(slideIndex, false);
  buttonClickPrevious(buttonBack, slideIndex, slides, slider);
  buttonClickForvard(buttonForward, slideIndex, slides, slider);

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
