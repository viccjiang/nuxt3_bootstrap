// pages/about.vue
<template>
  <div>
    <button ref="popoverRef" type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
  </div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();
const popoverRef = ref(null);
let popover;
onMounted(() => {
  popover = $bootstrap.popover(popoverRef.value);

});
</script>