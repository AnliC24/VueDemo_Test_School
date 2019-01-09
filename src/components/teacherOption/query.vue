<template>
    <div>
        <div style="margin-top: 15px;">
         <el-input placeholder="请输入学生姓名" v-model="stuName" @change="setStuName">
         <el-button slot="append" icon="el-icon-search" @click="queryStudent"></el-button>
         </el-input>
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
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
     data() {
         let login=this.$store.queryStudent;
    return {
     stuName:'',
     tableData: []     
    }
  },
  methods: {
      setStuName:function(){
         this.$emit('transferUser',this.stuName);
      },
      queryStudent:function(){
          let that=this;
          //alert(this.stuName);
           this.$axios({
               method:'post',
               url: '/api/teacher/query',
               data: qs.stringify({
                   name:this.stuName
               })
           }).then(function (response){
               let data=response.data;
                 that.tableData.push(data);      
              console.info(that.tableData);
           }).catch(function(error){
               console.log(error);
           })
      }
  }
}
</script>


<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>


