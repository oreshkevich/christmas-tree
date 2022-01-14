/* eslint-disable max-len */
const sort = () => {
  const select = <HTMLInputElement>document.getElementById('nav');

  function insertAfter(elem: Element, refElem: Element): Element {
    return refElem!.parentNode!.insertBefore(elem, refElem.nextSibling);
  }
  function mySort(sortType: string) {
    const nav = document.querySelector('#nav-card') as HTMLElement;
    const navChildren = nav!.children;
    for (let i = 0; i < nav!.children.length; i += 1) {
      for (let j = i; j < nav!.children.length; j += 1) {
        if (+navChildren[i].getAttribute(sortType)! > +navChildren[j].getAttribute(sortType)!) {
          const replacedNode = nav!.replaceChild(nav!.children[j], nav!.children[i]);
          insertAfter(replacedNode, nav!.children[i]);
        }
      }
    }
  }

  function mySortDesc(sortType: string) {
    const items = document.querySelector('#nav-card') as HTMLElement;
    for (let i = 0; i < items.children.length - 1; i += 1) {
      for (let j = i; j < items.children.length; j += 1) {
        if (+items.children[i].getAttribute(sortType)! < +items.children[j].getAttribute(sortType)!) {
          const replacedNode = items.replaceChild(items.children[j], items.children[i]);
          insertAfter(replacedNode, items.children[i]);
        }
      }
    }
  }
  select.addEventListener('change', () => {
    const getValue = select.value;
    if (getValue === 'sort-count-max') {
      mySort('data-num');
    } else if (getValue === 'sort-count-min') {
      mySortDesc('data-num');
    } else if (getValue === 'sort-name-max') {
      mySort('data-rating');
    } else if (getValue === 'sort-name-min') {
      mySortDesc('data-rating');
    }
  });
};

export default sort;
