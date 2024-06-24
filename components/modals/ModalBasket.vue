<!-- ModalBasket.vue -->
<script setup>
import { computed } from "vue";
import { useModalsStore } from "~/components/modals/store.vue";

const store = useModalsStore();

function closeModal() {
  store.hideModal("ModalBasket");
}
</script>

<template>
  <ModalsModalWrapper modalName="ModalBasket" class="modal_basket">
    <form class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Корзина</h1>
          <button type="button" @click="closeModal">
            <div class="svg__box">
              <BaseIcon iconName="svg-closer" customClass="color-dark-gray" />
            </div>
          </button>
        </div>
        <div class="modal-body">
          <!-- Вміст модалки -->
          <div class="modal-box-for-item">
            <!-- Товар 1 -->
            <div class="modal-commodity-item">
              <img src="/work/commodity.jpg" alt="commodity" />
              <div class="modal-title-and-count">
                <div class="modal-title-of-item">Календула лікарська</div>
                <div class="modal-title-and-count-block">
                  <div class="commodity_buy-count-input">
                    <button
                      class="value-control decreaseBtn"
                      title="Decrease value"
                      aria-label="Decrease value"
                    >
                      -
                    </button>
                    <input
                      class="value-input numberInput"
                      type="number"
                      value="0"
                      min="0"
                      max="10000000"
                      name="numberInput"
                    />
                    <button
                      class="value-control increaseBtn"
                      title="Increase value"
                      aria-label="Increase value"
                    >
                      +
                    </button>
                  </div>
                  <div class="modal-price-of-item">3 грн</div>
                </div>
              </div>
              <div class="svg__box">
                <BaseIcon iconName="svg-closer" customClass="color-dark-gray" />
              </div>
            </div>
            <!-- Додаткові товари -->
          </div>
        </div>
        <div class="modal-footer">
          <div class="modal-all">
            <p>Всього</p>
            <div class="horizontal-separator"></div>
            <p><span>6</span>грн</p>
          </div>
          <div class="modal-footer-buttons">
            <a href="./checkout.html" class="btn-modal-green"
              >Оформити замовлення</a
            >
            <button type="button" class="btn-modal-gray" @click="closeModal">
              Продовжити покупки
            </button>
          </div>
        </div>
        <div class="modal-body-empty" v-if="false">
          <!-- Поки що приховано -->
          <img src="/work/basket-sad-smile.png" alt="basket-sad-smile" />
          <p>Кошик порожній</p>
        </div>
        <div class="modal-footer-empty" v-if="false">
          <!-- Поки що приховано -->
          <button type="button" class="btn-modal-green" @click="closeModal">
            До покупок
          </button>
        </div>
      </div>
    </form>
  </ModalsModalWrapper>
</template>
