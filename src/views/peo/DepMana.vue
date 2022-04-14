<template>
	<div>
		<!-- 工具栏 -->
		<div class="toolbar">
			<el-input v-model="searchInfo" placeholder="Please input" clearable>
				<template #append>
					<el-button :icon="Search" />
				</template>
			</el-input>
			<el-button color="#4FC08D" type="primary" :icon="Plus">添加</el-button>
			<el-button  type="danger" :icon="Delete">批量删除</el-button>
		</div>
		<div>
			<!-- 数据展示 table -->
			<div>
				<el-table height="460px" :data="tableData" style="width: 100%" border stripe>
					<el-table-column type="selection" width="55" />
					<el-table-column property="id" label="id" width="50" />
					<el-table-column label="Date" width="120">
						<template #default="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column property="name" label="Name" width="120" />
					<el-table-column property="address" label="Address" show-overflow-tooltip />
					<el-table-column label="Operations">
						<template #default="scope">
							<!-- 通过 slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
							<el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
							<confirm 
							title="删除" 
							@confirm-event="handleDelete(scope.row)"
							@cancel-event="handleDelete(scope.row)"></confirm>
							<!-- <el-button size="small" type="danger" @click="handleDelete(scope.row)">Delete</el-button> -->
						</template>
					</el-table-column>
				</el-table>
			</div>
			
			<!-- 分页 -->
			<el-pagination
				  style="margin-top: 10px;"
			      v-model:currentPage="currentPage"
			      v-model:page-size="pageSize"
			      :page-sizes="[5, 10]"
			      layout="sizes, prev, pager, next"
			      :total="50"
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			    />
				
				<!-- 编辑对话框 -->
				 <el-dialog v-model="editFormVisible" title="编辑">
				    <el-form :model="editForm">
				      <el-form-item label="id" :label-width="formLabelWidth">
				        <el-input disabled clearable v-model="editForm.id" autocomplete="off" />
				      </el-form-item>
					  <el-form-item label="name" :label-width="formLabelWidth">
					    <el-input clearable v-model="editForm.name" autocomplete="off" />
					  </el-form-item>
					  <el-form-item label="address" :label-width="formLabelWidth">
					    <el-input clearable v-model="editForm.address" autocomplete="off" />
					  </el-form-item>
				    </el-form>
				    <template #footer>
				      <span class="dialog-footer">
				        <el-button @click="editFormVisible = false">Cancel</el-button>
				        <el-button type="primary" @click="editFormVisible = false"
				          >Confirm</el-button
				        >
				      </span>
				    </template>
				  </el-dialog>
		</div>
	</div>
</template>

<script>
	import {
		Search,
		Plus,
		Delete
	} from '@element-plus/icons-vue'
	import {
		reactive,
		computed,
		onMounted,
		ref,
		onUnmounted,
		toRefs,
		watch
	} from 'vue'
	export default {
		name: '',
		setup() {
			const data = reactive({
				searchInfo: '',
				tableData: [
					{
						id: 1,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles asdf adfasf asdf ',
					},
					{
						id: 2,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 3,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 4,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 5,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 6,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 7,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 8,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 9,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					},
					{
						id: 10,
						date: '2016-05-03',
						name: 'Tom',
						address: 'No. 189, Grove St, Los Angeles',
					}
				],
				formLabelWidth:'140px',
				editFormVisible:false,
				editForm:{id:'',name:'name',address:''}
			})
			const page = reactive({
				currentPage:1,
				pageSize:10
			})
			// 编辑按钮事件
			function handleEdit(row) {
				data.editFormVisible = true
				data.editForm = data.tableData[row.id-1]
				console.log( row)
			}
			const handleDelete = (row)=>{
				console.log(row)
			}
			return {
				...toRefs(data),
				...toRefs(page),
				Search,
				Plus,
				Delete,
				handleEdit,
				handleDelete
			}
		},
		methods: {
			
			
			handleSizeChange(newSize){
				console.log(newSize)
			},
			handleCurrentChange(newCurrent){
				console.log(newCurrent)
			}
		}
	}
</script>

<style scoped>
	.toolbar {
		display: flex;
		margin-bottom: 10px;
	}

	.toolbar .el-input {
		width: 200px;
		margin-right: 10px;
	}
</style>
