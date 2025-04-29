
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.navbar ul');

  menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
