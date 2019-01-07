<template>
    <el-container>
    <el-header>
      <h2>教务系统</h2>
    </el-header>
    <el-main>
      <el-row align="middle">
         <el-col :span="2" :offset="5">姓名:</el-col><el-col :span="4"><el-input v-model="name" placeholder="请输入姓名"></el-input></el-col>
         <el-col :span="2" :offset="1">id:</el-col><el-col :span="4"><el-input v-model="id" placeholder="请输入id"></el-input></el-col>
      </el-row>
      <el-button type="primary" plain @click="login">登录</el-button>
    </el-main>
</el-container>
</template>

<script>
import qs from 'qs' //导入qs工具，用来封装json格式数据
export default {
    data(){
      return {
       name:'',
       id:''
      }       
    },
    
    methods: {
        login:function(){
          let that=this;//在axios.then 内无法得到当前的环境 ，所以这里需要保存一下当前上下文环境。在后面跳转的时候，才不会出错
          this.$axios({
            method:'post',
            url: "http://localhost:8080/student/login",
            //这里的qs.stringify是用来封装前端用户输入的数据，转成json格式，传递给后端api接口。
            //如果不使用qs封装的话，后端接收这个数据的方式需要改变，不能直接使用@RequestParam映射
            data: qs.stringify({
              name:this.name,
              id:this.id
            })
          }) .then(function (response) {
            //console.info('后台返回的数据:',response.data);
            //this.$router.replace({path: '/home'});
            // window.location.href='/home';
            //this.$router.push('/home');
            that.$router.push('/home');
          })
          .catch(function (error) {
             //打印报错信息
             console.log(error)
          })       
           // this.$router.push('/home');
        }
    }
}
</script>
<style>
 .el-row {
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
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 10px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 50px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 200px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
}
</style>