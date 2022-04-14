<template>
	<div>
		PlanBasic
	</div>
</template>
 
<script>
	import { reactive, computed,onMounted,ref,onUnmounted,toRefs,watch } from 'vue'
	export default {
		name: '',
		setup(){
			// router.replace(router.currentRoute.value.fullPath)
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
