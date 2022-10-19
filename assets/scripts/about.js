function showMenu() {
  document.querySelector('.main-page').style.display = 'none';
  document.querySelector('.mobile-popup-menu').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.main-page').style.display = 'block';
  document.querySelector('.mobile-popup-menu').style.display = 'none';
}

document.querySelector('.fa-bars').addEventListener('click', showMenu);
document.querySelector('#close-button').addEventListener('click', hideMenu);
