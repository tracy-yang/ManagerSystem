<template>
  <div id="app">
  	<!--navbar-->
    <div class="nav-bar">
    	<div>
    		<img src="" alt="" />
    	</div>
    </div>
    
    <!--sidebar-->
    <div class="side-bar">
    	<div class="header-img-wrapper">
    		<img src="./assets/images/header.jpg" alt="" />
    	</div>   	
    	<ul>
    		<li>主页</li>
    		<li>
    			新闻管理
    		</li>
    		<div>
    				<ul>
    					<li><router-link to="/news">查看</router-link></li>
    					<li>编辑</li>
    				</ul>
    			</div>
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
ul{
	list-style: none;
}
*{
	padding: 0;
	margin: 0;
}
.nav-bar{
	width: 100%;
	height: 48px;
	background:#2CC5AE;
	color:#fff;
	position: fixed;
	top: 0;
	left: 200px;
	right: 0;
	box-shadow:0px 1px 2px #999;
}
.side-bar{
	width: 200px;
	height: 100%;
	position: fixed;
	top: 0px;
	left: 0;
	bottom: 0;
	background:#fff;
	color:#3C3E50;
	font-size: 14px;
	padding-top: 20px;
}
.side-bar .header-img-wrapper{
	width: 120px;
	height: 120px;
	padding:0 20px;
}
.side-bar .header-img-wrapper img{
	width: 100%;
	border-radius: 50%;
}
.side-bar>ul{
	margin-top: 20px;
}
.side-bar li{
	padding:0 20px;
	height: 56px;
	line-height: 56px;
	cursor: pointer;
}
.side-bar div li{
	text-indent: 1.5rem;
	height: 48px;
	line-height: 48px;
}
.side-bar li:hover{
	background:#F2F2F2;
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
