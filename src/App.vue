<template>
  <div id="app">  
    <!--内容区域-->
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" >
$primaryColor:rgb(43,195,172) rgb(2, 178, 181);
ul{
	list-style: none;
}
*{
	padding: 0;
	margin: 0;
}
.view{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background:#f0f0f0;
}

</style>
