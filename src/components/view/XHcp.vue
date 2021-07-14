<template>
  <div>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">单程</el-menu-item>
    <el-menu-item index="2">往返</el-menu-item>
    <el-menu-item index="3">连续换乘</el-menu-item>
    <el-menu-item index="4">退改签</el-menu-item>
  </el-menu>
</div>
  </div>
</template>

<script>
export default {
  name: 'NavXHL',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
