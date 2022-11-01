<script setup>
import { getGiphys } from "./service/service";
import Input from "./components/Input/Input.vue";
import Modal from "./components/Modal/Modal.vue";
import { ref } from "vue";

const data = ref("");
const modalToggle = ref(false);

const inputHandler = async (value) => {
  data.value = await getGiphys(value);
  modalToggle.value = true;
};

const closeHandler = () => {
  modalToggle.value = false;
};
</script>

<template>
  <Teleport to="#modal">
    <div v-if="modalToggle">
      <Modal :data="data" @close="closeHandler"></Modal>
    </div>
  </Teleport>

  <Input @inputValue="inputHandler"></Input>
</template>
