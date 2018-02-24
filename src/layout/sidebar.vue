<template>
  <div class="side-bar">
    	<div class="header-img-wrapper">
    		<img src="../assets/images/header.jpg" alt="" />
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
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$primaryColor:rgb(43,195,172) rgb(2, 178, 181);
ul{
	list-style: none;
}
*{
	padding: 0;
	margin: 0;
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
.side-bar a{
	color:#3C3E50;
	text-decoration: none;
}
</style>


