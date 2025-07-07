<template>
    <Header></Header>
      <div class="fixed">
        <div class="bgColor">
          <h1 class="main-shopcart">商品详情</h1>
        </div>
        <div class="container">
          <div class="main">

            <div class="nav">
              <span class="left">商品名称：item</span>
            </div>
              <div  class="haveorder">
                {{ $route.params.id }};
                <!-- {{ foundItem.title }}
                {{foundItem.id}}; -->

                
               <!-- {{   $route..id}} -->
            </div>
           
          </div>
        </div>
      </div>
    <Foot></Foot>
  </template>
    
<script setup>
    //组件
    import Header from '../common/Header.vue'
    import Foot from '../common/Foot.vue'
    import  { storeToRefs } from 'pinia'
    import { useStore }   from  '../../store/user'

    const store=useStore()
    const { getFirstList} =storeToRefs (store)
    import { ref, onMounted, watch } from 'vue';  
    import { useRoute } from 'vue-router';  
  
    const route = useRoute();  
  
// 你可以创建一个响应式的 ref 来存储参数的值  
    const param = ref(route.params.id);  
    
    
  
    let foundItem = null; // 初始化 foundItem 为 null 或 undefined，或者根据您的需要设置默认值  
  
    onMounted(() => {  
    // 当组件被挂载到 DOM 上后，执行 for 循环  
    if (getFirstList.value && Array.isArray(getFirstList.value)) {  
        for (let i = 0; i < getFirstList.value.length; i++) {  
  
            for (let j = 0; j < getFirstList.value[i].course.length; j++) {  
                if (getFirstList.value[i].course[j].sn0 == 11) {  
                    foundItem = getFirstList.value[i].course[j]  
                    break // 如果只需要找到第一个匹配项，则跳出内部循环  
                }  
            }  
  
            // 如果已经找到匹配项，并且您只想找到一个，那么可以跳出外部循环  
            if (foundItem) {  
                break  
            }  
        }  
    } else {  
        console.error('getFirstList 不是一个数组或未定义')  
    }  
}) 
//     let foundItem = getFirstList.find(listItem => {  
//   // 遍历当前 listItem 的 course 数组  
//   return listItem.course.find(courseItem => {  
//     // 检查 courseItem 的 sn0 是否等于 i  
//     return courseItem.sn0 == i;  
//   });  
// });  



    </script>
    <style scoped>
    .fixed{
      width: 100%;
      height: 100%;
      background: #FFFFFF;
       width: 100%;
      height: 600px;
      background-color: red;
      background: linear-gradient(-45deg, #ee7752, #ead5dd, #abc5ce, #cae0db);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }
   
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .container{
      width: 900px;
      height: 470px;
      margin: -10px auto 50px auto;
      background: #EBEDF2;
      border-radius: 12px;
      box-shadow: 0px 2px 5px #888888;
    }
    .main{
      padding:20px;
      border-radius: 5px;
    }
   
    .main-shopcart{
      width: 900px;
      margin: 0 auto;
      height: 42px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 35px;
      color: #FFFFFF;
      padding: 30px 0;
      opacity: 1;
    }
    .nav{
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #E6E6E6;
    
    }
    .nav .left{
      width: 200px;
      height: 26px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 0px;
      color: #FF4400;
      opacity: 1;
      border-bottom: 2px solid #FF4400;
    }
    .nav .right{
      width: 108px;
      height: 24px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0px;
      color: #333333;
      opacity: 0.5;
    }
    
    /* 头部开始 */
    .head{
      display: flex;
      padding: 0 10px;
      margin: 20px 0;
      width: 100%;
      height: 35px;
      line-height: 35px;
      background: #FCFCFC;
      opacity: 1;
      border-radius: 0px;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0px 2px 5px 2px #cccccc;
    }
    .head .item{
      width: 140px;
      font-size: 14px;
      color: #333333;
    }
    .check .all{
      margin-right: 10px;
    }
    .check .text{
      width: 1487px;
      height: 40px;
    
    }
    .classInfo{
      width: 400px!important;
      color: #333333;
    }
    /* 头部结束 */
    
    /* 订单开始 */
    .haveorder{
      display: flex;
      width: 860px;
      height: 380px;
      background: #FCFCFC;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0px 2px 5px 2px #cccccc;
    }
    .haveorder .order-item{
      height: 200px;
      line-height: 200px;
      margin:  5px;
    }
    .order-item:first-child{
      width: 30px;
    }
    .order-item{
      width: 150px;
      font-size: 16px;
      color: #333333;
    }
    .totoalprice{
      color: #E2231A;
    }
    .num{
      width: 120px !important;
      padding-left: 15px;
    }
    .info{
      display: flex;
      width: 470px !important;
      height: 200px;
      line-height: 200px;
    }
    .courseimg{
      margin:40px 20px 40px 0;
      width: 200px;
      height: 120px;
    }
    .courseimg img{
      width: 100%;
      height: 100%;
    }
    .info .course-name{
      width: 300px;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .delete{
      cursor: pointer;
    }
    .deletd-text{
      margin-left: 5px;
    }
    
    /* 订单结束 */
    
    /* 暂无订单开始 */
    .noOrder{
      width: 100%;
      height: 100%;
      text-align: center;
      margin:200px 0;
    }
    .order-alert{
      height: 31px;
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0px;
      color: #B5B9BC;
      opacity: 1;
      margin:20px 120px;
    
    }
    /* 暂无订单结束 */
    .foot{
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #333333;
      margin-bottom: 10px;
    }
    .foot-item{
      width: 120px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
    }
    .unique{
      margin-left: 5px;
      font-size: 24px;
      color: #FF4400;
    }
    .btn{
      width: 120px;
      height: 40px;
      margin-left: 20px;
      border: none;
      color: #FFFFFF;
      font-size: 22px;
      border-radius: 5px;
      background: #FF4400;
      cursor: pointer;
      box-shadow: 0px 3px 5px 2px #ff727f;
    }
    </style>