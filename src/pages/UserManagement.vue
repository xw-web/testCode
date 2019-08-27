<template>
  <div id="UserManagement">
      子组件用户管理
      <el-tree  :props="defaultProps"  :load="loadNode" lazy   @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  name: 'UserManagement',
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'zones',
        label: 'name',
        isLeaf: 'leaf'
      },
      count: 1
    }
  },
  mounted () {

  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    loadNode (node, resolve) {
      console.log('懒加载节点信息', node, 'resolve', resolve)
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2', leaf: true }])
      }
      if (node.level > 3) return resolve([])
      let hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }
      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{
            name: 'xxx' + this.count++,
            leaf: false
          }, {
            name: 'zone' + this.count++,
            leaf: true
          }]
        } else {
          data = []
        }
        resolve(data)
      }, 500)
    }
  }
}
</script>

<style>
</style>
