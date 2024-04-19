// Toggle navbar menu
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
const searchIcon = document.getElementById("search-icon");
const searchContainer = document.querySelector(".search-container");

// Toggle search container on click of search icon
searchIcon.addEventListener("click", () => {
  searchContainer.style.display =
    searchContainer.style.display === "block" ? "none" : "block";
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Function to get query parameter from URL
  const getQueryParam = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  // Get the video ID from the URL query parameter
  const videoId = getQueryParam("video");

  // If video ID is present, set the src attribute of the iframe
  if (videoId) {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
  } else {
    // Handle case where video ID is not provided
    console.error("No video ID provided in the URL");
  }
});
