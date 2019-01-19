<template>
    <div>
        <el-container>
           <el-aside width="200px">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>教师管理</template>
        <el-menu-item-group>
          <template slot="title">学生操作</template>
          <el-menu-item index="1-1" @click="teaInfo">教师信息</el-menu-item>
          <el-menu-item index="1-2" @click="queryStu">查询学生</el-menu-item>
          <el-menu-item index="1-3" @click="addStu">添加学生</el-menu-item>
          <el-menu-item index="1-4" @click="updateStu">修改学生</el-menu-item>
          <el-menu-item index="1-5" @click="deleteStu">删除学生</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
           <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                   <i class="el-icon-setting" style="margin-right: 15px"></i>
                   <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item ><a @click="logout">退出登录</a></el-dropdown-item>
                   </el-dropdown-menu>
                </el-dropdown>
                    <span>{{$store.loginAdmin.tea_name}}</span>
              </el-header>
             <el-main>
                <router-view></router-view>
             </el-main>
           </el-container>
        </el-container>
        <button @click="go">Home</button>
    </div>
</template>
<script> 
export default {
    methods: {
       logout:function(){
          this.$store.loginAdmin=null;
          this.$router.push('/');
       },
        go:function(){
          this.$router.push('/');
        },
        teaInfo:function(){
            this.$router.push("/info");
        },
        queryStu:function(){
            this.$router.push("/query");
        },
        addStu:function(){
            this.$router.push("/add");
        },
        updateStu:function(){
             this.$router.push("/update");
        },
        deleteStu:function(){
             this.$router.push("/deleteStu");
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
