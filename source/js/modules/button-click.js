const buttonClickPrevious = (buttonName, slider, newArray, allItem, list, count) => {
  buttonName.addEventListener('click', () => {
    let lastElement = newArray.pop();
    newArray.unshift(lastElement);
    slider(newArray, allItem, list, count);
  });
};

const buttonClickForvard = (buttonName, slider, newArray, allItem, list, count) => {
  buttonName.addEventListener('click', () => {
    let firstElement = newArray.shift();
    newArray.push(firstElement);
    slider(newArray, allItem, list, count);
  });
};

export {buttonClickPrevious, buttonClickForvard};
