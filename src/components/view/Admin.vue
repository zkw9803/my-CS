<template>
  <div class="div">
    <el-form>
      <el-form-item label="账号">
        <el-input type="text" class="input" v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" class="input" v-model="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button  @click.prevent="handleLogin" >登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
    methods: {
      handleLogin: function () {
        if (this.username != '' && this.password != '') {
          // 跳转首页
          //
          this.$axios.get("admin/getAdm",{
            params: {

              username: this.username,
              password: this.password,
            }
          }).then(response=>{
            if (response.data==1) {
              console.log(response.data);
              alert('登录成功')
              this.$router.replace('/adminFace')
            }else {
              console.log(response.data)
              alert('登录失败')
            }
          }).catch(error=>{
            console.log(error)
          })
        } else if (this.username === '') {
          alert('用户名不为空')
        } else if (this.password === '') {
          alert('密码不为空')
        } else {
          alert('账号不存在，请注册后登录')// 查无此号
        }
      }
    }
}
</script>

<style scoped>

</style>
