/* eslint-disable max-len */
import data from './data.js';
import ICardItem from '../../interface/ICardItem';

const toys = () => {
  const cards = document.querySelector('.card-container');
  localStorage.setItem('goods', JSON.stringify(data));

  data.forEach((item: ICardItem) => {
    const { num, name, count, rating, year, shape, color, size, favorite } = item;
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card');
    cardWrapper.setAttribute('data-num', year);
    cardWrapper.setAttribute('data-rating', rating);
    cardWrapper.setAttribute('data-key', num);
    cardWrapper.innerHTML = `
        <h2 class="card-title">${name}</h2>
        <img class="card-img" src="./assets/toys/${num}.png" alt="toy">
        <div class="card-description">
          <p class="count">Количество: <span>${count}</span></p>
          <p class="year">Год покупки: <span>${year}</span></p>
          <p class="shape">Форма: <span>${shape}</span></p>
          <p class="color">Цвет:  <span>${color}</span></p>
          <p class="size">Размер: <span>${size}</span></p>
          <p class="favorite">Любимая: <span>${favorite}</span></p>
            <button class="btn-add btn-primary">добавить </button>
            <button class="btn-add btn-remove">удалить</button>
        </div>
        `;

    cards!.append(cardWrapper);
  });

  document.getElementById('search')!.focus();
  const input = document.querySelector('.search-block > input');
  const searchBtn = document.querySelector('.search-block > button');
  const filterBox = document.querySelectorAll('.card');
  const getData = (shape: string) => {
    const cartGoods: number[] = [];
    console.log(cartGoods);
    filterBox.forEach((elem) => {
      elem.classList.add('hide');

      let notes = null;
      for (let i = 0; i < elem.childNodes.length; i += 1) {
        if ((elem.childNodes[i] as HTMLElement).className === 'card-title') {
          notes = elem.childNodes[i];
          break;
        }
      }
      const strLength = +shape.length;
      if (
        notes!.textContent!.toLowerCase().substring(0, strLength).trim() ===
        shape.toLowerCase().substring(0, strLength).trim()
      ) {
        elem.classList.remove('hide');
      } else {
        cartGoods.push(1);
      }
    });
    const small = document.querySelector('.small');
    if (cartGoods.length === 60) {
      small!.classList.remove('hidden-small');
    } else {
      small!.classList.add('hidden-small');
    }
  };
  searchBtn!.addEventListener('click', () => {
    getData((input as HTMLInputElement)!.value);
    (document.getElementById('search') as HTMLInputElement)!.value = '';
  });
  input!.addEventListener('input', () => {
    getData((input as HTMLInputElement)!.value);
  });
};

export default toys;
