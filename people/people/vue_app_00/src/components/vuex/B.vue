<template>
  <div>
    <h1>B.vue 演示使用Vuex中集中保存数据</h1>
    <h1>陈亮老师年龄{{$store.getters.getAge}}</h1>
    <h1>{{$store.getters.getList}}</h1>
    <h1>{{$store.getters.getCar}}</h1>
    <button @click="upCar">
      陈亮老师车升级
    </button>
    <button @click="upAge">
      修改陈亮老师年龄
    </button>
    <button @click="clearAge">
      清空年龄[异步]
    </button>
  </div>
</template>
<script>
export default {
   methods:{
     clearAge(){
       //调用actions中定义异步修改数据方法
       //9:33
       this.$store.dispatch("modifyAge")
     },
     upAge(){
       //调用修改共享数据方式
       this.$store.commit("updateAge",63);
     },
     upCar(){
       //调用修改共享数据方式
       this.$store.commit("updateCar");
     }
   }
}
</script>
