<template>
	<header>
		<div class='header-content'>
			<h1 class='content-logo'>
				<img src="/img/玩具/header01.jpg">
			</h1>
			<div class='content-nav'>
				<ul>
					<li>
						<router-link to='/Home' >首 页</router-link>
					</li>
					<li>
						<div class='content-login' v-if='!isLogin'>玩具商品</div>
						<div class='content-login' v-else><router-link to='/course'>玩具商品</router-link></div>
					</li>	
				</ul>
			</div>
			<div class='search-buy-login'>
				<div class='content-search'>
				</div>
				<div class='cntent-shopping'>
					<router-link to='/cart'> <el-icon :size='24' color='#808080'><shopping-cart /></el-icon></router-link>
				</div>
				<div class='content-login' v-if='!isLogin'>
					<router-link to='/login'>登录/注册</router-link>
				</div>
				<div class="content-login-success" v-else>    
				    <div>
				      <img
				        class="avator"
				        src="/img/玩具/海4.jpg" />
				      
				    </div>
				</div>
			</div>
		</div>
	</header>
</template>


<script setup>
import { Search , ShoppingCart} from "@element-plus/icons-vue";
import {ref} from 'vue'

let isLogin = ref(false);


onBeforeMount(()=>{
	if(typeof(localStorage.isLogin) !== "undefined")
	{
		isLogin=true;
	}
	
})

</script>
<style scoped>
header{
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width:100%;
	height: 100%;
	background: #ffffff;
	box-shadow: 0px 5px 6px rgba(0,0,0,0.16);
}
.header-content{
	display: flex;
	justify-content: space-around;
	width:1200px;
}
.content-logo{
	width:160px;
	height: 55px;
	margin:10px 0;
	cursor: pointer;
}
.content-logo img{
	height: 100%;
}
.content-nav{
	width: 300px;
	height: 75px;
}
.content-nav ul{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 75px;
}
.content-nav ul li{
	font-size:18px;
	color:#808080;
	cursor: pointer;
}
.content-nav ul li a{
	font-size:18px;
	color:#808080;
	cursor: pointer;
	text-decoration: none;
}
.search-buy-login{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 650px;
}
.content-search{
	display: flex;
	align-items: center;
	padding:5px 10px;
	width: 350px;
	height: 35px;
	/* background: #F0F2F4; */
	border-radius: 8px;
}
.content-search input{
	padding:0 10px;
	width:430px;
	height: 40px;
	border:0;
	border-radius: 8px;
	background: #F0F2F4;
	color:#808080;
	font-size:16px;
	outline: none;
}
.content-login{
	font-size: 18px;
	color:#808080;
	text-align: center;
	cursor: pointer;
}
.avator {
	height: 53px;
	width: 53px;
	cursor: pointer;
	border-radius: 50%;
}
</style>