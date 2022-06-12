const slider = (newArray, allItem, list, count) => {
  const slidesTreners = document.querySelectorAll(allItem);
  const slidesList = document.querySelector(list);
  const buttonForwardTreners = document.querySelector('.treners__button-forward');
  const buttonBackTreners = document.querySelector('.treners__button-back');
  let dataSetCount = 0;


  for (let j = 0; j < slidesTreners.length; j++) {
    slidesTreners[j].remove();
  }

  for (let i = 0; i < newArray.length; i++) {
    if (i < count) {
      slidesList.appendChild(newArray[i]);

      if (newArray[i].dataset.last) {
        buttonForwardTreners.disabled = true;
      } else {
        buttonForwardTreners.disabled = false;
      }

      if (!newArray[i].dataset.first) {
        dataSetCount++;
      }

      if (dataSetCount > 3) {
        buttonBackTreners.disabled = false;
      } else {
        buttonBackTreners.disabled = true;
      }
    }
  }
};

export default slider;
