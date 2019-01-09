<template>
    <div>
        <query @transferUser="getStuName"></query>
        <el-input placeholder="请输入修改的学号" v-model="stuId">
        <el-button slot="append" icon="el-icon-edit" @click="updateStu"></el-button>
        </el-input>
        </div>
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
        updateStu:function(){
            let that=this;
            
            this.$axios({
                method:'put',
                url: '/api/teacher/update',
                data: qs.stringify({
                    name:this.stuName,
                    id:this.stuId
                })
            }).then(function(response){
                if(response.data === true)
                {
                    alert('修改成功');
                    that.reload;
                }  
                else{
                    alert('修改失败');
                }  
            }).catch(function(error){
                console.log(error);
            })
        }
    }
}
</script>
