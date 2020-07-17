<template>
  <nav>
    <router-link class="routs" to="/">open collabathon</router-link>
    <router-link class="routs" to="/collabathons"
      >active collabathons</router-link
    >
  </nav>
</template>

<style scoped>
nav {
  margin-top: 15px;
  position: absolute;
  top: 0px;
}
.routs {
  margin: 20pt;
  font-weight: lighter;
  font-size: 24pt;
  text-decoration: none;
}
</style>
