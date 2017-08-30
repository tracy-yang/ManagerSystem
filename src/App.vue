<template>
  <div id="app">
  	<!--navbar-->
    <div class="nav-bar">
    	<div class="header-img-wrapper">
    		<img src="" alt="" />
    	</div>
    </div>
    
    <!--sidebar-->
    <div class="side-bar">
    	<ul>
    		<li>home</li>
    		<li>
    			新闻管理
    			<div>
    				<ul>
    					<li><router-link to="/news">查看</router-link></li>
    					<li>编辑</li>
    				</ul>
    			</div>
    		</li>
    	</ul>
    </div>
    
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

*{
	padding: 0;
	margin: 0;
}
.nav-bar{
	width: 100%;
	height: 48px;
	background:#2CC5AE;
	color:#fff;
	box-shadow:0px 1px 2px #999;
}
.side-bar{
	width: 200px;
	height: 100%;
	position: fixed;
	top: 48px;
	left: 0;
	bottom: 0;
	background:#fff;
	color:#3C3E50;
}
.view{
	position: absolute;
	top: 48px;
	left: 200px;
	right: 0;
	bottom: 0;
	background:#f0f0f0;
}
.side-bar a{
	color:#3C3E50;
	text-decoration: none;
}
</style>
