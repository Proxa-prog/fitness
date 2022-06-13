const slider = (newArray, allItem, list, count) => {
  const slidesTreners = document.querySelectorAll(allItem);
  const slidesList = document.querySelector(list);
  const buttonForwardTreners = document.querySelector('.treners__button-forward');
  const buttonBackTreners = document.querySelector('.treners__button-back');
  const buttonBackComment = document.querySelector('.reviews__button-prev');
  const buttonForwardComment = document.querySelector('.reviews__button-next');
  let dataSetCount = 0;
  let buttonForward = '';
  let buttonBack = '';


  for (let j = 0; j < slidesTreners.length; j++) {
    slidesTreners[j].remove();
  }
  //  если получен массив тренеров
  // console.log();
  if (newArray[0].classList.contains('treners__item')) {
    buttonForward = buttonForwardTreners;
    buttonBack = buttonBackTreners;

    if (count === 4) {
      for (let i = 0; i < newArray.length; i++) {
        if (i < count) {
          slidesList.appendChild(newArray[i]);

          if (newArray[i].dataset.last) {
            buttonForward.disabled = true;
          } else {
            buttonForward.disabled = false;
          }

          if (!newArray[i].dataset.first) {
            dataSetCount++;
          }

          if (dataSetCount > 3) {
            buttonBack.disabled = false;
          } else {
            buttonBack.disabled = true;
          }
        }
      }
    }

    if (count === 2) {
      for (let i = 0; i < newArray.length; i++) {
        if (i < count) {
          slidesList.appendChild(newArray[i]);

          if (newArray[i].dataset.last) {
            buttonForward.disabled = true;
          } else {
            buttonForward.disabled = false;
          }

          if (!newArray[i].dataset.first) {
            dataSetCount++;
          }

          if (dataSetCount === 1) {
            buttonBack.disabled = true;
          } else {
            buttonBack.disabled = false;
          }
        }
      }
    }

    if (count === 1) {
      for (let i = 0; i < newArray.length; i++) {
        if (i < count) {
          slidesList.appendChild(newArray[i]);

          if (newArray[i].dataset.last) {
            buttonForward.disabled = true;
          } else {
            buttonForward.disabled = false;
          }

          if (newArray[i].dataset.first) {
            buttonBack.disabled = true;
          } else {
            buttonBack.disabled = false;
          }
        }
      }
    }
  }

  //  если получен массив комментариев

  if (newArray[0].classList.contains('reviews__comment')) {
    buttonForward = buttonForwardComment;
    buttonBack = buttonBackComment;

    if (count === 4) {
      for (let i = 0; i < newArray.length; i++) {
        if (i < count) {
          slidesList.appendChild(newArray[i]);

          if (newArray[i].dataset.last) {
            buttonForward.disabled = true;
          } else {
            buttonForward.disabled = false;
          }

          if (!newArray[i].dataset.first) {
            dataSetCount++;
          }

          if (dataSetCount > 3) {
            buttonBack.disabled = false;
          } else {
            buttonBack.disabled = true;
          }
        }
      }
    }

    if (count === 2) {
      for (let i = 0; i < newArray.length; i++) {
        if (i < count) {
          slidesList.appendChild(newArray[i]);

          if (newArray[i].dataset.last) {
            buttonForward.disabled = true;
          } else {
            buttonForward.disabled = false;
          }

          if (!newArray[i].dataset.first) {
            dataSetCount++;
          }

          if (dataSetCount === 1) {
            buttonBack.disabled = true;
          } else {
            buttonBack.disabled = false;
          }
        }
      }
    }

    if (count === 1) {
      for (let i = 0; i < newArray.length; i++) {
        if (i < count) {
          slidesList.appendChild(newArray[i]);

          if (newArray[i].dataset.last) {
            buttonForward.disabled = true;
          } else {
            buttonForward.disabled = false;
          }

          if (newArray[i].dataset.first) {
            buttonBack.disabled = true;
          } else {
            buttonBack.disabled = false;
          }
        }
      }
    }
  }
};

export default slider;
