<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">

.table-page{
}

</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.table-page
  h3 {{name}}
  p {{data}}
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
export default {
  name: 'table-page',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'table-page'
    }
  },
  methods: {

  }
}
</script>
