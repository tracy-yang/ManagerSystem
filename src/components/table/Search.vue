<template>
	<div class="search">
		<h2 class="handle-title">查询条件</h2>
		<div class="form-wrapper">
			<div class="query">
				<slot name="formQuery"></slot>
			</div>
			<slot name="formBtn"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.search {
		background: #fff;
		padding:20px 20px 10px 20px;
	}
	
	.handle-title {
		font-weight: normal;
		font-size: 20px;
		padding: 20px 0;
		border-bottom: #f2f2f2 solid 1px;
	}
	/*.form-wrapper{
		
	}
	.form-wrapper>.query>div{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.form-wrapper>.query>div>*{
		width: 33%;
	}*/
	
</style>