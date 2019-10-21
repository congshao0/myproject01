<template>
    <div>
        <!-- 面板组件 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="main">
                <search></search>
                <swiper></swiper>
                <scroll></scroll>
            </mt-tab-container-item>
            <mt-tab-container-item id="self">
                我是配餐页面
            </mt-tab-container-item>
            <mt-tab-container-item id="myprofile">
                我是个人中心页面
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航栏 -->
        <mt-tabbar fixed v-model="active">
            <!-- 按钮 -->
            <mt-tab-item id="main" @click.native="changeState(0)">
                <tabbarimg
                :selectedImage="require('../../assets/mainfood.png')"
                :normalImage="require('../../assets/mainfood1.png')"
                :focused="currentIndex[0].isSelect">
                </tabbarimg>
                精选套餐 
            </mt-tab-item>
            <mt-tab-item id="self" @click.native="changeState(1)" >
                <tabbarimg
                :selectedImage="require('../../assets/self.png')"
                :normalImage="require('../../assets/self1.png')"
                :focused="currentIndex[1].isSelect">
                </tabbarimg>
                自主配餐
            </mt-tab-item>
            <mt-tab-item id="myprofile" @click.native="changeState(2)" >
                <tabbarimg
                :selectedImage="require('../../assets/myprofile.png')"
                :normalImage="require('../../assets/myprofile1.png')"
                :focused="currentIndex[2].isSelect">
                </tabbarimg>
                个人中心
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import Search from "./tk/Search.vue"
// 引入滚动组件
import Scroll from "./tk/Scroll.vue"
// 引入轮播组件
import Swiper from "./tk/Swiper.vue"
// 引入底部导航条
import TabBarImg from "./tk/TabBarImg.vue"
export default {
    data(){
        return {
        //面板中显示子组件id
        active:"main",
        //创建数组保存图片焦点状态
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
            ]
        }
    },//data.end
    methods:{
        changeState(n){
            //函数功能:将当前参数下标
            //对应数组值修改true其它修改false
            //1:创建循环,循环数组中内容
            for(var i=0;i<this.currentIndex.length;i++){
                //2:判断如果循环下标与n相等 20
                if(n==i){
                    //3:当前下标元素true 
                    this.currentIndex[i].isSelect=true;
                }else{
                    //4:其它元素修改false
                    this.currentIndex[i].isSelect=false;
                }
            }
        }
    }, //methods.end
    components:{
        "tabbarimg":TabBarImg,
        "swiper":Swiper,
        "scroll":Scroll,
        "search":Search
    }
}
</script>
<style scoped>
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#d3d3d3;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#90c322;
}
</style>