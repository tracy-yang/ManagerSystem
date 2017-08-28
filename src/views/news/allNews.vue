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
						<label for="">状态</label><select name="ddl">
							<option value="">已发布</option>
							<option value="">已下架</option>
						</select>
					</div>
				</div>
				<div class="form-btn-group">
					<button>查询</button>
					<button>重置</button>
				</div>
			</div>
		</div>

		<!--操作栏-->
		<div class="handle">
			<h2 class="handle-title">操作</h2>
			<div class="btn-group">
				<button>保存</button>
				<button>编辑</button>
				<button>发布</button>
				<button>返回</button>
			</div>
		</div>

		<!--表格-->

	</div>
</template>

<script>
	import Search from '../../components/table/Search';
	//import myDatepicker from 'vue-datepicker'
	export default {
		components: {
			Search,
		},
		
	}
</script>

<style lang="scss" scoped>
	$height:36px;
	$titleColor:#8492a6;
	$borderColor:#bfcbd9;
	$primaryBtnBgColor:#337ab7;
	@mixin primaryBtn($bgColor:#337ab7,$borderColor:#2e6da4,$color:#fff,$fontSize:14px){
		border:solid 1px $borderColor;
		background: $bgColor;
		box-sizing: border-box;
		padding:10px 30px;
		font-size:$fontSize;
		color:$color;
		border-radius: 4px;
		cursor: pointer;
		outline: none;
	}
	
	.app-container {
		padding: 20px 20px 10px 20px;
		.search{
			background:#fff;
			padding:0 20px;
			margin-bottom: 20px;
			border:#f2f2f2 solid 1px;
			box-shadow:0px 1px 2px #999;
			.handle-title {
				font-weight: normal;
				font-size: 20px;
				padding:20px 0;
				color:#333;
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
						color:$titleColor;
						line-height:$height;
						text-align: center;
					}
					label+*{
						flex: 1;
						height:$height;
						margin-right: 20px;
						border-radius: 4px;
						border: 1px solid $borderColor;
						line-height: 1;
						padding:3px 10px;
						box-sizing: border-box;
						font-family: "微软雅黑";
						font-size: 14px;
						color:#333;;	
					}
				}
			}
			.form-btn-group{
				text-align: right;
				border-top:#ddd solid 1px;
				padding:15px 0;
				
				
				button:first-of-type{
					@include primaryBtn;
				}
				button:nth-of-type(2){
					@include primaryBtn($bgColor:none,$borderColor:#ccc,$color:#666);
					margin-left: 10px;
				}
			}
		}
	}
	
	
	
	
	
	
	
	.btn-group {
		padding: 10px 0;
	}
	
	.btn-group>button {
		padding: 8px 16px;
		background: none;
		border: #f2f2f2 solid 1px;
		border-radius: 4px;
	}
</style>