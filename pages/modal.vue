// pages/about.vue
<template>
  <div>
    <div class="modal fade" tabindex="-1" ref="modalRef">
      <div class="modal-dialog">
        <div class="modal-content">
	      <div class="modal-header">
	        ...
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">close</button>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success" @click="showModal">
      點我看 Modal
    </button>
  </div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();
const modalRef = ref(null);
let modal;
const showModal = () => {
  modal.show();
};

onMounted(() => {
  modal = $bootstrap.modal(modalRef.value);
});

onBeforeUnmount(() => {
  // 加上 dispose，避免切換頁面時或是 HMR 看到殘留畫面
  modal.dispose();
});
</script>