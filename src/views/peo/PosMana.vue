<template>
	<el-empty description="description" />
</template>
 
<script>
	import { reactive, computed,onMounted,ref,onUnmounted,toRefs,watch } from 'vue'
	export default {
		name: '',
		setup(){
			const data = reactive({
					  
			})
			return{
				...toRefs(data)
			}
		}
	}
</script>
 
<style scoped>
</style>
