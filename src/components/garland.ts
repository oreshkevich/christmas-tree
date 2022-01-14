/* eslint-disable max-len */
import IGarlandNumber from '../interface/IGarlandNumber';

const garland = () => {
  const festoonLove = <HTMLInputElement>document.getElementById('festoon-love');
  const dataNumber = [
    {
      widthHeight: 120,
      quantityLi: 5,
      translatePx: 60,
      amendmentPx: 12,
    },
    {
      widthHeight: 170,
      quantityLi: 7,
      translatePx: 85,
      amendmentPx: 9,
    },
    {
      widthHeight: 230,
      quantityLi: 8,
      translatePx: 115,
      amendmentPx: 8,
    },
    {
      widthHeight: 300,
      quantityLi: 11,
      translatePx: 150,
      amendmentPx: 6,
    },
    {
      widthHeight: 380,
      quantityLi: 18,
      translatePx: 190,
      amendmentPx: 4,
    },
    {
      widthHeight: 465,
      quantityLi: 21,
      translatePx: 232,
      amendmentPx: 3,
    },
    {
      widthHeight: 555,
      quantityLi: 24,
      translatePx: 277,
      amendmentPx: 3,
    },
  ];

  function classColor(color: string | undefined = 'colored') {
    function garlandWrapperUl() {
      dataNumber.forEach((item: IGarlandNumber) => {
        const { widthHeight, quantityLi, translatePx, amendmentPx } = item;
        const garlandContainer = document.querySelector('.garland-container');
        const ulWrapper = document.createElement('ul');
        const ulRopeWrapper = ulWrapper.style;
        let amendment = 53;

        ulWrapper.classList.add('rope');
        ulRopeWrapper.width = `${widthHeight}px`;
        ulRopeWrapper.height = `${widthHeight}px`;
        for (let i = 1; i <= quantityLi; i += 1) {
          amendment += amendmentPx;
          const liColored = document.createElement('li');
          liColored.classList.add(`${color}`);
          const liColoredStyle = liColored.style;
          liColoredStyle.transform = `rotate(${amendment}deg) translate(${translatePx}px) rotate(-${amendment}deg)`;
          ulWrapper!.append(liColored);
        }
        garlandContainer!.appendChild(ulWrapper);
      });
    }
    garlandWrapperUl();
  }
  function turnOn() {
    const garlandButtons = document.querySelectorAll('.garland-buttons');

    garlandButtons.forEach((item) => {
      item.addEventListener('click', (event) => {
        const card = event.target;
        const { color } = (card as HTMLElement).dataset;

        classColor(color);
        festoonLove!.checked = true;
      });
    });
  }
  turnOn();

  function festoonLoveReset() {
    if (festoonLove.checked) {
      classColor();
    } else {
      const garlandContainer = document.querySelector('.garland-container');

      garlandContainer!.innerHTML = '';
    }
  }
  festoonLove.addEventListener('click', festoonLoveReset);
};

export default garland;
