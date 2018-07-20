<template>
  <div class="test">
    <h3>{{msg}}</h3>
    <h3>{{$route.path}}</h3>
    <el-button @click="toggle" >toggle dialog</el-button>
    <el-dialog :visible.sync="show" >
      <div ref="test">test</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'this is from test.vue',
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = true
      this.$nextTick(() => {
        alert(this.$refs.test)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.test{

}
</style>
