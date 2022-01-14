const snow = () => {
  const snowflake = document.querySelector('.snowflake');
  console.log(snowflake);
  let timer: ReturnType<typeof setTimeout> | void;

  function createSnowFlake() {
    const snowWrapper = document.querySelector('.snow-wrapper');
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');
    const snowFlakeStyle = snowFlake.style;
    snowFlakeStyle.left = `${Math.random() * window.innerWidth - 150}px`;
    snowFlakeStyle.animationDuration = `${Math.random() * 3 + 2}s`;
    snowFlakeStyle.opacity = Math.random().toString();
    snowFlakeStyle.fontSize = `${Math.random() * 10 + 10}px`;

    snowWrapper!.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 5000);
  }

  snowflake!.addEventListener('click', () => {
    if (timer) timer = clearInterval(timer);
    else timer = setInterval(createSnowFlake, 50);

    localStorage.setItem('timer', JSON.stringify(timer));
  });
  function getLocalStorage() {
    if (localStorage.getItem('timer')) {
      const checkedTimer = localStorage.getItem('timer');
      if (checkedTimer !== 'undefined') {
        if (timer) timer = clearInterval(timer);
        else timer = setInterval(createSnowFlake, 50);
      }
    }
  }
  window.addEventListener('load', getLocalStorage);
};

export default snow;
