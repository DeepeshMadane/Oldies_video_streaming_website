

// Toggle navbar menu
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
const searchIcon = document.getElementById('search-icon');
const searchContainer = document.querySelector('.search-container');

// Toggle search container on click of search icon
searchIcon.addEventListener('click', () => {
  searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
});
