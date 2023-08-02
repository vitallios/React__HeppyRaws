export let mBurg = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const headerMenu = document.querySelector('.header__menu')
  let menuOpen = false;
  
    if (!menuOpen) {
      menuBtn.classList.toggle("open");
      headerMenu.classList.toggle("header__menu-mobailOpen")
      menuOpen = true;
    } 
};
