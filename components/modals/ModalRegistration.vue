<script setup>
const isOpenModalRegistration = ref(false);
</script>

<template>
  <div
    class="modal fade"
    id="modal_registration"
    tabindex="-1"
    aria-hidden="true"
  >
    <form class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Реєстрація</h1>
          <button
            type="button"
            class="btn-close modal-button-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-label-input">
          <label>Ім’я</label>
          <input class="modal-input" type="text" />
        </div>
        <div class="modal-label-input">
          <label>Електронна пошта</label>
          <input class="modal-input" type="text" />
        </div>
        <div class="modal-label-input">
          <label>Пароль</label>
          <input class="modal-input" type="text" name="name-input" />
          <button class="button-eye">
            <i class="svg__box open-eye">
              @@include('mixins/svg-icon.html', {"name": "open_eye", "class":
              "color-black svg-box_eye"})
            </i>
            <i class="svg__box close-eye">
              @@include('mixins/svg-icon.html', {"name": "close_eye", "class":
              "color-black svg-box_eye"})
            </i>
          </button>
        </div>
        <div class="modal_feedback-prefooter-text registration">
          “Відправляючи форму ви погоджуєтесь на
          <a href="#">Умови використання</a> та
          <a href="#">Політику конфіденційності</a>.”
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn-modal-green"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Зареєструватися
          </button>
          <button
            type="button"
            class="btn-modal-gray"
            data-bs-toggle="modal"
            data-bs-target="#modal_vhid"
          >
            У мене є аккаунт
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
