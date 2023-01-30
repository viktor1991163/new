const tabLinks = document.querySelectorAll('.products__item-time');


const initTab = () => {

  tabLinks.forEach((el) => {
    el.addEventListener('click', openTabs);
    el.addEventListener('keydown', openTabs);
  });

  function openTabs(el) {
    if (el.code === 'Enter' || el.code === 'Space' || el.button === 0) {
      const tabLinkss = document.querySelectorAll('.products__item-time');
      const tabContent = document.querySelectorAll('[data-money]');
      const btnTarget = el.currentTarget;
      const long = btnTarget.dataset.long;

      tabLinkss.forEach((e) => {
        e.classList.remove('products__item-time--active');
      });

      tabContent.forEach((e) => {
        e.classList.remove('active');
      });

      const tabContentActive = document.querySelectorAll(`[data-money='${long}']`);

      tabContentActive.forEach((e) => {
        e.classList.add('active');
      });

      btnTarget.classList.add('products__item-time--active');
    }
  }
}

export {initTab};
