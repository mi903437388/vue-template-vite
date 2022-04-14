<template>
	<el-popconfirm
	    :confirm-button-text="confirmText"
	    :cancel-button-text="cancelText"
	    :icon="InfoFilled"
	    :icon-color="iconColor"
	    :title="title"
	    @confirm="$emit('confirmEvent')"
	    @cancel="$emit('cancelEvent')"
	  >
	    <template #reference>
	      <el-button :type="buttonType" size="small">{{buttonText}}</el-button>
	    </template>
	  </el-popconfirm>
</template>
 
<script>
	import { InfoFilled } from '@element-plus/icons-vue'
	import { reactive, computed,onMounted,ref,onUnmounted,toRefs,watch } from 'vue'
	export default {
		name: '',
		setup(){
			return{
				InfoFilled
			}
		},
		props:{
			'title':String,
			confirmText:{
				type:String,
				default:'确定'
			},
			cancelText:{
				type:String,
				default:'取消'
			},
			buttonText:{
					type:String,
					default:'删除'
			},
			iconColor:{
					type:String,
					default:'red'
			},
			buttonType:{
				type:String,
				default:'danger'
			}
		},
		emits: ['confirmEvent','cancelEvent']
	}
</script>
 
<style scoped>
</style>
