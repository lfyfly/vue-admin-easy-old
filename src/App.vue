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
import HeaderSideLayout from '@/lib/layouts/HeaderSideLayout'

export default {
  name: 'App',
  components: {
    BlankLayout,
    HeaderSideLayout
  }
}
</script>

<style>
#app {
}
</style>
