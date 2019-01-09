<template>
    <div>
        <el-container>
           <el-aside width="200px">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>学生个人信息</template>
      </el-submenu>
    </el-menu>
  </el-aside>
           <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                   <i class="el-icon-setting" style="margin-right: 15px"></i>
                   <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>查看</el-dropdown-item>
                      <el-dropdown-item>新增</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                   </el-dropdown-menu>
                </el-dropdown>
                    <span>{{$store.loginAdmin.stu_name}}</span>
              </el-header>
             <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="stu_id" label="序号" width="140">
                    </el-table-column>
                    <el-table-column prop="stu_stuid" label="学号" width="120">
                    </el-table-column>
                    <el-table-column prop="stu_name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="stu_sex" label="性别" >
                    </el-table-column>
                </el-table>

             </el-main>
           </el-container>
        </el-container>
        
        <button @click="go">Home</button>
    </div>
</template>

<script> 
export default {
    
    methods: {
        go:function(){
          this.$router.push('/');
        }
    },
    data(){
      let login=this.$store.loginAdmin;
       return {
        tableData: [this.$store.loginAdmin]
      }
    }
}
</script>

<style>
 .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
   .el-aside {
    color: #333;
  }
</style>

