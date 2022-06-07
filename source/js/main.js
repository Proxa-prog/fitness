import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import playVideo from './modules/play-video';
import changeSelection from './modules/subscription-carousel';
import slider from './modules/treners-carousel';
import {buttonClickPrevious, buttonClickForvard} from './modules/button-click';
const buttonBackTreners = document.querySelector('.treners__button-back');
const buttonForwardTreners = document.querySelector('.treners__button-forward');
const buttonBackComment = document.querySelector('.reviews__button-prev');
const buttonForwardComment = document.querySelector('.reviews__button-next');
const slidesTreners = document.querySelectorAll('.treners__item');
const comments = document.querySelectorAll('.reviews__comment');
let slidesArray = Array.from(slidesTreners);
let newArrayTreners = slidesArray.slice();
let commentArray = Array.from(comments);
let newArrayComment = commentArray.slice();
let currentWidth = 0;
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // Определение количества карточек при загрузке разрешения экрана

  const checkWindowWidth = () => {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= 1279) {
      currentWidth = 4;
    }

    if (windowWidth >= 768 && windowWidth < 1279) {
      currentWidth = 2;
    }

    if (windowWidth < 768) {
      currentWidth = 1;
    }
  };

  // Определение количества карточек при изменениее разрешения

  window.addEventListener('resize', () => {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 1024) {
      currentWidth = 4;
      slider(newArrayTreners, '.treners__item', '.treners__list', currentWidth);
    }

    if (windowWidth < 1279 && windowWidth > 767) {
      currentWidth = 2;
      slider(newArrayTreners, '.treners__item', '.treners__list', currentWidth);
    }

    if (windowWidth < 768) {
      currentWidth = 1;
      slider(newArrayTreners, '.treners__item', '.treners__list', currentWidth);
    }
  });

  checkWindowWidth();
  playVideo();
  changeSelection('subscription__item-month-current', 'subscription__item-month');
  slider(newArrayTreners, '.treners__item', '.treners__list', currentWidth);
  buttonClickPrevious(buttonBackTreners, slider, newArrayTreners, '.treners__item', '.treners__list', currentWidth);
  buttonClickForvard(buttonForwardTreners, slider, newArrayTreners, '.treners__item', '.treners__list', currentWidth);
  slider(newArrayComment, '.reviews__comment', '.reviews__user-comment-wrapper', 1);
  buttonClickPrevious(buttonBackComment, slider, newArrayComment, '.reviews__comment', '.reviews__user-comment-wrapper', 1);
  buttonClickForvard(buttonForwardComment, slider, newArrayComment, '.reviews__comment', '.reviews__user-comment-wrapper', 1);

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
