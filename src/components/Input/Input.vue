<script setup>
const emit = defineEmits(["inputValue"]);

const inputHandler = (event) => {
  if (event.target.value !== "") {
    emit("inputValue", event.target.value);
    return;
  }
  return;
};
</script>

<template>
  <div class="wrapper">
    <input class="wrapper__input" type="text" @keyup.enter="inputHandler" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  &__input {
    padding: 10px;
    border: 2px solid gray;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    line-height: 18px;
    font-size: 20px;
    border-radius: 8px;
    margin: 10px;
  }
}
</style>
