<script setup>
const props = defineProps({
  iconName: {
    type: String,
    default: "basket",
  },
  customClass: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: "24",
  },
  height: {
    type: [Number, String],
    default: "24",
  },
});
</script>

<template>
  <svg
    class="icon-svg"
    :class="[`icon-${iconName}`, customClass]"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <use :xlink:href="`/sprite.svg#${iconName}`"></use>
  </svg>
</template>
