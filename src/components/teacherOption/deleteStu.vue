<template>
    <div>
        <query @transferUser="getStuName"></query>
        <el-input placeholder="请输入要删除的学号" v-model="stuId">
        <el-button slot="append" icon="el-icon-close" @click="deleteStu"></el-button>
        </el-input>
    </div>
</template>
<script>
import qs from 'qs'
import query from '@/components/teacherOption/query'
export default {
    components: {
       query  
    },
    data(){
        return{
             stuName:'',
             stuId:''
        }
    },
    methods: {
        getStuName:function(msg){
             this.stuName=msg; 
        },
        deleteStu:function(){

            //alert(this.stuName);
          this.$axios.delete('/api/teacher/delete', {
              params: {
                  name:this.stuName,
                  id:this.stuId
              }
          }) 
          .then(function(response){
               if(response.data===true)
               {
                   alert('删除成功');
               }
               else
               {
                   alert('删除失败');
               }
          }).catch(function(error){
               console.log(error);
          })
        }
    }
}
</script>

