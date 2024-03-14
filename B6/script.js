let scrollToTopButton = document.getElementsByClassName('scroll')[0];

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    // Show scrollToTopButton after 200px of scrolling down
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

scrollToTopButton.onclick = function () {
  let scrollInterval = setInterval(function () {
    if (window.pageYOffset != 0) {
      window.scrollBy(0, -80); // Adjust this number to change the speed of the scroll
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // Adjust this number to change the frequency of the scroll
};
