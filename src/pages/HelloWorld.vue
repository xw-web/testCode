<template>
  <div class="hello">
    <HomeWorld>

    </HomeWorld>
  </div>
</template>

<script>
import HomeWorld from '@/components/HomeWorld'
export default {
  name: 'HelloWorld',
  components: {
    'HomeWorld': HomeWorld
  },
  data () {
    return {
      value: '',
      value11: ''
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
</style>
