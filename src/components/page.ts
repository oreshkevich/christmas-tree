const page = () => {
  const pagesOne = document.querySelector('.page1');
  const pagesTwo = document.querySelector('.page2');
  const pagesThree = document.querySelector('.page3');
  const buttonSwitch = document.querySelector('.button-switch');
  const switchToysPage = document.querySelector('.switch-toys-page');
  const switchLogo = document.querySelector('.logo');
  const switchTreePage = document.querySelector('.switch-tree-page');

  buttonSwitch!.addEventListener('click', () => {
    pagesOne!.classList.add('hide');
    pagesTwo!.classList.remove('hide');
  });

  switchToysPage!.addEventListener('click', () => {
    switchToysPage!.classList.add('active-link');
    switchTreePage!.classList.remove('active-link');
    pagesOne!.classList.add('hide');

    pagesThree!.classList.add('hide');
    pagesTwo!.classList.remove('hide');
  });

  switchTreePage!.addEventListener('click', () => {
    switchTreePage!.classList.add('active-link');
    switchToysPage!.classList.remove('active-link');
    pagesOne!.classList.add('hide');
    pagesTwo!.classList.add('hide');
    pagesThree!.classList.remove('hide');
  });
  switchLogo!.addEventListener('click', () => {
    switchTreePage!.classList.remove('active-link');
    switchToysPage!.classList.remove('active-link');
    pagesTwo!.classList.add('hide');
    pagesThree!.classList.add('hide');
    pagesOne!.classList.remove('hide');
  });
};

export default page;
