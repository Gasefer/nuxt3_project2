<template>
  <div class="first-screen_catalog-list">
    <div class="first-screen_catalog-wriper">
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample1"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "ecolist", "class":
            "color-green svg-size_ecolist"})
          </div>
          <p class="first-screen_catalog__p">Насіння овочів європакет</p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample2"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "psychiatry", "class":
            "color-green svg-size_psychiatry"})
          </div>
          <p class="first-screen_catalog__p">Насіння овочів пакет гигант</p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample3"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "flower", "class":
            "color-green svg-size_flower"})
          </div>
          <p class="first-screen_catalog__p">Насіння квітів</p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample4"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "grass", "class":
            "color-green svg-size_grass"})
          </div>
          <p class="first-screen_catalog__p">Газонні трави</p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample1"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "bunny", "class":
            "color-green svg-size_bunny"})
          </div>
          <p class="first-screen_catalog__p">Кормові культури</p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample2"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "map", "class":
            "color-green svg-size_map"})
          </div>
          <p class="first-screen_catalog__p">Серія Зарубіжної селекції</p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample3"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "mini-search", "class":
            "color-green svg-size_mini-search"})
          </div>
          <p class="first-screen_catalog__p">
            Серія Пропуск в світ високого<br />
            врожаю інкрустоване
          </p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <a
        class="first-screen_catalog__a first-screen_catalog__link-mobile"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample4"
        role="button"
      >
        <div class="first-screen_catalog__item">
          <div class="svg__box">
            @@include('mixins/svg-icon.html', {"name": "hand_heart", "class":
            "color-green svg-size_hand_heart"})
          </div>
          <p class="first-screen_catalog__p">
            Серія Щедра грядка (інкрусоване)
          </p>
          <div class="svg__box svg__box-margin-left">
            @@include('mixins/svg-icon.html', {"name": "arrow_right", "class":
            "color-black svg_arrow__box"})
          </div>
        </div>
      </a>
      <HeaderMobile-menu-wripperMobileMenuWripper1 />
      <HeaderMobile-menu-wripperMobileMenuWripper2 />
      <HeaderMobile-menu-wripperMobileMenuWripper3 />
      <HeaderMobile-menu-wripperMobileMenuWripper4 />
      <div class="mobile-bottom-block">
        <div class="mobile-bottom_secondary-box">
          <a
            href="#"
            class="mobile-bottom_secondary-box-item"
            data-bs-toggle="modal"
            data-bs-target="#modal_vhid"
          >
            <div class="link_menu-mobile">
              @@include('mixins/svg-icon.html', {"name": "person", "class":
              "color-black svg-size_header-person"})
            </div>
            <p>Особисті дані</p>
          </a>
          <a href="#" class="mobile-bottom_secondary-box-item">
            <div class="link_menu-mobile">
              @@include('mixins/svg-icon.html', {"name": "like", "class":
              "color-black svg-size_header-like"})
            </div>
            <p>Вибране</p>
          </a>
        </div>
        <div class="mobile-bottom_main-box">
          <ul class="header__list header__list-mobile">
            <li class="header_list-item"><a href="#">Культура</a></li>
            <li class="header_list-item"><a href="#">Прайс</a></li>
            <li class="header_list-item"><a href="#">Акції</a></li>
            <li class="header_list-item"><a href="#">Доставка</a></li>
            <li class="header_list-item"><a href="#">Контакти</a></li>
          </ul>
          <div class="mobile-bottom-block__contacts">
            <div class="mobile-bottom-numbers">
              <a href="tel:+380507411310">(050) 741-13-10</a>
              <a href="tel:+380681958018">(068) 195-80-18</a>
            </div>
            <a
              data-bs-toggle="modal"
              data-bs-target="#modal_feedback"
              href="#"
              class="header_feedback"
              >Зворотній зв’язок</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
