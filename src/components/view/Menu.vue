<template>
<div>
  <el-menu
    router :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/UserMenu">用户列表</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>

  <el-menu
    router :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>系统管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">用户列表</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
