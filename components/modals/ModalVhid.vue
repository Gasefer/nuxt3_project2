<script setup>
const isOpenModalVhid = ref(false);
</script>

<template>
  <div class="modal fade" id="modal_vhid" tabindex="-1" aria-hidden="true">
    <form class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Вхід</h1>
          <button
            type="button"
            class="btn-close modal-button-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-label-input">
          <label>Електронна пошта</label>
          <input class="modal-input" type="text" />
        </div>
        <div class="modal-label-input">
          <label>Пароль</label>
          <input class="modal-input" type="text" name="name-input" />
          <button class="button-eye" id="buttonEye">
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
        <div class="modal-forgot-password">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="ModalflexCheck"
              checked
            />
            <label class="form-check-label" for="ModalflexCheck">
              <i class="modal__box-for-checkbox checked">
                @@include('mixins/svg-icon.html', {"name": "checkmark", "class":
                "svg-size_checkmark color-gray"})
              </i>
              Запам’ятати мене
            </label>
          </div>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modal_recovery-email"
            >Забули пароль?</a
          >
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn-modal-green"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Увійти
          </button>
          <button
            type="button"
            class="btn-modal-gray"
            data-bs-toggle="modal"
            data-bs-target="#modal_registration"
          >
            Зареєструватися
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
