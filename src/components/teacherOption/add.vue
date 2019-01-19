<template>
    <div>
        <el-form ref="addForm" :model="addForm" label-width="80px" :rules="rule" class="demo-ruleForm">
  <el-form-item label="学生姓名" prop="name">
    <el-input v-model="addForm.name"></el-input>
  </el-form-item>
  <el-form-item label="学号" prop="stuId">
    <el-input v-model="addForm.stuId"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex">
    <el-radio-group v-model="addForm.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="addStu('addForm')">添加</el-button>
    <el-button @click="resetForm('addForm')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data(){
      let checkName = (rule,value,callback) => {
        if (!value)
        {
          return callback(new Error("姓名不能为空"));
        }else {
          callback();
        }
      };
      let checkId = (rule,value,callback) => {
        if(!value)
        {
          return callback(new Error("学号不能为空"));
        }else{
          callback();
        }
      };
      let checkSex = (rule,value,callback) => {
        if(!value)
        {
          return callback(new Error("请选择学生性别!"));
        }else {
          callback();
        }
      }
        return{
          addForm:{
               name:'',
               stuId:'',
               sex:''
           },
          rule:{
                name:[
                  { validator:checkName,trigger:'blur'}
                ],
                stuId:[
                  {  validator:checkId,trigger:'blur'}
                ],
                sex:[
                  {
                    validator:checkSex,trigger:'change'
                  }
                ]
          }
        }
    },
    methods: {
       addStu(formName){
           let that=this;
           this.$refs[formName].validate((valid)=>{
             if(valid)
             {
               this.$axios({
                 method:'post',
                 url: '/api/teacher/add',
                 data: qs.stringify({
                   stu_name:this.addForm.name,
                   stu_sex:this.addForm.sex,
                   stu_stuid:this.addForm.stuId
                 })
               }).then(function(response){
                 console.log(response.data);
                 that.$router.push('/info');
               }).catch(function(error){
                 console.log(error);
               })
             }
           })
       },
       resetForm(formName){
         this.$refs[formName].resetFields();
       }
    }
}
</script>

