<template>
  <div class="div">
<!--    顶部-->
    <div class="div_top">
      <div class="div_top1">
        <el-image v-bind:src="img" class="img"></el-image>
      </div>

      <div class="div_top1_1">
        <el-form :inline="true" class="demo-form-inline">
          <el-input  placeholder="搜索车票/餐饮/常旅客/相关规章" class="input_1"></el-input>
          <el-form-item class="btn1">
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="div_top2">
        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    English<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>简体中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="div_top2_2">
        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    我的12306<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>火车票订单</el-dropdown-item>
            <el-dropdown-item>候补订单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="div_top3">
        <!--  绑定路由-->
        <router-link to="/login" replace>登录</router-link>
        <router-link to="/reg" target="_blank">注册</router-link>
        <router-link to="/Admin" target="_blank">后台</router-link>
      </div>
    </div>
<!--    导航栏-->
    <div style="margin-top: 5px">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        text-color="black">
        <el-menu-item index="1" class="el-submenu"></el-menu-item>

        <el-menu-item index="2" class="el-submenu">首页</el-menu-item>

        <el-submenu index="3" class="el-submenu">
          <template slot="title">车票</template>
          <el-menu-item index="3-1">
            <h4>购买</h4>
          </el-menu-item>
          <el-menu-item index="3-2">
            <a href="https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc">单程</a>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="4" class="el-submenu">
          <template slot="title" >团购服务</template>
        </el-submenu>

        <el-submenu index="5" class="el-submenu">
          <template slot="title" >会员服务</template>
        </el-submenu>

        <el-submenu index="6" class="el-submenu">
          <template slot="title" >站车服务</template>
        </el-submenu>

        <el-submenu index="7" class="el-submenu">
          <template slot="title" >商旅服务</template>
        </el-submenu>

        <el-submenu index="8" class="el-submenu">
          <template slot="title" >出行指南</template>
        </el-submenu>

        <el-submenu index="9" class="el-submenu" >
          <template slot="title" >信息查询</template>
        </el-submenu>

        <el-menu-item index="10" class="el-submenu"></el-menu-item>
      </el-menu>
    </div>
<!--    轮播图-->
    <div id="banner" style="height: 350px;position: relative;z-index: 1">
    <!--动态将图片轮播图的容器高度设置成与图片一致-->
    <el-carousel :height="bannerHeight +'px'">
    <!--遍历图片地址,动态生成轮播图-->
      <el-carousel-item v-for="item in img_list" :key="item">
    <img :src="item" alt/>
    </el-carousel-item>
    </el-carousel>
    </div>
    <!--      悬浮窗口-->
    <div class="div_xh">
    <el-row :gutter="20">
<!--      左侧-->
      <el-col :span="6">
        <div class="grid-content bg-purple" style="width: 80px;">
          <NavXH></NavXH>
        </div>
      </el-col>
<!--      右侧-->
      <el-col :span="15">
        <div class="grid-content bg-purple" style="width: 400px;margin-left: 50px">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
<!--      右边下面-->
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple" style="width: 400px;margin:-240px 0px 0px 80px">

          </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavXH from './NavXH'
import XHcp from './XHcp'

export default {
  name: 'NavMenu',
  components: {NavXH},
  comments:{NavXH:NavXH,XHcp:XHcp},
  data () {
    return {
      img: '../static/image/logo1.png',
      img_list: ['../static/image/lb1.jpg', '../static/image/lb2.jpg', '../static/image/lb3.jpg',
        '../static/image/lb4.jpg', '../static/image/lb5.jpg'],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0
    }
  },
  methods: {

    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度

      this.bannerHeight = (400 / 1920) * this.screenWidth
    }

  },

  mounted () {
    // 首次加载时,需要调用一次

    this.screenWidth = window.innerWidth

    this.setSize()

    // 窗口大小发生改变时,调用一次

    window.onresize = () => {
      this.screenWidth = window.innerWidth

      this.setSize()
    }

    // props: ['msg']
    // methods: {
    //   ReParentMsg: function () {
    //     // 把值传给父组件
    //     this.$emit('getSubMsg', 1)
    //   }
    // }
  }
}
</script>

<style scoped>
img {

  /*设置图片宽度一致*/

  width: 100%;

  height: inherit;

}
.el-submenu{
  background: red;width: 152px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
