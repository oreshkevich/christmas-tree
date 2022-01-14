import renderCart from './renderCart';
import NumberOfCards from '../constant/constant';

const cartToys = () => {
  const { numberOfCards } = NumberOfCards;
  const switchTreePage = document.querySelector('.switch-tree-page');
  const goodsWrapper = document.querySelector('.card-container');
  const openCart = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];

    renderCart(cart);
  };

  switchTreePage!.addEventListener('click', openCart);

  goodsWrapper!.addEventListener('click', (event) => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage!.getItem('cart')!) : [];
    const card = (event!.target as HTMLElement)!.closest('.card');
    const { key } = (card as HTMLElement).dataset;
    const goods = JSON.parse(localStorage!.getItem('goods')!);
    const goodItem = goods.find((item: { num: string | undefined }) => item.num === key);
    const cartCount = document.querySelector('.cart-count');
    const index = cart.findIndex((item: { num: string | undefined }) => item.num === key);

    if ((event!.target as HTMLElement)!.classList.contains('btn-primary')) {
      if (cart.length < numberOfCards) {
        cart.push(goodItem);
        (event!.target as HTMLElement)!.classList.add('active-card');
      }
      localStorage.setItem('cart', JSON.stringify(cart));

      (cartCount as HTMLElement).textContent = cart.length;
      if (cart.length === numberOfCards) {
        const modalAuthOne = document.querySelector('.modal-auth-one');

        modalAuthOne!.classList.add('is-open-one');
      }
    } else if ((event.target as HTMLElement).classList.contains('btn-remove')) {
      (event!.target as HTMLElement)!.classList.remove('active-card');
      (event!.target as HTMLElement)!.previousElementSibling!.classList.remove('active-card');
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart(cart);
      (cartCount as HTMLElement).textContent = cart.length;
    }
  });
};

export default cartToys;
