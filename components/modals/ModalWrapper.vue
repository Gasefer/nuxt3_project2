<template>
  <div v-if="visible" class="modal-backdrop" @click="closeModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useModalsStore } from "~/components/modals/Store.vue";

const props = defineProps({
  modalName: {
    type: String,
    required: true,
  },
});

const store = useModalsStore();
const visible = computed(() => store[`is${props.modalName}Visible`]);

function closeModal() {
  store.hideModal(props.modalName);
}
</script>
