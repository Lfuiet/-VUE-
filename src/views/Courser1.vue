<template>
    <Header></Header>
	<div class='new-course'>
		<div class='contentTitle'>
			<div class='contentTitle-left'>
				<div class='hot'>
					<div class='hot-l'>HOT</div>
					<div class='hot-r'></div>
				</div>
				<div class='txt'>
					<div class='txt-top'>新上周边</div>
					<div class='txt-bottom'></div>
				</div>
			</div>
			
		</div>
		<div class='newCourseContent'
            v-for='item in getFirstList'
                        :key='item.id'>
                        {{ item.title }}
             <div class="title-spacer"></div> <!-- 使用定义的CSS类 -->  
			<ul >
				<li 
					class='courseItem'
					v-for='item2 in item.course'
					:key='item2.id'
				>
                    
                    <div  class='courseInfo'>
                        <div class='coures-image'> <img :src="item2.img"></div>
                        <div class="couserInfo_in">
                            <div class="span">商品名：{{ item2.title}}</div>
                            <!-- <div class="span">已购买：{{ item2.buyToNum}}</div> -->

                            <div class="price">价格（￥）：{{ item2.price }} &nbsp;&nbsp;&nbsp;<router-link :to="{ name: 'detail', params: { id:JSON.stringify(item2)} }">  
  <button >详细信息</button>  
</router-link></div>
                            

                            <div class="btn " @click="addTo(item2)" >
                                        添加到购物车
                                </div>
                                <!-- <div class="btn-box" v-else>
                                <div class="btn" @click="count--">-</div>
                                <div>{{ item2.count }}</div>
                                <div class="btn" @click="count++">+</div>
                            </div>  -->
                            
                        </div>
                    
                </div>
            </li>
			</ul>
		</div>
	</div>
    <Foot></Foot>
</template>


<script setup>
import Header from '../components/common/Header.vue'
import Foot from '../components/common/Foot.vue'
import { useStore }   from  '../store/user'
import  { storeToRefs } from 'pinia'
import { reactive } from "vue";

const store=useStore()

const { getFirstList,initFromLocalStorage,} =storeToRefs (store)



const buyCarts = reactive([]); // 使用 ref 创建一个响应式数组  
//新上好课的数据
const addTo = (item) => {  
    // 先从localStorage中读取购物车数据  
    let buyCarts = JSON.parse(window.localStorage.getItem('buyCarts_list') || '[]');  
    let found = false;  
    console.log(buyCarts.length)
    for (let i = 0; i < buyCarts.length; i++) { 
        


        if (buyCarts[i].sn0 === item.sn0) {  
            buyCarts[i].count++;  
            buyCarts[i].buyToNum++; // 如果 buyToNum 是每个商品的某个特定属性（如购买上限），则这里也加1  
            found = true;  
            break; // 找到后跳出循环  
        }  
    }  
  
 
    if (!found) {  
        // 假设 item.count 和 item.buyToNum 已经在传入时设置好了  
         item.count++;  
        item.buyToNum++;
        buyCarts.push(item);  
    }  
  
    // 更新localStorage中的购物车数据  
    window.localStorage.setItem('buyCarts_list', JSON.stringify(buyCarts));  
    // let buyCarts = JSON.parse(window.localStorage.getItem('buyCarts_list') || '[]'); 
    // item.count++;
    // item.buyToNum++; 
    // buyCarts.push(item);
    // window.localStorage.setItem('buyCarts_list', JSON.stringify(buyCarts)); 
};



</script>

<style scoped>
.btn {
    align-self: center;
  text-align: center;
  margin-top:20px ;
  width: 100%;
  background-color: #4897dd;
  border-radius: 8px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  cursor: pointer;
}
.btn:hover {
  background-color: #277ac3;
}
.check{
    width: 100%;
    height: 10px;
    background-color: #222222;
}
.coures-image {
    display: flex;
justify-content: center;
  width: 100%;
  height: 150px;
  cursor: pointer;
}
.coures-image img{
    display: flex;
justify-content: center;
    text-align: center;
    width: 150px;
  height: 150px;
  border-radius: 6px;
}
.couserInfo_in{
   margin-top: 10px;
    /* display:inline-block; */

}
.price{
    margin-left: 5px;
  color: red;
}
.span{
    width: 100%;
    height: 30px;
}
.new-course{
   	width: 1200px;
    margin: 0 auto;
    margin-top: 15px;
}
.contentTitle{
	display: flex;
	justify-content: space-between;
}
.contentTitle-left{
	display: flex;
}
.newCourseContent .title-spacer {  
    height: 40px;  
}
.hot{
	display: flex;
    height: 38px;
}
.hot-l{
	height: 38px;
    font-size: 20px;
    padding: 0 10px;
    text-align: center;
    line-height: 37px;
    color: #ffffff;
    border-radius: 8px 0 8px 8px;
    background: linear-gradient(90deg, #ff727f 0%, #fc685c 100%);
}
.hot-r{
	width: 0;
    height: 0;
    border: 6px solid #fc685c;
    border-right-color: transparent;
    border-bottom-color: transparent;
}
.txt{
	position: relative;
    height: 38px;
    margin-left: 10px;
}
.txt-top{
	font-size: 24px;
    padding: 0 5px;
    color: #222222;
    line-height: 31px;
}
.txt-bottom{
	position: absolute;
    top: 25px;
    left: 0px;
    width: 100%;
    height: 13px;
    background: linear-gradient(90deg, #fbf84f 0%, #fea935 100%);
    border-radius: 7px;
    z-index: -1;
}
.more{
	cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    color: #808080;
}
.newCourseContent{
	width: 1200px;
    margin: 15px auto 0px auto;
}
.newCourseContent ul{
	display: flex;
	/* flex-wrap: wrap; */
}
.courseItem{
	width: 285px;
    height: 280px;
    margin: 0 20px 20px 0;
    transition: margin-top 0.2s;
}
.courseItem:hover{
    margin-top: -10px;
    cursor: pointer;
}
/* .courseItem:nth-child(4n+0){
    margin-right: 0 !important;
} */
.courseInfo{

	position: relative;
    width: 90%;
    height: 300px;
    background: #ffffff;
    box-shadow: 1px 1px 10px rgb(27 39 94 / 40%);
    opacity: 1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow: hidden;
    text-decoration: none;
}
.courseBg{
	position: relative;
    width: 100%;
    height: 160px;
}
.courseBg img{
	width: 100%;
    height: 100%;
}
.courseName{
    margin: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
}
.courseDegree{
    margin-left: 10px;
    font-size: 12px;
    color: #808080;
}
.coursePrice {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 130px;
    font-size: 14px;
    margin-top: 15px;
    padding: 0 5px;
}
.coursePricePri{
    width: 75px;
    font-size: 14px;
    margin-top: 18px;
    padding: 0 13px;
    color: rgba(255, 114, 127, 1);
    font-weight: 700;
}
.coursePriceZero{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    font-size: 14px;
    margin-top: 15px;
    padding: 0 10px;
    color: rgba(53, 134, 255, 1);
}
.courseMemberbg {
    position: relative;
    width: 80px;
    height: 20px;
    color: #ffffff;
    background: linear-gradient(90deg, #ff928e 0%, #fe7062 99%);
    border-radius: 24px 0px 24px 0px;
}
.courseMember {
    position: absolute;
    line-height: 20px;
    left: 13px;
    font-weight: 700;
}
.price {
    line-height: 25px;
    left: 100px;
    color: #ff727f;
    font-weight: 700;
}
</style>