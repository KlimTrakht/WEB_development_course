<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="header"> </slot>
    </div>
    <div>
      <slot name="subTitle"> </slot>
    </div>
    <div>
      <slot name="for default"
        >Значение по дефолту без указания тега в родителе</slot
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
