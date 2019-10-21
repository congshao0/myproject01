<template>
  <div>
    <h1>A.vue 演示使用Vuex中集中保存数据</h1>
    <h1>陈亮老师年龄{{$store.getters.getAge}}
    </h1>
    <h1>{{$store.getters.getList}}</h1>
    <h1>{{$store.getters.getCar}}</h1>
  </div>
</template>
<script>
export default {
  created() {
    //this==当前vue组件A.vue
  },
}
</script>

