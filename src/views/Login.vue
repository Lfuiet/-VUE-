<template>
	<div class='container'>
	            <!-- 登录框左侧 -->
                <div class="login-box">
	            <div class="login-left">
	                <!-- <a   class="logo" >
	                    <img src="/img/玩具/00.jpg" >
                    </a> -->
                    <div class="change_To" @click="current=1">登录 </div>
                    <div class="change_To" @click="current=2"> 注册</div>
   
	                 
	            </div>
	            <!-- 登录框右侧 -->
	            <div class="login-right">
	                <div class="login-form">
	                    <ul class="nav nav-tabs">
	                       
	                    </ul>
	                    <div class="tab-content">
	                        <div class="tab-pane fade show active" v-if='current==1'>
	                            <!-- 账号登录 -->
	                            <div class="tab-main">
                                    <h3 class="Th2" >登录</h3>
	                            	<el-form>
										<el-form-item class="login-user" prop="username">
										   <el-icon><avatar /></el-icon>
									       <el-input v-model="ruleForm.username" placeholder="请输入您的用户名"/>
									    </el-form-item>
									    <el-form-item class="login-password" prop="userpwd">
										   <el-icon><lock /></el-icon>
									       <el-input type='password' v-model="ruleForm.userpwd" placeholder="请输入您的密码"/>
									    </el-form-item>
									    <el-form-item class="login-submit">
									      <el-button type="primary"  @click="loginInt">登录</el-button>
									    </el-form-item>
									    <a class="forgetpwd">记住密码</a>
	                                   
                                    </el-form>
	                            </div>
	                       
	                       
	                        </div>
                            <div class="tab-pane fade" v-else>
	                            <!-- 注册 -->
	                            <div class="tab-main">
                                    <div class="tab-main">
                                        <h3 class="Th2">注册</h3>
	                            	<el-form>
										<el-form-item class="login-user" prop="username">
										   <el-icon><avatar /></el-icon>
									       <el-input v-model="RegForm.username" placeholder="请输入您的用户名"/>
									    </el-form-item>
									    <el-form-item class="login-password" prop="userpwd">
										   <el-icon><lock /></el-icon>
									       <el-input type='password' v-model="RegForm.userpwd" placeholder="请输入您的密码"/>
									    </el-form-item>
									    <el-form-item class="login-submit">
									      <el-button type="primary" @click="register" >注册</el-button>
									    </el-form-item>
                                        {{ tip }}
	                                   
                                    </el-form>
	                            </div>	                            
                            </div>
	                    </div>
	                </div>
	            </div>
	        </div>
        </div>
	</div>
</template>

<script setup>
import axios from 'axios'
import Mock from 'mockjs';
import { useRoute, useRouter } from 'vue-router';  
import {message} from 'ant-design-vue'
  
    const router = useRouter();  
// import { useUserStore } from '../store/user'
// const userStore = useUserStore();

//账号登录和短信登录切换
let current = ref(1);
//账号登录和短信登录
let loginTxt = ref([
	{id:1,text:'账号登录'},
	{id:2,text:'短信登录'}
])
const loginChange = ( id )=>{
	current.value = id;
}	
//账号密码登录
const ruleFormRef = ref('');
let ruleForm = reactive({
	username:'',
	userpwd:''
})
let RegForm = reactive({
	username:'',
	userpwd:''
})
const tip = ref('')
const register=()=> {
    if(RegForm.username&&RegForm.userpwd)
    {
       var arry = [];
	arry={
        user:RegForm.username,
        password:RegForm.userpwd,
        remenber:1}
    var userList = JSON.parse(window.localStorage.getItem('User_list') || '[]');

// 将新的数据添加到数组中
        userList.push(arry);

// 将更新后的数组存回localStorage
        window.localStorage.User_list = JSON.stringify(userList); 
        tip.value='提示：注册成功，请前往登录'
  // 10秒后重新赋值
    setTimeout(() => {
        tip.value = '';
    }, 1000);
       // 重置表单  
    RegForm.username = '';  
    RegForm.userpwd = ''; 
    }else{
        tip.value='提示：注册失败，请重新注册'
  // 10秒后重新赋值
    setTimeout(() => {
        tip.value = '';
    }, 1000);
       // 重置表单  
    RegForm.username = '';  
    RegForm.userpwd = ''; 

    }
    
      
     
}
const loginInt=()=>{
    
  


    axios({
    url: "Getmock",    //必须与mymock中的url完全相同。
    method: "post",
    data: {
        username:ruleForm.username,
        password:ruleForm.userpwd
           
    },
  }).then(function (response) {  
      // 处理响应数据  
      
      if(response.data.data=='1')
      {
        // a"登录成功！欢迎您！"); // 使用 alert 来显示返回的数据  
        message.info("登录成功！欢迎您 ")
        localStorage.isLogin=true;
        router.push('/Home')
      }else{
        message.info("登登录失败，请重新登录！ ")
        
      }
      
    //   this.$route.push({ name: 'Course' })
    // location.reload(); // 刷新页面

    })       

}

Mock.mock('Getmock','post',function(op){
    const account=JSON.parse( op.body)
    var userList = JSON.parse(window.localStorage.getItem('User_list') || '[]');
    let j=-1
    let i = 0
    for (; i < userList.length; i++) {
   
       console.log(userList[i].user+' '+account.username)
      if (userList[i].user == account.username) {
        j=i;
        break
      } 
       
    }
    if(j!=-1)
        return {  
            'status': 200, // 例如，使用400表示错误的HTTP状态码  
            'statusText': 'OK', // 状态文本  
            'data': '1' // 返回的数据  
            };  
        else{
            return {  
            'status': 400, // 例如，使用400表示错误的HTTP状态码  
            'statusText': 'Bad Request', // 状态文本  
            'data': '0' // 返回的数据  
            };  
        }

    
  
})




</script>

<style scoped>
.change_To{
    margin: 20px;
    width: 240px;
    height: 40px;
    padding: 50px;
    border-radius: 6px;
    text-align: center;
    font-size: xx-large;

}
.container{
	position: relative;
    width: 100vw;
    height: 100vh;
    background: url(/img/loginbg.jpeg) no-repeat center;
}
section{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 10;
}
.login-box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 950px;
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    box-shadow: 0px 0px 5px #777;
}
.login-left{
    width: 475px;
    height: 500px;
    background: #c1cfe2;
}
.login-right{
    position: relative;
    width: 475px;
    height: 500px;
    background: url(/img/ybbg.jpeg) no-repeat center center;
}

.nav-tabs {
    border-bottom: none;
}
.login-form{
    padding: 10px 40px;
    width: 350px;
    height: 440px;
    background: #ffffff;
    box-shadow: 0 0 8px #cccccc;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.nav-tabs{
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.nav-tabs li{
    width: 40%;
    padding: 0px 0;
    font-size: 17px;
    font-weight: bold;
}
.nav-tabs li a{
    color: #333;
    display: block;
    height: 45px;
    line-height: 45px;
}


.nav-tabs li a:hover{
    text-decoration: none;
}
.tab-main{
    height: 360px;
    padding: 1px 0 0 0;
}
.login-user{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #666;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-user i{
    font-size: 18px;
    color: #666;
    margin-left: 5px;
}
.login-user input{
    width: calc(100% - 30px);
    height: 35px;
    outline: none;
    color: #666666;
    border: 0;
    padding: 0 5px;
}
.login-password{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #666;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-password i{
    font-size: 18px;
    color: #666;
    margin-left: 5px;
}
.login-password input{
    width: calc(100% - 30px);
    height: 35px;
    outline: none;
    color: #666666;
    border: 0;
    padding: 0 5px;
}


.login-submit{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}
.login-submit  button{
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    letter-spacing: 5px;
    border-radius: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}
.forgetpwd{
    float: right;
    color: #888;
}

.login-left{
    padding: 20px;
}
.login-left .logo img{
    width: 120px;
}


.login-left .qrcode-text{
    text-align: center;
    color: white;
    line-height: 35px;
    margin-top: 10px;
}
.Th2{
    text-align: center;

    
}

</style>