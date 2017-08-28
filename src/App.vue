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

<style>
*{
	padding: 0;
	margin: 0;
}
.nav-bar{
	width: 100%;
	height: 48px;
	background:#2C3E50;
	color:#fff;
}
.side-bar{
	width: 200px;
	height: 100%;
	position: fixed;
	top: 48px;
	left: 0;
	bottom: 0;
	background:#ccc;
	color:#3C3E50;
}
.view{
	position: absolute;
	top: 48px;
	left: 200px;
	right: 0;
	bottom: 0;
	background:#f2f2f2;
}
.side-bar a{
	color:#3C3E50;
	text-decoration: none;
}
</style>
