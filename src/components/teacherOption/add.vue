<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="学生姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="学号">
    <el-input v-model="form.stuid"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="addStu">添加</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data(){
        return{
           form:{
               name:'',
               sex:'',
               stuid:'' 
           }
        }
    },
    methods: {
       addStu:function(){
           let that=this;
           this.$axios({
               method:'post',
               url: '/api/teacher/add',
               data: qs.stringify({
                   stu_name:this.form.name,
                   stu_sex:this.form.sex,
                   stu_stuid:this.form.stuid  
               })
           }).then(function(response){
                   console.log(response.data);
               }).catch(function(error){
                   console.log(error);
               })
       }  
    }
}
</script>

