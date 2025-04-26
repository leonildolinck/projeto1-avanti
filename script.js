const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});


document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");
  const resultText = document.getElementById("search-result");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    const searchValue = searchInput.value.trim();

    if (searchValue) {
      resultText.textContent = `Você buscou por: '${searchValue}'`;
    } else {
      resultText.textContent = "Busca invalida.";
    }
  });
});
