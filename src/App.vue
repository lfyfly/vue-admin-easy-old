<template>
  <div id="app">
    <component :is="$store.state.layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
// layouts
import BlankLayout from '@/lib/layouts/BlankLayout'

export default {
  name: 'App',
  components: {
    BlankLayout
  }
}
</script>

<style>
#app {
}
</style>
