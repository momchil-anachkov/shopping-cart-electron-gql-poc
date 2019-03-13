

window.onload = (event) => {
  let selectedElements = [];
  let selectedHovers = [];

  const createHover = () => {
    const hover = document.createElement('div');
    hover.style.position = 'absolute';
    hover.style.pointerEvents = 'none';
    hover.style.backgroundColor = 'lime';
    hover.style.opacity = 0.2;

    hover.style.width = '0px';
    hover.style.height = '0px';
    hover.style.left = '0px';
    hover.style.top = '0px';

    document.body.appendChild(hover);

    return hover;
  }

  let hover = createHover();

  document.body.addEventListener('mousemove', (event) => {

    const relativeRectangle = event.target.getBoundingClientRect();

    const absoluteRectangle = {
      x: relativeRectangle.x + window.scrollX,
      left: relativeRectangle.left + window.scrollX,
      y: relativeRectangle.y + window.scrollY,
      top: relativeRectangle.top + window.scrollY,
      width: relativeRectangle.width,
      height: relativeRectangle.height,
    }

    hover.style.width = `${absoluteRectangle.width}px`;
    hover.style.height = `${absoluteRectangle.height}px`;
    hover.style.left = `${absoluteRectangle.left}px`;
    hover.style.top = `${absoluteRectangle.top}px`;

    if (selectedElements.indexOf(event.target) !== -1) {
      hover.style.backgroundColor = 'red';
    } else {
      hover.style.backgroundColor = 'lime';
    }

  });

  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.target;
    let elementIndex = selectedElements.indexOf(element);
    if (elementIndex === -1) {
      selectedElements.push(event.target);
      selectedHovers.push(hover);
      hover = createHover();
    } else {
      selectedElements.splice(elementIndex, 1);
      let elementHovers = selectedHovers.splice(elementIndex, 1);
      document.body.removeChild(elementHovers[0]);
      hover.style.backgroundColor = 'lime';
    }
  });
};