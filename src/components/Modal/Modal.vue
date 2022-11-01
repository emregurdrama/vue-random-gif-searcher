<script setup>
const props = defineProps(["data"]);
const emit = defineEmits(["close"]);

const closeHandler = () => {
  emit("close", false);
};
</script>

<template>
  <div class="modal">
    <img class="modal__image" :src="props.data.images.original.url" alt="gif" />
    <div class="close">
      <button class="close__button" @click="closeHandler">&#10006;</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  background-color: black;
}
.modal {
  text-align: center;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 25px;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  &__image {
    border-radius: 12px;
  }
}
.close {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__button {
    border-radius: 50%;
    background-color: rgba(255, 134, 134, 0.95);
    color: #fafafa;
    padding: 0.5rem 0.7rem;
    border: none;
    cursor: pointer;
    margin-top: 12px;
  }
}
</style>
