let dropdownBtn = document.getElementById("dropdown-btn");
let dropdownList = document.getElementById("select-sort");

if (dropdownBtn) {
  dropdownBtn.addEventListener("click", function () {
    dropdownList.style.display =
      dropdownList.style.display === "flex" ? "none" : "flex";
    dropdownBtn.style.borderColor =
      dropdownList.style.display === "flex" ? "#2a8927" : "#e9e8e8";
  });

  dropdownList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      dropdownBtn.querySelector("span").textContent = e.target.textContent;
      dropdownList.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.style.display = "none";
    }
  });
}

var isHeaderButtonClick = false;
var isFirstScreenCatalogListClick = false;

var headerButtonCatalog1 = document.querySelector(".header__button-catalog");
if (headerButtonCatalog1) {
  var bgGray = document.querySelector(".bg-gray");
  var mobileMenu = document.querySelector(".mobile_menu");
  var xCloseElements = document.querySelectorAll(".x_close");
  var xOpenElements = document.querySelectorAll(".x_open");
  var catalogHeaderContainer = document.querySelector(
    ".catalog_header-container"
  );
  var firstScreenCatalogList = document.querySelector(
    ".first-screen_catalog-list"
  );

  headerButtonCatalog1.addEventListener("click", function (event) {
    toggleMenu();
  });

  firstScreenCatalogList.addEventListener("click", function (event) {
    isFirstScreenCatalogListClick = true;
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".header__button-catalog") &&
      !event.target.closest(".mobile_menu") &&
      !event.target.closest(".x_close") &&
      !event.target.closest(".x_open")
    ) {
      closeMenu();
    }
  });

  function toggleMenu() {
    isHeaderButtonClick = !isHeaderButtonClick;
    bgGray.classList.toggle("bg-gray--active");
    document.body.style.overflow = isHeaderButtonClick ? "hidden" : "visible";
    xCloseElements.forEach((element) => {
      element.style.display = isHeaderButtonClick ? "flex" : "none";
    });
    xOpenElements.forEach((element) => {
      element.style.display = isHeaderButtonClick ? "none" : "flex";
    });
    headerButtonCatalog1.classList.toggle("header__button-catalog--active");
    catalogHeaderContainer.style.display = isHeaderButtonClick
      ? "block"
      : "none";
    mobileMenu.classList.toggle("active");
  }

  function closeMenu() {
    bgGray.classList.remove("bg-gray--active");
    document.body.style.overflow = "visible";
    xCloseElements.forEach((element) => {
      element.style.display = "none";
    });
    xOpenElements.forEach((element) => {
      element.style.display = "flex";
    });
    headerButtonCatalog1.classList.remove("header__button-catalog--active");
    catalogHeaderContainer.style.display = "none";
    mobileMenu.classList.remove("active");
    isHeaderButtonClick = false;
    isFirstScreenCatalogListClick = false;
  }

  // Отримуємо елементи кнопки каталогу та svg-іконок
  const buttonCatalog = document.querySelector(".header__button-catalog");
  const svgSizeCloser = buttonCatalog.querySelector(".svg-size_closer");
  const svgSizeMenu = buttonCatalog.querySelector(".svg-size_menu");

  // Додаємо обробник події для події наведення миші на кнопку каталогу
  buttonCatalog.addEventListener("mouseenter", function () {
    // Додаємо клас .color-green до svg-іконок
    svgSizeCloser.classList.add("color-green");
    svgSizeMenu.classList.add("color-green");
    svgSizeCloser.classList.add("svg__transition");
    svgSizeMenu.classList.add("svg__transition");
  });

  // Додаємо обробник події для події зняття курсора з кнопки каталогу
  buttonCatalog.addEventListener("mouseleave", function () {
    // Видаляємо клас .color-green з svg-іконок
    svgSizeCloser.classList.remove("color-green");
    svgSizeMenu.classList.remove("color-green");
    svgSizeCloser.classList.remove("svg__transition");
    svgSizeMenu.classList.remove("svg__transition");
  });
}

let select2_auditing = document.getElementById("deliverySelect");
if (select2_auditing) {
  $(document).ready(function () {
    $(".js-example-basic-single").select2({
      language: {
        noResults: function () {
          return "Немає результатів пошуку"; // Ваш власний текст
        },
      },
    });

    // Використання Select2 API для обробки події change
    $("#deliverySelect").on("change", function () {
      let selectedValue = $(this).val();

      let novaPoshtaBlock = document.getElementById("novaPoshtaBlock");
      let courierNpBlock = document.getElementById("courierNpBlock");
      let pickupStoreBlock = document.getElementById("pickupStoreBlock");

      // Приховуємо всі блоки спочатку
      novaPoshtaBlock.style.display = "none";
      courierNpBlock.style.display = "none";
      pickupStoreBlock.style.display = "none";

      // Показуємо потрібний блок залежно від вибраного значення
      switch (selectedValue) {
        case "nova_poshta":
          novaPoshtaBlock.style.display = "block";
          break;
        case "courier_np":
          courierNpBlock.style.display = "block";
          break;
        case "pickup_store":
          pickupStoreBlock.style.display = "block";
          break;
      }
    });
    $(".js-example-basic-single-city").select2({
      placeholder: "Виберіть місто",
      language: {
        noResults: function () {
          return "Немає результатів пошуку"; // Ваш власний текст
        },
      },
    });
    $(".js-example-basic-single-viddilenya").select2({
      placeholder: "Виберіть відділення",
      language: {
        noResults: function () {
          return "Немає результатів пошуку"; // Ваш власний текст
        },
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const radioContainers = document.querySelectorAll(
    ".checkout_radio-container"
  );

  radioContainers.forEach((container) => {
    const radioInput = container.querySelector(".form-check-input");
    const spanElement = container.querySelector(".checkout_radio-span");

    const updateSpanVisibility = () => {
      radioContainers.forEach((c) => {
        c.style.background = "#f8f8f8";
        c.querySelector(".checkout_radio-span").style.display = "none";
      });
      if (radioInput.checked) {
        spanElement.style.display = "block";
        container.style.background = "#E9E8E8";
      }
    };

    // Initial check to handle the state when the page loads
    updateSpanVisibility();

    // Add event listener for change events
    radioInput.addEventListener("change", updateSpanVisibility);
  });
});

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

var mini_swiper1 = new Swiper(".mini_swiper1", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next1",
    prevEl: ".mini-swiper-button-prev1",
  },
});

var mini_swiper2 = new Swiper(".mini_swiper2", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next2",
    prevEl: ".mini-swiper-button-prev2",
  },
});

var mini_swiper3 = new Swiper(".mini_swiper3", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next3",
    prevEl: ".mini-swiper-button-prev3",
  },
});

var mini_swiper4 = new Swiper(".mini_swiper4", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next4",
    prevEl: ".mini-swiper-button-prev4",
  },
});

var mini_swiper5 = new Swiper(".mini_swiper5", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next5",
    prevEl: ".mini-swiper-button-prev5",
  },
});

// Отримуємо кнопку "like"
var likeButtons = document.querySelectorAll(".like-button");

// Додаємо обробник подій для кожної кнопки
likeButtons.forEach(function (likeButton) {
  likeButton.addEventListener("mouseover", function (event) {
    // Отримуємо стани елементів .button_like та .button_like-active для цієї кнопки
    var like = likeButton.querySelector(".button_like");
    var likeActive = likeButton.querySelector(".button_like-active");

    // Встановлюємо видимість для hover
    like.style.display = "none";
    likeActive.style.display = "block";
    likeActive.style.cursor = "pointer";
  });

  likeButton.addEventListener("mouseout", function (event) {
    // Отримуємо стани елементів .button_like та .button_like-active для цієї кнопки
    var like = likeButton.querySelector(".button_like");
    var likeActive = likeButton.querySelector(".button_like-active");

    // Повертаємо видимість після hover
    like.style.display = "block";
    likeActive.style.display = "none";
  });
});

var modalFeedback = document.getElementById("modal_feedback");
if (modalFeedback) {
  modalFeedback.addEventListener("transitionend", function () {
    var body = document.querySelector("body");
    if (modalFeedback.classList.contains("show")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });
}

let offcanvas_sortmenu = document.getElementById("offcanvasSortMenu");

if (offcanvas_sortmenu) {
  // offcanvas scrolling
  var offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasSortMenu")
  );
  var offcanvasToggle = document.querySelector('[data-bs-toggle="offcanvas"]');
  var body = document.querySelector("body");

  // Додаємо клас "overflow-hidden" до body при відкритті підкладки offcanvas
  offcanvas._element.addEventListener("shown.bs.offcanvas", function () {
    body.style.overflow = "hidden";
    body.style.paddingRight = "0px";
  });

  // Видаляємо клас "overflow-hidden" при закритті підкладки offcanvas
  offcanvas._element.addEventListener("hidden.bs.offcanvas", function () {
    body.style.overflow = "visible";
    body.style.paddingRight = "0px";
  });
}

//button offcanvas menu
const headerButtonCatalog = document.querySelector(
  '[data-target=".offcanvas-to-close"]'
);

document.addEventListener("show.bs.offcanvas", (event) => {
  const offcanvasElement = event.target;
  if (offcanvasElement.classList.contains("offcanvas-to-close")) {
    headerButtonCatalog.style.display = "none"; // Приховати кнопку при відкритті offcanvas
  }
});

document.addEventListener("hide.bs.offcanvas", (event) => {
  const offcanvasElement = event.target;
  if (offcanvasElement.classList.contains("offcanvas-to-close")) {
    headerButtonCatalog.style.display = ""; // Відобразити кнопку при закритті offcanvas
  }
});

// Спостерігач для відстеження змін у DOM
var observer = new MutationObserver(function (mutationsList, observer) {
  var body = document.querySelector("body");
  var anyModalVisible = document.querySelector(".modal.show") !== null;

  if (anyModalVisible) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// Налаштування спостерігача для відстеження змін атрибутів у всіх модальних вікнах
observer.observe(document.body, {
  attributes: true,
  subtree: true,
  attributeFilter: ["class"],
});

let sort_input = document.getElementById("sortInput1");

if (sort_input) {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, "#868686", "#2A8927", controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, "#868686", "#2A8927", controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, "#868686", "#2A8927", toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, "#868686", "#2A8927", toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector("#toSlider");
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector("#fromSlider");
  const toSlider = document.querySelector("#toSlider");
  const fromInput = document.querySelector("#fromInput");
  const toInput = document.querySelector("#toInput");
  fillSlider(fromSlider, toSlider, "#868686", "#2A8927", toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () =>
    controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () =>
    controlToInput(toSlider, fromInput, toInput, toSlider);

  document.addEventListener("DOMContentLoaded", function () {
    const checkboxesContainers = document.querySelectorAll(".sort-menu-block");

    checkboxesContainers.forEach(function (container) {
      const checkboxes = container.querySelectorAll(".form-check-input");
      const boxForCheckboxes = container.querySelectorAll(
        ".sort-menu__box-for-checkbox"
      );

      checkboxes.forEach(function (checkbox, index) {
        const boxForCheckbox = boxForCheckboxes[index];

        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            boxForCheckbox.classList.add("checkbox_checked");
          } else {
            boxForCheckbox.classList.remove("checkbox_checked");
          }
        });

        boxForCheckbox.addEventListener("click", function () {
          checkbox.checked = !checkbox.checked;
          if (checkbox.checked) {
            boxForCheckbox.classList.add("checkbox_checked");
          } else {
            boxForCheckbox.classList.remove("checkbox_checked");
          }
        });
      });
    });
  });

  // Close sort menu
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".sort_closer-button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.style.display = "none";
        }
      });
    });
  });

  // sort-range-mobile

  const fromSlider1 = document.querySelector("#fromSlider1");
  const toSlider1 = document.querySelector("#toSlider1");
  const fromInput1 = document.querySelector("#fromInput1");
  const toInput1 = document.querySelector("#toInput1");
  fillSlider1(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
  setToggleAccessible1(toSlider1);

  fromSlider1.oninput = () =>
    controlFromSlider1(fromSlider1, toSlider1, fromInput1);
  toSlider1.oninput = () => controlToSlider1(fromSlider1, toSlider1, toInput1);
  fromInput1.oninput = () =>
    controlFromInput1(fromSlider1, fromInput1, toInput1, toSlider1);
  toInput1.oninput = () =>
    controlToInput1(toSlider1, fromInput1, toInput1, toSlider1);

  function controlFromInput1(
    fromSlider1,
    fromInput1,
    toInput1,
    controlSlider1
  ) {
    const [from1, to1] = getParsed(fromInput1, toInput1);
    fillSlider1(fromInput1, toInput1, "#868686", "#2A8927", controlSlider1);
    if (from1 > to1) {
      fromSlider1.value = to1;
      fromInput1.value = to1;
    } else {
      fromSlider1.value = from1;
    }
  }

  function controlToInput1(toSlider1, fromInput1, toInput1, controlSlider1) {
    const [from1, to1] = getParsed(fromInput1, toInput1);
    fillSlider1(fromInput1, toInput1, "#868686", "#2A8927", controlSlider1);
    setToggleAccessible1(toInput1);
    if (from1 <= to1) {
      toSlider1.value = to1;
      toInput1.value = to1;
    } else {
      toInput1.value = from1;
    }
  }

  function controlFromSlider1(fromSlider1, toSlider1, fromInput1) {
    const [from1, to1] = getParsed(fromSlider1, toSlider1);
    fillSlider1(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
    if (from1 > to1) {
      fromSlider1.value = to1;
      fromInput1.value = to1;
    } else {
      fromInput1.value = from1;
    }
  }

  function controlToSlider1(fromSlider1, toSlider1, toInput1) {
    const [from1, to1] = getParsed(fromSlider1, toSlider1);
    fillSlider1(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
    setToggleAccessible1(toSlider1);
    if (from1 <= to1) {
      toSlider1.value = to1;
      toInput1.value = to1;
    } else {
      toInput1.value = from1;
      toSlider1.value = from1;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from1 = parseInt(currentFrom.value, 10);
    const to1 = parseInt(currentTo.value, 10);
    return [from1, to1];
  }

  function fillSlider1(from1, to1, sliderColor1, rangeColor1, controlSlider1) {
    const rangeDistance1 = to1.max - to1.min;
    const fromPosition1 = from1.value - to1.min;
    const toPosition1 = to1.value - to1.min;
    controlSlider1.style.background = `linear-gradient(
      to right,
      ${sliderColor1} 0%,
      ${sliderColor1} ${(fromPosition1 / rangeDistance1) * 100}%,
      ${rangeColor1} ${(fromPosition1 / rangeDistance1) * 100}%,
      ${rangeColor1} ${(toPosition1 / rangeDistance1) * 100}%, 
      ${sliderColor1} ${(toPosition1 / rangeDistance1) * 100}%, 
      ${sliderColor1} 100%)`;
  }

  function setToggleAccessible1(currentTarget) {
    const toSlider1 = document.querySelector("#toSlider1");
    if (Number(currentTarget.value) <= 0) {
      toSlider1.style.zIndex = 2;
    } else {
      toSlider1.style.zIndex = 0;
    }
  }
}

let modal_flex_check = document.getElementById("ModalflexCheck");
if (modal_flex_check) {
  let modal_box = document.querySelector(".modal__box-for-checkbox");
  modal_flex_check.addEventListener("click", function () {
    if (modal_flex_check.checked) {
      modal_box.classList.add("checked");
    }
    if (!modal_flex_check.checked) {
      modal_box.classList.remove("checked");
    }
  });
}

let buttons_eye = document.querySelectorAll(".button-eye");
if (buttons_eye.length > 0) {
  buttons_eye.forEach((button_eye) => {
    let open_eye = button_eye.querySelector(".open-eye");
    let close_eye = button_eye.querySelector(".close-eye");

    // Ініціалізуємо стан для кожної кнопки
    button_eye.dataset.booleanEye = "false";

    button_eye.addEventListener("click", function (event) {
      event.preventDefault(); // Запобігаємо стандартній поведінці

      if (button_eye.dataset.booleanEye === "false") {
        open_eye.style.display = "none";
        close_eye.style.display = "block";
        button_eye.dataset.booleanEye = "true";
      } else {
        open_eye.style.display = "block";
        close_eye.style.display = "none";
        button_eye.dataset.booleanEye = "false";
      }
    });
  });
}

var swiper = new Swiper(".my_swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let btnText = document.getElementById("myBtnAbout");
if (btnText) {
  let moreText = document.getElementById("about-us-more");
  let btnTextSpan = btnText.querySelector("span");
  let btnTextI = btnText.querySelector("i");
  let aboutUsUnderhead = document.querySelector(".about-us_underhead");
  let aboutUsOpen = true;

  function myFunctionAbout() {
    if (aboutUsOpen === false) {
      btnTextSpan.innerHTML = "Сховати";
      btnTextI.style.transform = "rotate(180deg)";
      moreText.style.display = "block";
      aboutUsOpen = true;
      aboutUsUnderhead.style.background = "";
      aboutUsUnderhead.style.webkitBackgroundClip = "";
      aboutUsUnderhead.style.webkitTextFillColor = "";
      aboutUsUnderhead.style.backgroundClip = "";
      aboutUsUnderhead.style.textFillColor = "";
    } else {
      btnTextSpan.innerHTML = "Читати далі";
      btnTextI.style.transform = "rotate(0deg)";
      moreText.style.display = "none";
      aboutUsOpen = false;
      aboutUsUnderhead.style.background =
        "linear-gradient(to top, #f8f8f8, #121212)";
      aboutUsUnderhead.style.webkitBackgroundClip = "text";
      aboutUsUnderhead.style.webkitTextFillColor = "transparent";
      aboutUsUnderhead.style.backgroundClip = "text";
      aboutUsUnderhead.style.textFillColor = "transparent";
    }
  }
  myFunctionAbout();
}
