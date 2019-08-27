<template>
  <div class="homeworld">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理/flex布局" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
          <!-- <el-button round @click="Itera">es6 遍历器</el-button> -->
          <!-- <span style="color:red">树形控件懒加载</span>
          <el-tree
            :props="props"
            :load="loadNode"
            @node-click="handleNodeClick"
            lazy
            >
          </el-tree> -->
          <span style="color:red;">树形控件默认选中节点高亮显示</span>
          <el-tree
              :data="data"
              :props="defaultProps"
              :highlight-current="true"
              :default-expanded-keys="['3']"
              ref="tree"
              node-key="id"
              @node-click="handleNodeClick"></el-tree>
        </div>
      </el-col>
    </el-row>
    <!-- <div>
       <el-carousel height="400px" style="border:1px solid red;background:black" >
        <el-carousel-item v-for="item in imgArr" :key="item" class="el-carousel__item">
          <img :src=item alt=""  class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <!-- <el-row>
      <el-col :span="24">
        <router-view/>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
export default {
  name: 'homeworld',
  data () {
    return {
      activeName: 'second',
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
      homeData: [{name: '防区1', leaf: false}, {name: '防区2', leaf: true}],
      imgArr: [
        '../../static/img/1.jpg', '../../static/img/2.jpg', '../../static/img/3.jpg', '../../static/img/4.jpg'
      ],
      data: [{
        label: '一级 1',
        id: '1',
        children: [{
          label: '二级 1-1',
          id: '1-1',
          children: [{
            label: '三级 1-1-1',
            id: '1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        id: '2',
        children: [{
          label: '二级 2-1',
          id: '2-1',
          children: [{
            label: '三级 2-1-1',
            id: '2-1-1'
          }]
        }, {
          label: '二级 2-2',
          id: '2-2',
          children: [{
            label: '三级 2-2-1',
            id: '2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        id: '3',
        children: [{
          label: '二级 3-1',
          id: '3-1',
          children: [{
            label: '三级 3-1-1',
            id: '3-1-1'
          }]
        }, {
          label: '二级 3-2',
          id: '3-2',
          children: [{
            label: '三级 3-2-1',
            id: '3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.tree.setCurrentKey('3-2')
    })
  },
  methods: {
    handleClick (tab, event) {
      if (tab.name === 'first') {
        this.$router.push({ name: 'UserManagement', query: { userId: tab.name } })
      }
      if (tab.name === 'second') {
        this.$router.push({ name: 'ConfigurationManagement', params: { userId: tab.name } })
      }
      if (tab.name === 'third') {
        this.$router.push({ name: 'RoleManagement', params: { userId: tab.name } })
      }
      if (tab.name === 'fourth') {
        this.$router.push({ name: 'TimingTaskCompensation', params: { userId: tab.name } })
      }
    },
    Itera () {
      let it = ['a', 'b', 'c']
      for (let v of it) {
        console.log(v)
      }
    },
    // 树形控件懒加载方法
    loadNode (node, resolve) {
      console.log('回调函数参数', node, resolve)
      if (node.level === 0) {
        setTimeout(() => {
          resolve([{name: '报警主机', leaf: false}])
        }, 1000)
      }
      if (node.level === 1) {
        resolve(this.homeData)
      }
      if (node.level === 2) {
        resolve([{name: '子设备', leaf: true}])
      }
      if (node.level === 3) {
        resolve([])
        return false
      }
      // if (node.level > 1) return resolve([])
      // setTimeout(() => {
      //   const data = [{
      //     name: 'leaf',
      //     leaf: true
      //   }, {
      //     name: 'zone'
      //   }]
      //   resolve(data)
      // }, 500)
    },
    // 树点击事件
    handleNodeClick (data) {
      if (data.name === '子设备') {
        return false
      }
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  width: 120px;
  height: 80px;
  line-height: 80px;
  border: 1px solid red;
}
/* 走马灯图片自适应 */
.el-carousel__item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
 .carousel-image {
    max-width: 100%;
    max-height: 100%;
  }
</style>
