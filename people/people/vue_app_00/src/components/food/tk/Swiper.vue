<template>
    <div>
       <mt-swipe class="mt1" :auto="4000">
        <mt-swipe-item>
            <img src="../../../assets/carousel2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
              <img src="../../../assets/carousel1.jpg" alt="">
        </mt-swipe-item>
         <mt-swipe-item>
               <img src="../../../assets/carousel3.jpg" alt="">
         </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.mt1{
    height:200px;
}
img{
    width:100%;
    height:200px;
}
</style>