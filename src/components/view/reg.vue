<template>
<div v-bind:style="div">
  <div v-bind:style="div_top">
    <p>账户信息</p>
  </div>
  <div v-bind:style="div_down">
  <el-form>
    <el-form-item label="账号">
  <el-input type="text" v-bind:style="input" v-model="username"></el-input>
    </el-form-item>
      <el-form-item label="密码">
  <el-input type="password" v-bind:style="input" v-model="password"></el-input>
      </el-form-item>
    <el-form-item label="确认密码">
  <el-input type="password" v-bind:style="input"></el-input>
    </el-form-item>
    <el-select  placeholder="请选择状态">
      <el-option>中国居民身份证</el-option>
      <el-option>港澳居民来往内地通行证</el-option>
      <el-option>台湾居民来往大陆通行证</el-option>
      <el-option>护照</el-option>
    </el-select>
    <br/>
    <div>
      <el-radio>中国居民身份证</el-radio><br/>
      <el-radio>外国人永久居留身份证</el-radio><br/>
      <el-radio>港澳台居民居住证</el-radio>
    </div>
    <el-form-item label="姓名">
      <el-input type="text" v-bind:style="input"></el-input>
    </el-form-item>
    <el-form-item label="证件号码">
      <el-input type="text" v-bind:style="input"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input type="text" v-bind:style="input"></el-input>
    </el-form-item>
    <el-form-item label="手机号码（+86）">
      <el-input type="text" v-bind:style="input"></el-input>
    </el-form-item>
    <el-select  placeholder="请选择状态">
      <el-option>成人</el-option>
      <el-option>儿童</el-option>
      <el-option>学生</el-option>
      <el-option>残疾军人、伤残人民警察</el-option>
    </el-select><br/><br/>
    <el-checkbox>我已阅读并同意遵守</el-checkbox>
    <a href="https://kyfw.12306.cn/otn/regist/rule" target="_blank">《中国铁路客户服务中心网站服务条款》</a>
    <a href="https://kyfw.12306.cn/otn/gonggao/privacyPolicy_web.html" target="_blank">《隐私权政策》</a>

    <el-button v-bind:style="btn" type="primary" @click.prevent="handleLogin">下一步</el-button>
  </el-form>
    </div>
</div>
</template>

<script>
export default {
  name: 'reg',
  data () {
    return {
      msg: '注册',
      username: '',
      password:'',
      div: {
        width: '600px',
        height: '750px',
        border: 'blue solid 2px',
        margin: 'auto'
      },
      div_top: {
        color: 'white',
        width: '600px',
        height: '30px',
        backgroundColor: 'cadetblue'
      },
      div_down: {
        width: '600px',
        margin: 'auto'
      },
      btn: {
        marginTop: '15px',
        background: 'Orange'
      },
      input: {
        width: '450px'
      }
    }
  },
  methods: {
    handleLogin: function () {
      if (this.username != '' && this.password != '') {
        //
        this.$axios.get("admin/getReg", {
          params: {
            username: this.username,
            password: this.password,
          }
        }).then(response => {
          if (response.data == 1) {
            console.log(response.data);
            alert('注册成功')
            this.$router.replace('/login')
          } else {
            console.log(response.data)
            alert('注册失败')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
