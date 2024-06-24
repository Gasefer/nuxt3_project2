<script setup>
const isOpenModalRecoveryEmail = ref(false);
</script>

<template>
  <div
    class="modal fade"
    id="modal_recovery-email"
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
              data-bs-target="#modal_vhid"
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
            <label>Електронна пошта</label>
            <input class="modal-input" type="text" />
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn-modal-green"
              data-bs-toggle="modal"
              data-bs-target="#modal_recovery-kod"
            >
              Надіслати код
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
