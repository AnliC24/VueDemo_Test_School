<template>
    <div>
        这是Home页面<br/>
        <button @click="go">Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        go:function(){
          this.$router.push('/');
        }
    }
}
</script>
