const background = () => {
  const treeContainer = document.querySelectorAll('.tree');

  treeContainer!.forEach((elem) => {
    elem.addEventListener('click', () => {
      const datasetTree = (elem as HTMLElement)!.dataset.tree;
      const imgSrc = <HTMLImageElement>document.getElementById('img-tree');
      imgSrc.src = `./assets/tree/${datasetTree}.png`;
      const imgSrcLocal = imgSrc.src;
      localStorage.setItem('imgSrcLocal', imgSrcLocal);
    });
  });

  const scenery = document.querySelectorAll('.scenery');

  scenery!.forEach((elem) => {
    elem.addEventListener('click', () => {
      const datasetScenery = (elem as HTMLElement)!.dataset.scenery;
      console.log(datasetScenery);
      const mainTreeContainer = <HTMLImageElement>document.querySelector('.main-tree-container');
      mainTreeContainer!.style.backgroundImage = `url('assets/bg/${datasetScenery}.jpg')`;
      const mainBackground = mainTreeContainer!.style.backgroundImage;
      localStorage.setItem('mainBackground', mainBackground);
    });
  });
  function getLocalStorage() {
    if (localStorage.getItem('imgSrcLocal')) {
      const imgSrcLocalGet = localStorage.getItem('imgSrcLocal');
      const url = imgSrcLocalGet!.split('/').pop();
      const imgSrc = <HTMLImageElement>document.getElementById('img-tree');
      imgSrc.src = `./assets/tree/${url}`;
    }
    if (localStorage.getItem('mainBackground')) {
      const mainBackground = localStorage.getItem('mainBackground');
      const mainTreeContainer = <HTMLImageElement>document.querySelector('.main-tree-container');
      mainTreeContainer!.style.backgroundImage = mainBackground!.toString();
    }
  }
  window.addEventListener('click', getLocalStorage);
};

export default background;
