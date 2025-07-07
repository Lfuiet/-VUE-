<template>
    <div class='navSwiper'>
		
		<div class='content'>
      <!-- 上呈现框 -->
			<div class='navigation'>
				<div class='content-search'>
					<input  v-model="input" name="" placeholder="输入搜索">
					<el-icon :size='22' color='#808080' @click="Qsearch()"><Search/></el-icon>
				</div>
			<ul>
				
			<li  ><div class='category-detail'  v-if="Tsear">
					<div class='detail-main' @mouseleave="mourseOut1()" >
						<div class='detail-desc'>查询结果</div>
						<div class='detail-class1'>
						<div class='course-card'
								v-for='item2 in Qresult '
								:key='item2.id'>		
						<div class='course-image1'>
									<img :src="item2.img">
								</div>
								<div class='right'>
									<div class='courseName'>
										{{ item2.title }}
									</div>
									<div class="courseDegree">{{ item2.count }} 人购买</div>
									<div class='buy'>
										<div class='buy-free'>
											<div class='coursePrice'>
												<div class='price'>¥{{item2.price}}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li 
				v-for='item in getFirstList'
				:key='item.id'
				@mouseenter="mourseHover(item)"
				@mouseleave="mourseOut(item)">
				<router-link to='/'>
				{{ item.title }}>
					<el-icon color='#ffffff' :size='20'><arrow-right /></el-icon> 
				</router-link> 
				<div class='category-detail' v-if="item.hovered">
						<div  class='detail-main'>
						<div class='detail-desc'>简单概述</div>
						<div class='detail-list'>
							<div class='list-know'>手办角色：</div>
							<div class='list-ul'>
								<div class='list-item'
								>{{item.subItems}}</div> 
							</div>
						</div>
						<div class='detail-class'>
							<div 
								class='course-card'
								v-for='item2 in item.course'
								:key='item2.id'>	
						<div class='course-image'>
									<img :src="item2.img">
								</div>
								<div class='right'>
									<div class='courseName'>
										{{ item2.title }}
									</div>
									<div class="courseDegree">{{ item2.count }} 人购买</div>
									<div class='buy'>
										<div class='buy-free'>
											<div class='coursePrice'>
												<div class='price'>¥{{item2.price}}</div>
											</div>
	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
			</ul>		
	</div>

      <div class='sliders'>
				<el-carousel 
					:interval="5000" 
					arrow="always"  
					height="460px"
					v-if='slidersList.length > 0'
				>
				    <el-carousel-item
				    	v-for='itemsl in slidersList'
				    	:key='itemsl.id'
				    >
				      <img :src="itemsl.imageUrl">
				    </el-carousel-item>
				</el-carousel>
			</div>
    </div>	
    <div class='course-type'>
			<div class='course-type-item'>
				<router-link to='/'>
					<div class='course-type-item-icon'>
						<img src="/img/chuji.png">
					</div>
					<div class='course-type-item-text'>
						<div class='course-type-item-title'>布偶</div>
						<div class="course-type-item-desc">精美</div>
					</div>
				</router-link>	
			</div>
			<div class='course-type-item'>
				<router-link to='/'>
					<div class='course-type-item-icon'>
						<img src="/img/zhongji.png">
					</div>
					<div class='course-type-item-text'>
						<div class='course-type-item-title'>手办</div>
						<div class="course-type-item-desc">还原</div>
					</div>
				</router-link>	
			</div>
			<div class='course-type-item'>
				<router-link to='/'>
					<div class='course-type-item-icon'>
						<img src="/img/gaoji.png">
					</div>
					<div class='course-type-item-text'>
						<div class='course-type-item-title'>角色</div>
						<div class="course-type-item-desc">多样</div>
					</div>
				</router-link>	
			</div>
			<div class='course-type-item'>
				<router-link to='/'>
					<div class='course-type-item-icon'>
						<img src="/img/xiangmu.png">
					</div>
					<div class='course-type-item-text'>
						<div class='course-type-item-title'>价格</div>
						<div class="course-type-item-desc">实惠</div>
					</div>
				</router-link>	
			</div>
			<div class='course-type-item'>
				<router-link to='/'>
					<div class='course-type-item-icon'>
						<img src="/img/suanfa.png">
					</div>
					<div class='course-type-item-text'>
						<div class='course-type-item-title'>快递</div>
						<div class="course-type-item-desc">迅速</div>
					</div>
				</router-link>	
			</div>
		</div>
	
</div>
</template>
<script setup>
//鼠标移入
import { ArrowRight } from "@element-plus/icons-vue";
import { Search , ShoppingCart} from "@element-plus/icons-vue";
import axios from 'axios'
import Mock from 'mockjs';
import { useStore }   from  '../../store/user'
import  { storeToRefs } from 'pinia'
import { reactive ,ref} from "vue"
const store=useStore()
const { getFirstList,CartList} =storeToRefs (store)

// let getNowId=reactive([])
let getNowId = localStorage.getItem('getNowId')
let Qresult=[]
let input =''
let Tsear=ref(false)
//鼠标移入的默认布尔值
let isFirst = ref(false);
const mourseHover = ( item )=>{
	isFirst.value = true;
	item.hovered = true; 
  }  

    
//鼠标移出
const mourseOut = (item)=>{
	isFirst.value = false;
	item.hovered = false;  
	  
}
const mourseOut1 = ()=>{
	Tsear.value=false 
	  

	 
}	
//轮播图片
const slidersList=reactive([  
        { id: 1, imageUrl: '/img/1.jpg' },  
        { id: 2, imageUrl: '/img/玩具/222.jpg' },  
		{ id: 3, imageUrl: '/img/玩具/111.jpg' },  
        // ...更多图片  
      ] ) 

const searchCartList=(keyword)=> {
  return CartList.value.filter(item => item.title.includes(keyword));
}
const Qsearch=()=>{
	
	let i=input
	if(i=='')
	{
		i='.'

	}
	 Qresult = searchCartList(i)

	Tsear.value = true;
}
const QSearch = () => {
  
  axios({
    url: "GetQ", // 必须与mymock中的url完全相同。
    method: "post",
    data: {
      SearchIm: input,
    },
  }).then(function (response) {  
	getNowId1=response.data
	// localStorage.getNowId=response.data;
	localStorage.setItem('getNowId', (response.data));
    // 
  });

 Tsear.value = true;
};

Mock.mock("GetQ", "post", function (op) {
  const account = JSON.parse(op.body); // 解析请求体为对象

  const result = searchCartList(account.SearchIm)
  // 返回模拟的响应数据，应该是一个对象
  return {
    data: result, // 将结果数组作为响应的 data 字段返回
    // ... 其他模拟的响应字段（如状态码、消息等）
  };
});
</script>

<style scoped>

.content-search{
	
	display: flex;
	margin: 5px;
	align-items: center;
	padding:5px 10px;
	width: 200px;
	height: 35px;
	background: #F0F2F4;
	border-radius: 8px;
}
.content-search input{
	padding:0 9px;
	width:165px;
	height: 40px;
	border:0;
	border-radius: 8px;
	background: #F0F2F4;
	color:#808080;
	font-size:16px;
	outline: none;
}
.navSwiper{
	padding-top: 1px;
    width: 100%;
    height: 640px;
    background: url('/img/transitionbg.png') no-repeat;
}
.content{
	position: relative;
	display: flex;
	width: 1200px;
    height: 460px;
    margin: 35px auto 0 auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}
.navigation{
	width: 240px;
    height: 460px;
    background: #2b283d;
}
.navigation ul{
	margin:20px 0;
}
.navigation ul li{
	height: 40px;
    list-style: none;
    margin-bottom: 5px;
}
.navigation ul li a {
	display: flex;
	justify-content: space-between;;
	align-items: center;
	padding: 0 20px;
	color: #ffffff;
	height: 40px;
	line-height: 40px;
	font-size: 16px;
	font-weight: bold;
	text-decoration: none;
}
.navigation ul li a:hover {
	background: linear-gradient(to right, #3fe5ff, transparent);
}
.sliders{
	width: 1060px;
    height: 460px;
}
.sliders img{
	width: 100%;
	height: 100%;
}
.category-detail {
  position: absolute;
  top: 0;
  left: 220px;
  background: rgba(255, 255, 255);
  z-index: 65535;
  min-width: 800px;
  height: 460px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
}
.detail-main {
  cursor: pointer;
  height: 100%;
  position: relative;
}
.detail-desc {
  padding-top: 20px;
  padding-left: 20px;
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  opacity: 1;
}
.detail-list {
  width: 100%;
  display: flex;
  margin-top: 10px;
  padding-left: 20px;
  color: #333333;
  font-weight: 400;
  font-size: 14px;
}
.list-know {
  width: 70px;
  height: 30px;
  line-height: 30px;
}
.list-ul {
  width: calc(100% - 70px);
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  line-height: 30px !important;
  padding: 0 10px !important;
  color: #333333 !important;
  font-size: 14px !important;
  font-weight: unset !important;
  height: auto !important;
}
.list-item:hover {
  background: unset !important;
  color: #00ffff;
}
.detail-class {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 270px;
  padding: 20px 20px;
  background-color: #F3F5F6;
  box-sizing: border-box;
}
.detail-class1 {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 270px;
  padding: 20px 20px;
  background-color: #F3F5F6;
  box-sizing: border-box;
}


.course-card {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  width: 370px;
  height: 110px;
  box-sizing: border-box;
}


.course-image {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.course-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.course-image1 {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.course-image1 img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  padding: 5px;
  box-sizing: border-box;
}

.courseName {
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  color: #333333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.courseDegree {
  font-size: 12px;
  color: #808080;
}



.coursePrice {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.coursePriceZero {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricePri {
  font-size: 12px;
}

.price {
  margin-left: 5px;
  color: red;
}

.courseMember {
  color: #FFFFFF;
  padding: 2px;
  box-sizing: border-box;
  background: red;
  border-radius: 6px;
}

.coursePricePri {
  font-size: 12px;
}

.buy {
  width: 200px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.buy-free {
  display: flex;
  align-items: center;
}

.buy-free img {
  width: 12px;
  height: 12px;
  margin-left: 10px;
}

.buy .learn {
  color: #3586FF;
  font-size: 12px;
}

.buy .cart {
  display: flex;
  margin-right: 5px;
  font-size: 12px;
}

.buy .addcart {
  margin-left: 2px;
  color: #FF3D17;
  font-size: 12px;
  cursor: pointer;
}

.course-type{
	display: flex;
	width: calc(1200px);
	margin: 0 auto;
	background: #ffffff;
    box-shadow: 0px 10px 25px 10px #d2d2d2;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.course-type-item{
	width: 260px;
    height: 100px;
    flex: 1;
}
.course-type-item a{
	display: flex;
	justify-content: center;
	text-decoration: none;
}
.course-type-item-icon{
	font-size: 35px;
    border-radius: 50%;
    margin: 25px 10px 25px 0;
    width: 50px;
    height: 50px;
    background: #55ee8b;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
}
.course-type-item-icon img{
	width: 100%;
	height: 100%;
}
.course-type-item-text{
	margin: 25px 0;
}
.course-type-item-title{
	font-size: 18px;
    line-height: 30px;
    font-weight: bold;
}
.course-type-item-desc{
	color: #808080;
    font-size: 14px;
}
</style>