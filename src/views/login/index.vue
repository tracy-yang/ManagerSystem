<template>
<div>
    <div>
        <label for="">用户名</label>
        <input type="text" v-model="account">
    </div> 
    <div>
        <label for="">密码</label>
        <input type="text" v-model="password">
    </div>
    <div>
       <button type="btn-primary" @click="submit">登陆</button> 
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            account:null,
            password:null
        }
    },
    methods:{
        submit(){
            console.log(1111111);
            this.$router.push({ path: '/' });
        }
    }
  
}
</script>

<style lang="scss" scoped>

</style>

