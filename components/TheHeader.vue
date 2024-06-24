<script setup>
import { ref, inject, onMounted } from "vue";
import { useModalsStore } from "~/components/modals/store.vue";

const { toggleModal } = useModalsStore();
const store = useModalsStore();

function openModal(modalName) {
  store.toggleModal(modalName);
}

function closeModal() {
  store.toggleModal("basket");
}

const isHeaderButtonClick = ref(false);
const isFirstScreenCatalogListClick = ref(false);

onMounted(() => {
  const headerButtonCatalog = document.querySelector(".header__button-catalog");
  const bgGray = document.querySelector(".bg-gray");
  const mobileMenu = document.querySelector(".mobile_menu");
  const xCloseElements = document.querySelectorAll(".x_close");
  const xOpenElements = document.querySelectorAll(".x_open");
  const catalogHeaderContainer = document.querySelector(
    ".catalog_header-container"
  );
  const firstScreenCatalogList = document.querySelector(
    ".first-screen_catalog-list"
  );

  if (headerButtonCatalog) {
    headerButtonCatalog.addEventListener("click", () => {
      toggleMenu();
    });
  }

  if (firstScreenCatalogList) {
    firstScreenCatalogList.addEventListener("click", () => {
      isFirstScreenCatalogListClick.value = true;
    });
  }

  document.addEventListener("click", (event) => {
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
    isHeaderButtonClick.value = !isHeaderButtonClick.value;
    bgGray.classList.toggle("bg-gray--active");
    document.body.style.overflow = isHeaderButtonClick.value
      ? "hidden"
      : "visible";
    xCloseElements.forEach((element) => {
      element.style.display = isHeaderButtonClick.value ? "flex" : "none";
    });
    xOpenElements.forEach((element) => {
      element.style.display = isHeaderButtonClick.value ? "none" : "flex";
    });
    headerButtonCatalog.classList.toggle("header__button-catalog--active");
    catalogHeaderContainer.style.display = isHeaderButtonClick.value
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
    headerButtonCatalog.classList.remove("header__button-catalog--active");
    catalogHeaderContainer.style.display = "none";
    mobileMenu.classList.remove("active");
    isHeaderButtonClick.value = false;
    isFirstScreenCatalogListClick.value = false;
  }

  const buttonCatalog = document.querySelector(".header__button-catalog");
  if (buttonCatalog) {
    const svgSizeCloser = buttonCatalog.querySelector(".svg-size_closer");
    const svgSizeMenu = buttonCatalog.querySelector(".svg-size_menu");

    buttonCatalog.addEventListener("mouseenter", () => {
      svgSizeCloser.classList.add("color-green");
      svgSizeMenu.classList.add("color-green");
      svgSizeCloser.classList.add("svg__transition");
      svgSizeMenu.classList.add("svg__transition");
    });

    buttonCatalog.addEventListener("mouseleave", () => {
      svgSizeCloser.classList.remove("color-green");
      svgSizeMenu.classList.remove("color-green");
      svgSizeCloser.classList.remove("svg__transition");
      svgSizeMenu.classList.remove("svg__transition");
    });
  }
});
</script>

<template>
  <header class="header">
    <div class="bg-gray"></div>
    <div class="container">
      <div class="header_container">
        <div class="header__upper-block">
          <ul class="header__list">
            <li class="header_list-item"><a href="#">Культура</a></li>
            <li class="header_list-item"><a href="#">Прайс</a></li>
            <li class="header_list-item"><a href="#">Акції</a></li>
            <li class="header_list-item">
              <a href="./delivery.html">Доставка</a>
            </li>
            <li class="header_list-item"><a href="#">Контакти</a></li>
          </ul>
          <div class="header__contacts">
            <div class="header__phone">
              <a href="tel:+380507411310">(050) 741-13-10</a>
              <div class="svg__box">
                <BaseIcon
                  iconName="svg-arrow_bottom"
                  customClass="svg_arrow-bottom__box"
                />
              </div>

              <div class="header__phone-block">
                <a href="tel:+380681958018">(068) 195-80-18</a>
                <a href="tel:+380636792601">(063) 679-26-01</a>
              </div>
            </div>
            <a
              label="Open"
              @click="isOpenModalFeedback = true"
              class="header_feedback"
              >Зворотній зв’язок</a
            >
          </div>
        </div>
        <div class="header__bottom-block">
          <div class="mobile_menu">
            <HeaderMobileMenu />
          </div>
          <a href="./home.html" class="header__logo">
            <i><NuxtImg class="logo" src="/work/logo.svg" alt="logo" /></i>
          </a>
          <button
            class="header__button-catalog"
            data-target=".offcanvas-to-close"
          >
            <i class="svg__box x_open">
              <BaseIcon iconName="svg-menu" customClass="svg-size_menu" />
            </i>
            <i class="svg__box x_close">
              <BaseIcon
                iconName="svg-closer"
                customClass="svg-size_closer"
                width="19rem"
                height="16rem"
              />
            </i>
            <span class="header__button-catalog-p">Каталог</span>
          </button>
          <div class="header-input-container">
            <input
              type="text"
              class="header__search"
              placeholder="Я шукаю..."
            />
            <div class="svg__box absolute-search">
              <BaseIcon iconName="svg-search" customClass="svg_size-search" />
            </div>
          </div>
          <div class="header__navigation">
            <a
              class="header__navigation-link link_close-mobile"
              data-bs-toggle="modal"
              data-bs-target="#modal_vhid"
            >
              <BaseIcon
                iconName="svg-person"
                customClass="svg-size_header-person"
              /> </a
            ><a href="#" class="header__navigation-link link_close-mobile">
              <BaseIcon
                iconName="svg-like"
                customClass="svg-size_header-like"
              />
            </a>
            <a
              class="header__navigation-link"
              @click="openModal('ModalBasket')"
            >
              <BaseIcon iconName="svg-cart" customClass="svg-size_cart" />
              <span class="absolute_count">100</span></a
            >
          </div>
        </div>
        <div class="catalog_header-container">
          <HeaderCatalogHeader />
        </div>
      </div>
    </div>
  </header>
  <ModalsModalBasket :closeModal="closeModal" />
  <ModalsModalRecoveryEmail />
  <ModalsModalRecoveryKod />
  <ModalsModalRecoveryNewPassword />
  <ModalsModalRegistration />
  <ModalsModalVhid />
  <ModalsModalFeedback />
</template>
