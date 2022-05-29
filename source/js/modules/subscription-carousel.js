import takeCurrentList from './take-current-list';

const subscriptionItemMonthArray = document.querySelectorAll('.subscription__item-month');
const subscriptionListMonthArray = document.querySelector('.subscription__list-month');

const changeSelection = (current, month) => {
  subscriptionListMonthArray.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.classList.contains(month)) {
      subscriptionItemMonthArray.forEach((item) => {
        item.classList.remove(current);
      });
      target.classList.add(current);
      takeCurrentList(target);
    }
  });
};

export default changeSelection;
