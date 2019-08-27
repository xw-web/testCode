<template>
  <div id="ConfigurationManagement">
    <el-row>
      <el-col :span="24">
          <div id="box" class="box" style="width:100%;height:410px;border:1px solid black;">
            <div class="content" style="height:200px;width:33%;border:1px solid red;"
                  v-for="(item, index) in dataArr" :key="index">
                  <div class="contentLfet"><span>{{item.id}}</span></div>
                  <div class="contentRight" :id="item.id"></div>
            </div>
          </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="myechartsBox" style="width:347px;height:200px">

        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button round @click="excitedDate">练习date对象</el-button>
        <span>{{mydate.date}}</span>
        <span>{{mydate.mday}}</span>
        <span>{{mydate.day}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ConfigurationManagement',
  data () {
    return {
      dataArr: [],
      mydate: {
        date: '' || '这个是总的时间',
        mday: '' || '这个是一个月的哪一号',
        day: '' || '一个星期的哪一天'
      }
    }
  },
  mounted () {
    this.getMyEchart()
    this.getEchart()
  },
  methods: {
    getMyEchart () {
      setTimeout(() => {
        this.dataArr = [
          {id: 1, data: [1, 2, 3]},
          {id: 2, data: [1, 2, 3]},
          {id: 3, data: [2, 34, 5]},
          {id: 4, data: [3, 4, 56]},
          {id: 5, data: [3, 45, 6]},
          {id: 6, data: [3, 45, 6]},
          {id: 7, data: [2, 34, 5]}]
        this.$nextTick(() => {
          this.dataArr.forEach((item, index) => {
            // console.log('+++++++', item.id, item)
            let myEchart = this.$echarts.init(document.getElementById(item.id))
            let option = {
              title: {
                text: 'ECharts 入门示例'
              },
              tooltip: {},
              legend: {
                data: ['销量']
              },
              xAxis: {
                show: false
                // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              yAxis: {
                type: 'category',
                show: false
              },
              series: [{
                name: '销量',
                type: 'bar',
                label: {
                  show: true,
                  distance: 0,
                  formatter: (params) => {
                    // console.log('label名', params)
                    return params.data + '%'
                  },
                  color: 'black',
                  position: 'top'
                },
                barGap: '10%',
                barWidth: 10,
                data: item.data
              }]
            }
            myEchart.setOption(option)
          })
        })
      }, 300)
    },
    getEchart () {
      let myEchart = this.$echarts.init(document.getElementById('myechartsBox'))
      let option = {
        xAxis: {
          splitLine: {show: false}
        },
        yAxis: {
          type: 'category',
          data: ['a', 'b', 'c'],
          axisTick: {show: false},
          axisLabel: {
            formatter: 'barGap: \'-100%\''
          }
        },
        animationDurationUpdate: 1200,
        series: [{
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#ddd'
            }
          },
          silent: true,
          barWidth: 10,
          barGap: '-100%', // Make series be overlap
          data: [60, 60, 60]
        }, {
          type: 'bar',
          barWidth: 10,
          z: 10,
          data: [45, 60, 13]
        }]
      }
      myEchart.setOption(option)
    },
    excitedDate () {
      let myDate = new Date()
      console.log('我的时间', myDate, typeof myDate)
      this.mydate.date = myDate
      this.mydate.mday = myDate.getDate()
      console.log('我的时间', this.mydate.mday, typeof this.mydate.mday)
      this.mydate.day = myDate.getDay()
      console.log('我的时间', this.mydate.day, typeof this.mydate.day)
    }
  }
}
</script>

<style scoped>
#box{
  display: -webkit-flex;/* Safari */
  padding: 10px 2px;
  display: flex;
  /* flex-direction:row; */
  flex-wrap:wrap;
  justify-content:space-between;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  /* margin-left: 12px; */
}
#box::-webkit-scrollbar { width: 0 !important } /*兼容chrome*/
.box{
  scrollbar-arrow-color: #f00;
}
.content{
  margin-bottom: 10px;
  position: relative;
}
.contentLfet{
  position: absolute;
  left: 0;
  height: 100%;
  width: 30%;
  line-height: 202px;
  border: 1px solid blue;
}
.contentRight{
  position: absolute;
  right: 0;
  height: 100%;
  width: 70%;
  border: 1px solid yellow;
}
</style>
