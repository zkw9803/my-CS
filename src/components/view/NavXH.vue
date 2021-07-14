<template>
<div>
  <el-menu
    router :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="red"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/XHcp" class="xh_font">
      <span slot="title">车票</span>
    </el-menu-item>
    <el-menu-item index="2" class="xh_font">
      <span slot="title">常用查询</span>
    </el-menu-item>
    <el-menu-item index="3" class="xh_font">
      <span slot="title">订餐</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import XHcp from './XHcp'

export default {
  name: 'NavXH',
  comments:{XHcp:XHcp},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
