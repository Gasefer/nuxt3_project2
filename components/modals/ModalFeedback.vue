<script setup>
import { inject } from "vue";

const isOpenModalFeedback = inject("isOpenModalFeedback");
</script>

<template>
  <div>
    <UModal v-model="isOpenModalFeedback">
      <form class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal_feedback-header">
            <div class="modal_feedback-header_text">
              <h1 class="modal-title fs-5" id="modal_feedback-label">
                Зворотній зв’язок
              </h1>
              <button
                type="button"
                class="btn-close modal_feedback-button-close"
                @click="isOpenModalFeedback = false"
              ></button>
            </div>
            <p>Ми зв’яжемось з вами протягом 5хв</p>
          </div>
          <div class="modal_feedback-phone">
            <p>Телефон <span>*</span></p>
            <input
              class="form-group__input rounded-pill"
              type="tel"
              name="phone-input"
              placeholder="+38 "
              inputmode="numeric"
              data-inputmask="'mask': '+38 (099) 999-99-99'"
            />
          </div>
          <div class="modal_feedback-name">
            <p>Ім’я</p>
            <input
              class="form-group__input rounded-pill"
              type="text"
              name="name-input"
            />
          </div>
          <div class="modal_feedback-prefooter-text">
            “Відправляючи форму ви погоджуєтесь на
            <a href="#">Умови використання</a> та
            <a href="#">Політику конфіденційності</a>.”
          </div>
          <div class="modal_feedback-footer">
            <button type="button" class="btn btn-primary">
              Отримати консультацію
            </button>
          </div>
        </div>
      </form>
    </UModal>
  </div>
</template>
