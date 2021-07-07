<template>
  <div id="app">
    <main role="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
