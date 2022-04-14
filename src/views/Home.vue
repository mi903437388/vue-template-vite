<template>
	<div style="height: 100%;" class="common-layout">
		<el-container style="height: 100%;">
			<el-header class="home-header">
				<router-link class="logo" to="/home">
					<img src="../assets/logo.png">
					<span>Vue Template</span>
				</router-link>
				<div class="hdeader-right">
					<span>Admin</span>
					<el-dropdown @command="handleCommand" placement="bottom-start">
					    <div class="hdeader-user">
					    	<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
					    	 <el-icon size="10px">
					    	    <arrow-down />
					    	  </el-icon>
					    </div>
					    <template #dropdown>
					      <div>
							  <el-dropdown-menu>
							    <el-dropdown-item command="/3" divided>个人信息</el-dropdown-item>
							    <el-dropdown-item command="/5" divided>退出</el-dropdown-item>
							  </el-dropdown-menu>
						  </div>
					    </template>
					  </el-dropdown>
				</div>
				
			</el-header>
			<el-container style="height: 100%;">
				<el-aside width="200px">
					<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router
						active-text-color="#4FC08D">
						<template v-for="(item,index) in routes" :key="index">
							<el-sub-menu :index="index+''" v-if="!item.hidden">
								<template #title>
									<el-icon>
										<location />
									</el-icon>
									<span>{{item.name}}</span>
								</template>
								<el-menu-item :key="indexj" v-for="(children,indexj) in item.children"
									:index="children.path">{{children.name}}</el-menu-item>
							</el-sub-menu>
						</template>
					</el-menu>
				</el-aside>
				<el-main>
					<div>
						<div class="homeWelcome" v-if="this.$route.path==='/home'">
							Welcome
						</div>
					</div>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>


<script>
	import {
		Document,
		Menu as IconMenu,
		Location,
		Setting,
		ArrowDown
	} from '@element-plus/icons-vue'
	import { useStore } from 'vuex'
	import { computed } from 'vue'
	export default {
		setup() {
			const store = useStore()
			
			const handleOpen = (key, keyPath) => {

			}
			const handleClose = (key, keyPath) => {

			}
			const handleCommand = (command) => {
				console.log(command)
			}
			return {
				handleOpen,
				handleClose,
				handleCommand,
				Document,
				Location,
				routes: computed(() => store.state.permission.routes),
			}
		},
		components: {
			Location,
			IconMenu,
			Location,
			Setting,
			Document,
			ArrowDown
		}
	}
</script>

<style>
	.home-header {
		color: #35495E;
		/* background-color: #41B883; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* box-shadow: 0 0 1px rgb(0 0 0 / 25%); */
		border-bottom: 0.1px solid rgb(0 0 0 / 25%);
	}

	.logo {
		display: flex;
		align-items: center;
		font-weight: 600;
		text-decoration: none;
	}

	.logo img {
		height: 2.2rem;
	}
	.hdeader-right{
		display: flex;
		align-items: center;
	}
	.hdeader-user{
		display: flex;
		align-items: center;
	}
	.hdeader-user:hover{
		cursor: pointer;
		background-color: #84D3AF;
	}
</style>
