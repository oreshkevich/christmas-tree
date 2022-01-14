/* eslint-disable max-len */
const active = () => {
  const filterBox = document.querySelectorAll('.card');
  const shapeWrapper = document.querySelectorAll('.shape-wrapper');
  const sizeWrapper = document.querySelectorAll('.size-wrapper');
  const colorItem = document.querySelectorAll('.color-item');
  const checkVolume = <HTMLInputElement>document.querySelector('.favorite-love');
  const formSizeLove = <HTMLInputElement>document.querySelector('.form-size-love');
  const sizeLove = <HTMLInputElement>document.getElementById('size-love');

  const sliders = document.querySelectorAll('input[data-filter="count"]');
  const outputSeek = document.querySelector('.output-seek');
  const outputSeekTwo = document.querySelector('.output-seek-two');
  const resetFilter = document.querySelector('.reset-filter');

  const slidersYear = document.querySelectorAll('input[data-filter="year"]');
  const outputYear = document.querySelector('.output-year');
  const outputYearTwo = document.querySelector('.output-year-two');
  function filterYearReset() {
    (slidersYear[0] as HTMLInputElement).value = '1940';
    (slidersYear[1] as HTMLInputElement).value = '2020';
  }
  function filterCountReset() {
    (sliders[0] as HTMLInputElement).value = '1';
    (sliders[1] as HTMLInputElement).value = '12';
  }

  function colorItemReset() {
    colorItem.forEach((item) => {
      item.classList.remove('active');
    });
  }

  function shapeWrapperReset() {
    shapeWrapper.forEach((item) => {
      item.classList.remove('shape-active');
    });
  }
  function sizeWrapperReset() {
    sizeWrapper.forEach((item) => {
      item.classList.remove('shape-active');
    });
  }
  function allReset() {
    checkVolume.checked = false;
  }
  function sizeLoveReset() {
    sizeLove.checked = false;
  }
  function searchReset() {
    (document.getElementById('search') as HTMLInputElement)!.value = '';
  }

  // filterBox.forEach((link): void => {
  //   link.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     link.classList.toggle('active-card');
  //   });
  // });

  // type Card = {
  //   cartGoods: number[];
  //   countQuantity(): void;
  // };
  // const cart: Card = {
  //   cartGoods: [],
  //   countQuantity() {
  //     (cartCount as HTMLElement).textContent = this.cartGoods
  //       .reduce((sum: number, item: number) => sum + item, 0)
  //       .toString();
  //     if (this.cartGoods.length === 20) {
  //       const modalAuthOne = document.querySelector('.modal-auth-one');

  //       modalAuthOne!.classList.add('is-open-one');
  //     }
  //   },
  // };

  // document.body.addEventListener('click', (event) => {
  //   const addToCart = (event!.target as HTMLInputElement).closest('.active-card');
  //   if (addToCart) {
  //     cart.cartGoods.push(1);
  //     cart.countQuantity();
  //   } else {
  //     cart.cartGoods.pop();
  //   }
  // });

  const cartCloseBtn = document.querySelector('.cart-close');
  const modalAuthOne = document.querySelector('.modal-auth-one');
  const closeCart = () => {
    modalAuthOne!.classList.remove('is-open-one');
  };

  cartCloseBtn!.addEventListener('click', closeCart);

  const getDataLove = (shape: string) => {
    filterBox.forEach((elem) => {
      elem.classList.add('hide');
      let notes = null;
      for (let i = 0; i < elem.childNodes.length; i += 1) {
        if ((elem.childNodes[i] as HTMLElement).className === 'card-description') {
          notes = elem.childNodes[i];
          break;
        }
      }
      let notesOne = null;
      for (let i = 0; i < notes!.childNodes.length; i += 1) {
        if ((notes!.childNodes[i] as HTMLElement).className === shape) {
          notesOne = notes!.childNodes[i];
          break;
        }
      }
      const keyLove = notesOne!.textContent!.substring(8).trim();
      if (keyLove === 'true') {
        elem.classList.remove('hide');
      }
    });
  };
  function checkSize() {
    allReset();
    const linkValue = (formSizeLove as HTMLElement)!.dataset.filter;
    getDataLove(linkValue!);
    localStorage.setItem('name', linkValue!);
    localStorage.removeItem('linkValueOne');
    localStorage.removeItem('shapeOne');
    localStorage.removeItem('linkValueThree');
    localStorage.removeItem('shapeThree');
    localStorage.removeItem('linkValueTwo');
    localStorage.removeItem('shapeTwo');
    localStorage.removeItem('checkVolume');
    localStorage.removeItem('countOne');
    localStorage.removeItem('sliderLinkValue');
    localStorage.removeItem('filterShape');

    (document.getElementById('search') as HTMLInputElement)!.value = '';
    filterYearReset();
    filterCountReset();
    sizeWrapperReset();
    colorItemReset();
    searchReset();
  }
  formSizeLove.addEventListener('click', checkSize);
  // const checkVolumeBoolean = checkVolume.checked;
  function check() {
    filterBox.forEach((elem) => {
      elem.classList.add('hide');
      const checkVolumeBoolean = checkVolume.checked;
      if (checkVolumeBoolean) {
        elem.classList.remove('hide');
        localStorage.setItem('checkVolume', checkVolumeBoolean.toString());
        localStorage.removeItem('linkValueOne');
        localStorage.removeItem('shapeOne');
        localStorage.removeItem('linkValueThree');
        localStorage.removeItem('shapeThree');
        localStorage.removeItem('linkValueTwo');
        localStorage.removeItem('shapeTwo');
        localStorage.removeItem('name');
        localStorage.removeItem('countOne');
        localStorage.removeItem('sliderLinkValue');
        localStorage.removeItem('filterShape');
        sizeLoveReset();
        shapeWrapperReset();
        colorItemReset();
        sizeWrapperReset();
        filterYearReset();
        filterCountReset();
        searchReset();
      }
    });
  }
  function reset() {
    filterBox.forEach((elem) => {
      elem.classList.remove('hide');
      sizeLoveReset();
      shapeWrapperReset();
      colorItemReset();
      sizeWrapperReset();
      filterYearReset();
      filterCountReset();
      allReset();
      searchReset();
    });
  }
  checkVolume.addEventListener('click', check);
  resetFilter!.addEventListener('click', reset);

  const getData = (value: string, shape: string) => {
    filterBox.forEach((elem) => {
      elem.classList.add('hide');

      let notes = null;
      for (let i = 0; i < elem.childNodes.length; i += 1) {
        if ((elem.childNodes[i] as HTMLElement).className === 'card-description') {
          notes = elem.childNodes[i];
          break;
        }
      }
      let notesOne = null;
      for (let i = 0; i < notes!.childNodes.length; i += 1) {
        if ((notes!.childNodes[i] as HTMLElement).className === shape) {
          notesOne = notes!.childNodes[i];
          break;
        }
      }
      if (notesOne!.textContent!.substring(7).trim() === value.toLowerCase().trim()) {
        elem.classList.remove('hide');
      }
    });
  };
  shapeWrapper.forEach((link) => {
    link.addEventListener('click', (event) => {
      (document.getElementById('search') as HTMLInputElement)!.value = '';
      allReset();
      sizeLoveReset();
      event.preventDefault();
      shapeWrapperReset();
      link.classList.toggle('shape-active');
      const linkValue = link.textContent;
      const shape = (link as HTMLElement)!.dataset.filter;
      getData(linkValue!, shape!);
      localStorage.setItem('linkValueTwo', linkValue!);
      localStorage.setItem('shapeTwo', shape!);
      localStorage.removeItem('checkVolume');
      localStorage.removeItem('linkValueOne');
      localStorage.removeItem('shapeOne');
      localStorage.removeItem('linkValueThree');
      localStorage.removeItem('shapeThree');
      localStorage.removeItem('name');
      localStorage.removeItem('countOne');
      localStorage.removeItem('sliderLinkValue');
      localStorage.removeItem('filterShape');
      filterYearReset();
      filterCountReset();
      colorItemReset();
      sizeWrapperReset();
      searchReset();
    });
  });
  colorItem.forEach((link): void => {
    link.addEventListener('click', (event) => {
      (document.getElementById('search') as HTMLInputElement)!.value = '';
      allReset();
      sizeLoveReset();
      event.preventDefault();
      colorItemReset();
      link.classList.toggle('active');
      const shape = (link as HTMLElement)!.dataset.field;
      const linkValue = (link as HTMLElement)!.dataset.filter;
      getData(linkValue!, shape!);
      localStorage.setItem('linkValueOne', linkValue!);
      localStorage.setItem('shapeOne', shape!);
      localStorage.removeItem('linkValueTwo');
      localStorage.removeItem('shapeTwo');
      localStorage.removeItem('checkVolume');
      localStorage.removeItem('name');
      localStorage.removeItem('countOne');
      localStorage.removeItem('sliderLinkValue');
      localStorage.removeItem('filterShape');
      localStorage.removeItem('linkValueThree');
      localStorage.removeItem('shapeThree');
      filterYearReset();
      filterCountReset();
      sizeWrapperReset();
      searchReset();
    });
  });
  sizeWrapper.forEach((link) => {
    link.addEventListener('click', (event) => {
      (document.getElementById('search') as HTMLInputElement)!.value = '';
      allReset();
      sizeLoveReset();
      event.preventDefault();
      sizeWrapperReset();
      link.classList.toggle('shape-active');
      const linkValue = link.textContent;
      const shape = (link as HTMLElement)!.dataset.filter;
      getData(linkValue!, shape!);
      localStorage.setItem('linkValueThree', linkValue!);
      localStorage.setItem('shapeThree', shape!);
      localStorage.removeItem('linkValueTwo');
      localStorage.removeItem('shapeTwo');
      localStorage.removeItem('linkValueOne');
      localStorage.removeItem('shapeOne');
      localStorage.removeItem('checkVolume');
      localStorage.removeItem('name');
      localStorage.removeItem('countOne');
      localStorage.removeItem('sliderLinkValue');
      localStorage.removeItem('filterShape');
      filterYearReset();
      filterCountReset();
      colorItemReset();
      shapeWrapperReset();
      searchReset();
    });
  });
  // Сортировка nav
  // const nav = document.querySelector('.color');
  // const checkBoxs = [...nav!.querySelectorAll('.color-item')];
  // colorItem.forEach((link): void => {
  //   const containsWhile = link.classList.contains('active');
  //   console.log(containsWhile);
  // });
  const getDataYear = (countOne: string, countTwo: string, filterShape: string | undefined) => {
    filterBox.forEach((elem) => {
      elem.classList.add('hide');
      let notes = null;
      for (let i = 0; i < elem.childNodes.length; i += 1) {
        if ((elem.childNodes[i] as HTMLElement).className === 'card-description') {
          notes = elem.childNodes[i];
          break;
        }
      }
      let notesOne = null;
      for (let i = 0; i < notes!.childNodes.length; i += 1) {
        if ((notes!.childNodes[i] as HTMLElement).className === filterShape) {
          notesOne = notes!.childNodes[i];
          break;
        }
      }
      const meaning = notesOne!.textContent!.substring(12).trim();
      const num = Number(meaning);
      const numOne = Number(countOne);
      const numTwo = Number(countTwo);
      let i = numOne;
      while (i <= numTwo) {
        if (num === i) {
          elem.classList.remove('hide');
        }
        i += 1;
      }
    });
  };
  sliders[0].addEventListener('input', () => {
    if (+(sliders[0] as HTMLInputElement).value > +(sliders[1] as HTMLInputElement).value) {
      (sliders[1] as HTMLInputElement).value = (sliders[0] as HTMLInputElement).value;
    }
  });

  sliders[1].addEventListener('input', () => {
    if (+(sliders[1] as HTMLInputElement).value < +(sliders[0] as HTMLInputElement).value) {
      (sliders[0] as HTMLInputElement).value = (sliders[1] as HTMLInputElement).value;
    }
  });

  sliders.forEach((slider) => {
    slider.addEventListener('change', () => {
      const countOne = (sliders[0] as HTMLInputElement).value;
      const countTwo = (sliders[1] as HTMLInputElement).value;
      (outputSeek as HTMLInputElement)!.value = countOne;
      (outputSeekTwo as HTMLInputElement)!.value = countTwo;
      const linkValue = outputSeekTwo!.textContent;
      const filterShape = (slider as HTMLElement)!.dataset.filter;
      getDataYear(countOne, linkValue!, filterShape);
      localStorage.setItem('countOne', countOne);
      localStorage.setItem('sliderLinkValue', linkValue!);
      localStorage.setItem('filterShape', filterShape!);
      localStorage.removeItem('linkValueTwo');
      localStorage.removeItem('shapeTwo');
      localStorage.removeItem('linkValueOne');
      localStorage.removeItem('shapeOne');
      localStorage.removeItem('checkVolume');
      localStorage.removeItem('name');
      filterYearReset();
      colorItemReset();
      shapeWrapperReset();
      sizeWrapperReset();
      allReset();
      sizeLoveReset();
      searchReset();
    });
  });

  slidersYear[0].addEventListener('input', () => {
    if (+(slidersYear[0] as HTMLInputElement).value > +(slidersYear[1] as HTMLInputElement).value) {
      (slidersYear[1] as HTMLInputElement).value = (slidersYear[0] as HTMLInputElement).value;
    }
  });

  slidersYear[1].addEventListener('input', () => {
    if (+(slidersYear[1] as HTMLInputElement).value < +(slidersYear[0] as HTMLInputElement).value) {
      (slidersYear[0] as HTMLInputElement).value = (slidersYear[1] as HTMLInputElement).value;
    }
  });

  slidersYear.forEach((slider) => {
    slider.addEventListener('change', () => {
      const countOne = (slidersYear[0] as HTMLInputElement).value;
      const countTwo = (slidersYear[1] as HTMLInputElement).value;
      (outputYear as HTMLInputElement)!.value = countOne;
      (outputYearTwo as HTMLInputElement)!.value = countTwo;
      const linkValue = outputYearTwo!.textContent;
      const filterShape = (slider as HTMLElement)!.dataset.filter;
      getDataYear(countOne, linkValue!, filterShape);
      localStorage.setItem('countOne', countOne);
      localStorage.setItem('sliderLinkValue', linkValue!);
      localStorage.setItem('filterShape', filterShape!);
      localStorage.removeItem('linkValueTwo');
      localStorage.removeItem('shapeTwo');
      localStorage.removeItem('linkValueOne');
      localStorage.removeItem('shapeOne');
      localStorage.removeItem('checkVolume');
      localStorage.removeItem('name');

      filterCountReset();
      colorItemReset();
      shapeWrapperReset();
      sizeWrapperReset();
      allReset();
      sizeLoveReset();
      searchReset();
    });
  });

  function getLocalStorage() {
    if (localStorage.getItem('checkVolume')) {
      const checkVolumeTwo = localStorage.getItem('checkVolume');
      checkVolume.checked = Boolean(checkVolumeTwo);
    }
    if (localStorage.getItem('name')) {
      sizeLove.checked = true;
      checkSize();
    }
    if (localStorage.getItem('linkValueOne') && localStorage.getItem('shapeOne')) {
      const linkValueOne = localStorage.getItem('linkValueOne');
      const shapeOne = localStorage.getItem('shapeOne');
      getData(linkValueOne!, shapeOne!);
      colorItem.forEach((item) => {
        const itemValue = (item as HTMLElement)!.dataset.filter;
        if (itemValue === linkValueOne) {
          item.classList.add('active');
        }
      });
    }
    if (localStorage.getItem('linkValueTwo') && localStorage.getItem('shapeTwo')) {
      const linkValueTwo = localStorage.getItem('linkValueTwo');
      const shapeTwo = localStorage.getItem('shapeTwo');
      getData(linkValueTwo!, shapeTwo!);
      shapeWrapper.forEach((item) => {
        const linkValue = item.textContent;
        if (linkValue?.trim() === linkValueTwo?.trim()) {
          item.classList.add('shape-active');
        }
      });
    }
    if (localStorage.getItem('linkValueThree') && localStorage.getItem('shapeThree')) {
      const linkValueThree = localStorage.getItem('linkValueThree');
      const shapeThree = localStorage.getItem('shapeThree');
      getData(linkValueThree!, shapeThree!);
      sizeWrapper.forEach((link) => {
        const linkValue = link.textContent;
        if (linkValue?.trim() === linkValueThree?.trim()) {
          link.classList.add('shape-active');
        }
      });
    }
    if (
      localStorage.getItem('countOne') &&
      localStorage.getItem('sliderLinkValue') &&
      localStorage.getItem('filterShape')
    ) {
      const countOne = localStorage.getItem('countOne');
      const sliderLinkValue = localStorage.getItem('sliderLinkValue');
      const filterShape = localStorage.getItem('filterShape');

      getDataYear(countOne!, sliderLinkValue!, filterShape!);
      if (filterShape! === 'count') {
        (outputSeek as HTMLInputElement)!.value = countOne!;
        (sliders[0] as HTMLInputElement).value = countOne!;
        (outputSeekTwo as HTMLInputElement)!.value = sliderLinkValue!;
        (sliders[1] as HTMLInputElement).value = sliderLinkValue!;
      } else if (filterShape! === 'year') {
        (outputYear as HTMLInputElement)!.value = countOne!;
        (slidersYear[0] as HTMLInputElement).value = countOne!;
        (outputYearTwo as HTMLInputElement)!.value = sliderLinkValue!;
        (slidersYear[1] as HTMLInputElement).value = sliderLinkValue!;
      }
    }
  }
  window.addEventListener('load', getLocalStorage);
};

export default active;
