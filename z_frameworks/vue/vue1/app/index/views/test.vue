<style lang="less" scoped>
div{
  background: red;
  p{
    color: green;
  }
}
</style>

<template>
  <div class='app-container'>
    <div>
      <p v-if="datas.length > 0" v-for="(item, index) in datas">{{item}}</p>
    </div>
    <button>BTN</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        datas: [1, 2, 3, 4]
      }
    }
  }
</script>
