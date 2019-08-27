<template>
  <div id="RoleManagement">
      <p>子组件角色管理(监听器)</p>
      <span>监听变量：{{watchDate}}</span>
      <span>监听对象：{{watchObj.value}}</span>
      <button @click="changeDate">点击监听变量事件</button>
      <button @click="changeObj">点击监听对象</button>
  </div>
</template>

<script>
export default {
  name: 'RoleManagement',
  data () {
    return {
      watchDate: 1,
      watchObj: {
        value: 0
      }
    }
  },
  methods: {
    changeDate () {
      let self = this
      self.watchDate++
    },
    changeObj () {
      this.watchObj.value++
    }
  },
  watch: {
    // 监听变量
    watchDate: function (newDate, oldDate) {
      console.log('newDate', newDate, 'oldDate', oldDate)
      if (newDate !== oldDate) {
        this.$message({
          message: '监听变量成功',
          type: 'success'
        })
      }
    },
    // 监听对象
    watchObj: {
      handler (newObj, oldObj) {
        console.log('newObj', newObj, 'oldObj', oldObj)// 对象监听 新的和旧的一样
        this.$message({
          message: '监听对象成功',
          type: 'success'
        })
      },
      deep: true
    }
  }
}
</script>

<style>
</style>
