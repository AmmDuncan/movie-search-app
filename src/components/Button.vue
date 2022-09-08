<template>
  <button
    :class="['btn', {'btn-primary': variant==='primary', 'btn-outline': variant=== 'outline', 'btn-short': short}]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: { variant: { default: 'primary' }, short: Boolean },
}
</script>

<style scoped>
.btn {
  padding: 0 24px;
  font-size: 16px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.7;
}

.btn-primary {
  background: #C53939;
  color: white;
}

.btn-outline {
  border: 1px solid #C53939;
  color: #C53939;
  background-color: transparent;
}

.btn-short {
  height: 32px;
}
</style>
