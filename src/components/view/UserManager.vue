<template>
<div >
  <el-table
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="账号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="power"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="margin-top:15px;">
    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[5]"
                   :page-size="pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="tableData.length">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserManager',
  data () {
    return {
      tableData:[],
      currentPage: 1, // 当前页码
      pageSize: 5 ,// 每页的数据条数
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  },
  mounted () {
      this.$axios.post("admin/getTable",{
        params:{
          action:'login'
        }
      }).then(response=>{
        console.log(response);
        this.tableData=response.data
      }).catch(error=>{
        console.log(error)
      })
  },
}
</script>

<style scoped>

</style>
