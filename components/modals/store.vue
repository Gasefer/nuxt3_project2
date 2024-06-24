<script>
import { defineStore } from "pinia";

export const useModalsStore = defineStore("modals", {
  state: () => ({
    isModalBasketVisible: false,
    isModalVhidVisible: false,
    isModalFeedbackVisible: false,
    // додайте інші модалки тут
  }),
  actions: {
    showModal(modalName) {
      this[`is${modalName}Visible`] = true;
    },
    hideModal(modalName) {
      this[`is${modalName}Visible`] = false;
    },
    toggleModal(modalName) {
      this[`is${modalName}Visible`] = !this[`is${modalName}Visible`];
    },
  },
});
</script>
