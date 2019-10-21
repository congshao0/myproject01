<template>
  <div>
    <h2>注册</h2>
    <!--表单输入框 用户名 密码 年龄 提交按钮 -->
    <mt-field label="用户名"
    placeholder="请输入用户名"
    :attr="{maxlength:10}"
    v-model="uname">
    </mt-field>
    <mt-field label="密码"
    placeholder="请输入密码"
    type="password" v-model="upwd">
    </mt-field>
    <mt-field label="电话号码"
    placeholder="请输入电话号码"
    type="number" v-model="phone"></mt-field>
    <mt-button size="large" @click="reg">
      用户注册
    </mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {uname:"",upwd:"",phone:""}
  },
  methods:{
    reg(){
      //功能:验证用户输入表单 
      //1:创建正则表达式一 用户名和密码
      //  3~12位 字母数字 严格验证
      var regu = /^[a-z0-9]{3,12}$/i;
      //2:创建正则表达式二 年龄
      var regh = /^1[3-8]\d{9}$/i;
      //  2   位 数字
      //3:获取用户名 16:27
      var u = this.uname;
      //4:获取密码
      var p = this.upwd;
      //5:获取年龄
      var h = this.phone;
      //console.log(u+":"+p+":"+a);
      //6:验证用户名，如果出错交互
      if(!regu.test(u)){
        //6.1:提示用户输入出错提示框
        this.$messagebox("消息","用户名格式不正确");
        //6.2:停止当前函数继续执行
        return;
      }
      //7:验证密码，  如果出错交互 
      if(!regu.test(p)){
        //7.1:提示用户输入密码出错
        this.$messagebox("消息","密码格式不正确");
        return;
      }
      //8:验证电话号码    如果出错交互
      if(!regu.test(h)){
        this.$messagebox("消息","电话号码格式不正确");
        return;
      }
      //9:验证成功 ajax请求完成注册任务 
      else{
        var url = "register";
        var obj = {uname:u,upwd:p,phone:h};
        this.axios.get(url,{params:obj}).then(res=>{
        //6: 回调函数:接收服务器返回数据
          var code = res.data.code;
          if(code==-1){
          //7: 失败 提示
          this.$messagebox("消息","注册失败");
          }else{
          //8: 成功 跳转
          //this.$router.push("/product")
          this.$messagebox("消息","注册成功");
          }
        })
      }  
    }
  }
}
</script>

