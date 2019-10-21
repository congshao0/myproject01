<template>
    <div>
        <div>
            <ul>
                <li class="aa">
                    <div class="bb">
                         <img class="img_item" src="../../../assets/01.png" alt="">
                        <p>名称:000</p>
                        <p>价格:000</p>
                        <p>热量:000</p>
                    </div>
                    <mt-button class="btn_buy">+</mt-button>
                </li>
                <li class="aa">
                    <div class="bb">
                         <img class="img_item" src="../../../assets/01.png" alt="">
                        <p>名称:000</p>
                        <p>价格:000</p>
                        <p>热量:000</p>
                    </div>
                    <mt-button class="btn_buy">+</mt-button>
                </li>
                <li class="aa">
                    <div class="bb">
                         <img class="img_item" src="../../../assets/01.png" alt="">
                        <p>名称:000</p>
                        <p>价格:000</p>
                        <p>热量:000</p>
                    </div>
                    <mt-button class="btn_buy">+</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods: {

    },  
}
</script>
<style socoped>
    ul{
        padding:0;
    }
    .aa{
        border-bottom:1px solid #d3d3d3;
    }
    .aa,.bb{
        list-style-type:none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
    }
    .bb{
        justify-content:start;
    }
    .btn_buy{
        width:38px;
        height:38px;
        background-color:#90c322;
        margin-right:20px;
    }
    .img_item{
        width:50px;
        height:50px;
    }
</style>