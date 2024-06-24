<script setup>
const isOpenModalRecoveryNewPassword = ref(false);
</script>

<template>
  <div
    class="modal fade"
    id="modal_recovery-new-password"
    tabindex="-1"
    aria-hidden="true"
  >
    <form class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-and-back">
            <button
              class="modal-button-back"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modal_recovery-kod"
            >
              <i class="svg__box">
                @@include('mixins/svg-icon.html', {"name": "arrow_left",
                "class": "color-black svg_arrow__box"})
              </i>
            </button>
            <h1 class="modal-title">Відновлення паролю</h1>
          </div>
          <button
            type="button"
            class="btn-close modal-button-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-label-input">
            <label>Новий пароль</label>
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
          <div class="modal-label-input">
            <label>Підтвердіть пароль</label>
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

          <div class="modal-footer">
            <button
              type="button"
              class="btn-modal-green"
              data-bs-dismiss="modal"
            >
              Надіслати код
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
