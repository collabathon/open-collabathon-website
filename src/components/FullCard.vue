<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p1> {{ message }} </p1>
  </div>
</template>

<style>
.card {
  background-color: var(--base);
  margin: 20pt;
  padding: 10pt;
}
</style>

<script>
export default {
  props: {
    title: String,
    message: String,
  },
};
</script>
