<template>
	<div>
		<!-- 面包屑 -->
		<div class="breadcrumb-bottom">
			<el-breadcrumb :separator-icon="ArrowRight">
				<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-tabs type="card" class="demo-tabs">
			<el-tab-pane>
				<template #label>
					<span class="custom-tabs-label">
						<el-icon>
							<calendar />
						</el-icon>
						<span>管理1</span>
					</span>
				</template>
				<DepMana></DepMana>
			</el-tab-pane>
			<el-tab-pane label="管理2">
				<PosMana></PosMana>
			</el-tab-pane>
			<el-tab-pane label="管理3">管理3</el-tab-pane>
			<el-tab-pane label="管理4">管理4</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import {ArrowRight} from '@element-plus/icons-vue'
	import {Calendar} from '@element-plus/icons-vue'
	import DepMana from './DepMana.vue'
	import PosMana from './PosMana.vue'
	export default {
		setup() {
			return {
				ArrowRight
			}
		},
		components: {
			Calendar,DepMana,PosMana

		}
	}
</script>
<style>

</style>
