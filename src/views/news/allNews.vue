<template>
	<div class="app-container">
		<!--查询-->
		<!--<search>
			<div slot="formQuery">
				<div>
					<label for="">标题</label><input type="text" />
				</div>
				<div>
					<label for="">作者</label><input type="text" />
				</div>
				<div>
					<label for="">日期</label>
				</div>
				<div>
					<label for="">状态</label>
					<select name="ddl">
						<option value="">已发布</option>
						<option value="">已下架</option>
					</select>
				</div>
			</div>
		</search>-->
		<div class="search">
			<h2 class="handle-title">查询条件</h2>
			<div class="form-wrapper">
				<div class="query">
					<div class="item-group">
						<label for="">标题</label><input type="text" />
					</div>
					<div class="item-group">
						<label for="">作者</label><input type="text" />
					</div>
					<div class="item-group">
						<label for="">日期</label>
						<input type="text" />
					</div>
					<div class="item-group">
						<label for="">状态</label>
						<select name="ddl">
							<option value="">已发布</option>
							<option value="">已下架</option>
							<option value="">已删除</option>
						</select>
					</div>
				</div>
				<div class="form-btn-group">
					<button>查询</button>
					<button>重置</button>
					<y-button type="primary" >查询</y-button>
				</div>
			</div>
		</div>

		<div class="tab-content">
			<!--操作栏-->
			<div class="handle">
				<!--<h2 class="handle-title">操作</h2>-->
				<div class="btn-group">
					<button>删除</button>
					<button>编辑</button>
					<button>发布</button>

				</div>
			</div>

			<!--表格-->
			<table>
				<thead>
					<tr>
						<td>#</td>
						<td>序号</td>
						<td>标题</td>
						<td>作者</td>
						<td>摘要</td>
						<td>创建时间</td>
						<td>操作</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in newsList">
						<td><input type="checkbox" /></td>
						<td>{{index+1}}</td>
						<td>{{item.title}}</td>
						<td>{{item.author}}</td>
						<td>{{item.abstract}}</td>
						<td>{{item.date}}</td>
						<td><button>删除</button></td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>

</template>

<script>
	// import Search from '../../components/table/Search';
	//import myDatepicker from 'vue-datepicker'
	import { getNewsList } from '../../api/news'; // 接口文件
	export default {
		// components: {
		// 	Search,
		// },
		data() {
			return {
				newsList: null
			}
		},
		created(){
			this.getList();
		},
		methods: {
			// 获取所有新闻列表
			getList() {
				getNewsList().then(response =>{	
					console.log('response',response);
					this.newsList=response.list;
				})
				
			}
			// getList(){
			// 	getNewsList().then( response => {
			// 		console.log('response',response);
			// 	})
			// }
		}

	}
</script>

<style lang="scss" scoped>
	$height:36px;
	$titleColor:#8492a6;
	$borderColor:#bfcbd9;
	$primaryBtnBgColor:#337ab7;
	@mixin primaryBtn($bgColor:#337ab7, $borderColor:#2e6da4, $color:#fff, $fontSize:14px, $padtop:10px, $padleft:30px) {
		border: solid 1px $borderColor;
		background: $bgColor;
		box-sizing: border-box;
		padding: $padtop $padleft;
		font-size: $fontSize;
		color: $color;
		border-radius: 4px;
		cursor: pointer;
		outline: none;
	}
	
	$boxShadow:0px 1px 2px #999;
	.app-container {
		padding: 20px 20px 10px 20px;
		.search {
			background: #fff;
			padding: 0 20px;
			margin-bottom: 20px;
			border: #f2f2f2 solid 1px;
			box-shadow: $boxShadow;
			.handle-title {
				font-weight: normal;
				font-size: 20px;
				padding: 20px 0;
				color: #333;
			}
			.query {
				display: flex;
				flex-wrap: wrap;
				.item-group {
					width: 33%;
					height: 58px;
					display: flex;
					label {
						display: inline-block;
						width: 85px;
						font-size: 14px;
						color: $titleColor;
						line-height: $height;
						text-align: center;
					}
					label+* {
						flex: 1;
						height: $height;
						margin-right: 20px;
						border-radius: 4px;
						border: 1px solid $borderColor;
						line-height: 1;
						padding: 3px 10px;
						box-sizing: border-box;
						font-family: "微软雅黑";
						font-size: 14px;
						color: #333;
						;
					}
				}
			}
			.form-btn-group {
				text-align: right;
				border-top: #ddd solid 1px;
				padding: 15px 0;
				button:first-of-type {
					@include primaryBtn;
				}
				button:nth-of-type(2) {
					@include primaryBtn($bgColor: none, $borderColor:#ccc, $color:#666);
					margin-left: 10px;
				}
			}
		}
		.tab-content {
			background: #FFFFFF;
			box-shadow: $boxShadow;
			padding: 20px 20px;
			table {
				border-collapse: collapse;
				width: 100%;
				tr {
					height: $height;
					text-align: center;
					font-size: 14px;
				}
				thead {
					background: #F2F2F2;
					tr {
						color: $titleColor;
					}
				}
				tbody {
					td {
						border-bottom: #f2f2f2 solid 1px;
					}
				}
			}
		}
	}
	
	.btn-group {
		padding: 10px 0;
	}
	
	.btn-group>button {
		@include primaryBtn($bgColor: none, $color:#666, $padtop:8px, $padleft:16px, $borderColor:#d9d9d9)
	}
</style>