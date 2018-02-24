<template>
    <div class="message-wrapper" :class="[type?'message-default':'messsage-'+ type]">
        {{message}}
    </div>
</template>

<script>
// const messageType = {
//     'info':info,
//     'success':success,
//     'error':error,
//     'warning':warning
// }
export default {
    data(){
        return {
            message:'这是一个message框'
        }
    }
}
</script>


<style lang="scss" scoped>
.message-wrapper{
   min-width:40px;
   padding:10px 15px;
   position:absolute;
   top:20px;
   left: 50%;
   transform: translate(-50%,0);
   

}
</style>


