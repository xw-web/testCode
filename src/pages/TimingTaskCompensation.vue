<template>
  <div id="TimingTaskCompensation">
    <span>echarts 练习</span>
      <div id="myEchart" style="width:500px;height:500px;border:1px solid red">

      </div>
  </div>
</template>

<script>
export default {
  name: 'TimingTaskCompensation',
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    this.getEcharts()
  },
  methods: {
    getEcharts () {
      let myEcharts = this.$echarts.init(document.getElementById('myEchart'))
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
              }, {
                offset: 1, color: 'blue' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        }]
      }
      myEcharts.setOption(option)
    }
  }
}
</script>

<style>
</style>
