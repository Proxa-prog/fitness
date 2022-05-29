const subscriptionListCostArray = document.querySelectorAll('.subscription__list-cost');

const openCurrentList = (howManyMonth, currentItem) => {
  if (currentItem.classList.contains(howManyMonth)) {
    currentItem.style.display = 'flex';
  }
};

const takeCurrentList = (subscriptionTime) => {
  const current = Number(subscriptionTime.dataset.month);
  switch (current) {
    case 1:
      subscriptionListCostArray.forEach((item) => {
        item.style.display = 'none';
        openCurrentList('subscription__list-cost-one-month', item);
      });
      break;
    case 6:
      subscriptionListCostArray.forEach((item) => {
        item.style.display = 'none';
        openCurrentList('subscription__list-cost-six-month', item);
      });
      break;
    case 12:
      subscriptionListCostArray.forEach((item) => {
        item.style.display = 'none';
        openCurrentList('subscription__list-cost-twelve-month', item);
      });
      break;
  }
};

export default takeCurrentList;
