<template>
  <div>
    <button ref="tooltipRef" type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  Custom tooltip
</button></div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();
const tooltipRef = ref(null);
let tooltip;
onMounted(() => {
  tooltip = $bootstrap.tooltip(tooltipRef.value);
});
</script>