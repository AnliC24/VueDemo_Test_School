<template>
    <div>
        <el-table :data="tableData">
                    <el-table-column prop="tea_id" label="序号" width="140">
                    </el-table-column>
                    <el-table-column prop="tea_name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="tea_position" label="系别" width="120">
                    </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
      let login=this.$store.loginAdmin;
       return {
        tableData: [this.$store.loginAdmin]
      }
    }
}
</script>
