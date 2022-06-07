const slider = (newArray, allItem, list, count) => {
  const slidesTreners = document.querySelectorAll(allItem);
  const slidesList = document.querySelector(list);

  for (let j = 0; j < slidesTreners.length; j++) {
    slidesTreners[j].remove();
  }

  for (let i = 0; i < newArray.length; i++) {
    if (i < count) {
      slidesList.appendChild(newArray[i]);
    }
  }
};

export default slider;
