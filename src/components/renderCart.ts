import data from './card/data.js';
import ICardGoods from '../interface/ICardGoods';

const renderCart = (goods: ICardGoods[]) => {
  const desiredContainer = document.querySelector('.desired-container');

  desiredContainer!.innerHTML = '';
  if (goods.length === 0) {
    const dataFirstTwenty = data.slice(0, 20);
    dataFirstTwenty.forEach((goodsItem) => {
      const desiredCard = document.createElement('div');
      const desiredCount = document.createElement('p');

      desiredCard.classList.add('desired-card');
      desiredCard.dataset.num = `${goodsItem.num}`;
      desiredContainer!.append(desiredCard);
      desiredCount.classList.add('desired-count');
      desiredCount.innerHTML = `${goodsItem.count}`;
      desiredCard!.append(desiredCount);
      const goodsCount = Number(goodsItem.count);
      for (let i = 1; i <= goodsCount; i += 1) {
        const desiredCardImg = document.createElement('img');
        desiredCardImg.classList.add('desired-card-img');
        desiredCardImg.src = `./assets/toys/${goodsItem.num}.png`;
        desiredCardImg.alt = 'toy';
        desiredCardImg.id = `${goodsItem.num}-${i}`;
        desiredCardImg.dataset.number = `${goodsItem.num}`;
        desiredCardImg.draggable = true;
        desiredCard!.append(desiredCardImg);
      }
    });
  } else {
    goods.forEach((goodsItem) => {
      const desiredCard = document.createElement('div');
      const desiredCount = document.createElement('p');

      desiredCard.classList.add('desired-card');
      desiredCard.dataset.num = `${goodsItem.num}`;
      desiredContainer!.append(desiredCard);
      desiredCount.classList.add('desired-count');
      desiredCount.innerHTML = `${goodsItem.count}`;
      desiredCard!.append(desiredCount);
      for (let i = 1; i <= goodsItem.count; i += 1) {
        const desiredCardImg = document.createElement('img');
        desiredCardImg.classList.add('desired-card-img');
        desiredCardImg.src = `./assets/toys/${goodsItem.num}.png`;
        desiredCardImg.alt = 'toy';
        desiredCardImg.id = `${goodsItem.num}-${i}`;
        desiredCardImg.dataset.number = `${goodsItem.num}`;
        desiredCardImg.draggable = true;
        desiredCard!.append(desiredCardImg);
      }
    });
  }

  const desiredCardImg = document.querySelectorAll('.desired-card-img');
  const parent = document.querySelector('area');
  let current: string | Node;
  let offsetX: number;
  let offsetY: number;

  desiredCardImg.forEach((elem) => {
    elem.addEventListener('dragstart', (event) => {
      offsetX = (event as DragEvent).offsetX;
      offsetY = (event as DragEvent).offsetY;
      current = elem;
    });
  });

  parent!.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  parent!.addEventListener('drop', (event) => {
    (current as HTMLElement).style.top = `${event.pageY - 40 - offsetY}px`;
    (current as HTMLElement).style.left = `${event.pageX - offsetX}px`;
    parent!.append(current);
    const imgRemove = document.querySelectorAll('.desired-card');
    imgRemove.forEach((item) => {
      const elements = item.childNodes;
      elements[0].textContent = '1';
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].textContent = (elements.length - 1).toString();
      }
    });
  });
};

export default renderCart;
