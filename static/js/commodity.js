let commodityBuyInputs = document.querySelectorAll(
  ".commodity_buy-count-input"
);

if (commodityBuyInputs) {
  document.querySelectorAll(".numberInput").forEach((input, index) => {
    const decreaseBtn = document.querySelectorAll(".decreaseBtn")[index];
    const increaseBtn = document.querySelectorAll(".increaseBtn")[index];

    function updateButtonState() {
      if (input.value == 0) {
        decreaseBtn.classList.add("disabled");
      } else {
        decreaseBtn.classList.remove("disabled");
      }
    }

    // Ініціалізація стану кнопок для всіх елементів
    updateButtonState();

    // Додавання події зміни для кожного поля введення
    input.addEventListener("input", () => {
      updateButtonState();
    });

    // Додавання подій натискання на кнопки
    decreaseBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Зупиняє перезавантаження або перезавантаження модального вікна
      if (input.value > 0) {
        input.value--;
        updateButtonState();
      }
    });

    increaseBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Зупиняє перезавантаження або перезавантаження модального вікна
      input.value++;
      updateButtonState();
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const likeBlock = document.querySelector(".commodity_buy-like-block");
    const like = document.querySelector(".commodity-buy-like");
    const likeActive = document.querySelector(".commodity-buy-like-active");

    if (likeBlock) {
      likeBlock.addEventListener("click", function () {
        if (like.style.display === "none") {
          like.style.display = "block";
          likeActive.style.display = "none";
        } else {
          like.style.display = "none";
          likeActive.style.display = "block";
        }
      });
    }
  });

  // swiper
  var thumbSwiper = new Swiper(".thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 4.8,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 7.9,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 7.6,
        spaceBetween: 15,
      },
    },
  });

  var mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next_commodity",
      prevEl: ".swiper-button-prev_commodity",
    },
    thumbs: {
      swiper: thumbSwiper,
    },
  });
}

let modalBasket = document.getElementById("modal_basket");
if (modalBasket) {
  let booleanCatalogModal = true;
  let emptyCatalogModalBody = modalBasket.querySelector(".modal-body-empty");
  let catalogModalBody = modalBasket.querySelector(".modal-body");
  let catalogModalFooter = modalBasket.querySelector(".modal-footer");
  let emptyCatalogModalFooter = modalBasket.querySelector(
    ".modal-footer-empty"
  );
  function updateModalDisplay() {
    if (booleanCatalogModal) {
      catalogModalBody.style.display = "block";
      catalogModalFooter.style.display = "block";
      emptyCatalogModalBody.style.display = "none";
      emptyCatalogModalFooter.style.display = "none";
    } else {
      catalogModalBody.style.display = "none";
      catalogModalFooter.style.display = "none";
      emptyCatalogModalBody.style.display = "block";
      emptyCatalogModalFooter.style.display = "block";
    }
  }

  // Initial update
  updateModalDisplay();
}
