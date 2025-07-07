<template>
    <Header></Header>
      <div class="fixed">
        <div class="bgColor">
          <h1 class="main-shopcart">商品详情</h1>
        </div>
        <div class="container">
          <div class="main">

           <div class="nav">
              <span class="left">商品名称：{{ Item.title}}</span>
            </div>
              <div  class="haveorder">
                
                <div class='coures-image'> <img :src="Item.img"> </div>
                <div class=" cart"> 
                 <ul>
                  <li>价格：{{ Item.price }},</li>
                  <li>购买人数：{{ Item.count }},</li>
                  <li>
                    <button class="btn1" @click="count++" >+</button>&nbsp;&nbsp;&nbsp;{{ count}}&nbsp;&nbsp;&nbsp;<button class="btn1" @click="count--">-</button><br/>
                  </li><li class="li1">商品介绍<br/><br/>  
                      {{ Item.introduce }}
                    </li> 
                 </ul>
                               
                                    
                </div>
            </div>
           
          </div>
        </div>
      </div>
    <Foot></Foot>
  </template>
    
<script setup>
    //组件
    import Header from '../components/common/Header.vue'
    import Foot from '../components/common/Foot.vue'
    import  { storeToRefs } from 'pinia'
    import { useStore }   from  '../store/user'
    import { ref, onMounted, watch } from 'vue';  
    import { useRoute } from 'vue-router';  
  
    const route = useRoute();  
    const store=useStore()

    console.log(route.params.id)
    const { CartList} =storeToRefs (store)
    let param = ref(route.params.id); 
    let  Item=JSON.parse(param.value)
    console.log(Item);
    const count1 = 0
    let count = ref(0)
    let flag=ref(0)

    watch(count, function () {
      
      let buyCarts = JSON.parse(window.localStorage.getItem('buyCarts_list') || '[]');
      let found = false;
      for (let i = 0; i < buyCarts.length; i++) {
        if (buyCarts[i].sn0 === Item.sn0) {
          buyCarts[i].count++;
          buyCarts[i].buyToNum++ // 如果 buyToNum 是每个商品的某个特定属性（如购买上限），则这里也加1
          found = true;

          break; // 找到后跳出循环
        }
      }

      if (!found) {
        // 假设 item.count 和 item.buyToNum 已经在传入时设置好了
        Item.count++;
        Item.buyToNum++;
        buyCarts.push(Item);
      }

  // 更新localStorage中的购物车数据
  window.localStorage.setItem('buyCarts_list', JSON.stringify(buyCarts));
    })


    const bt1 = (count) => {
  
      flag.value+=1
      count=flag.value
  let buyCarts = JSON.parse(window.localStorage.getItem('buyCarts_list') || '[]');
  let found = false;
  for (let i = 0; i < buyCarts.length; i++) {
    if (buyCarts[i].sn0 === Item.sn0) {
      buyCarts[i].count++;
      buyCarts[i].buyToNum++; // 如果 buyToNum 是每个商品的某个特定属性（如购买上限），则这里也加1
      found = true;

      break; // 找到后跳出循环
    }
  }

  if (!found) {
    // 假设 item.count 和 item.buyToNum 已经在传入时设置好了
    Item.count++;
    Item.buyToNum++;
    buyCarts.push(Item);
  }

  // 更新localStorage中的购物车数据
  window.localStorage.setItem('buyCarts_list', JSON.stringify(buyCarts));
};

const bt2 = (count) => {
  if(count>0)
  {
    count.value--;
    let buyCarts = JSON.parse(window.localStorage.getItem('buyCarts_list') || '[]');
  for (let i = 0; i < buyCarts.length; i++) {
    if (buyCarts[i].sn0 === item.sn0) {
      if (buyCarts[i].count > 1) {
        buyCarts[i].count--;
        buyCarts[i].buyToNum--; // 如果 buyToNum 是每个商品的某个特定属性（如购买上限），则这里也减1
        Item = buyCarts[i];
      } else {
        // 如果数量为1，可以在这里处理删除商品的逻辑，例如从购物车中移除该商品
        buyCarts.splice(i, 1);
      }
      break; // 找到后跳出循环
    }
  }

  // 更新localStorage中的购物车数据
  window.localStorage.setItem('buyCarts_list', JSON.stringify(buyCarts));
  }
  
};

// // 你可以创建一个响应式的 ref 来存储参数的值  
//     const param = ref(route.params.id);  
  
//   onMounted(()=>{
//     findItemAndStore()
//   })
//     function findItemAndStore() {
//     for (let i = 0; i < CartList.length; i++) {
//         if (CartList[i].sn0 === param.value) {
//             localStorage.foundItem = JSON.stringify(CartList[i]);
//             break; // 找到后跳出循环
//         }
//     }
//     console.log(Item);
// }
    // const Item=JSON.parse(localStorage.foundItem)

//     let foundItem = getFirstList.find(listItem => {  
//   // 遍历当前 listItem 的 course 数组  
//   return listItem.course.find(courseItem => {  
//     // 检查 courseItem 的 sn0 是否等于 i  
//     return courseItem.sn0 == i;  
//   });  
// });  



    </script> 
    <style scoped>
    .li1{
      text-align: justify;
      text-align-last: auto;
    }
    .btn1{
      width: 20px;
      height: 20px;
      border-radius: 6px;
    }
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
    /* .coures-image {
    display: flex;
    margin-left: 100px;
  width: 100%;
  height: 150px;
  cursor: pointer;
} */
.coures-image img{
    /* display: flex;
justify-content: center;
    text-align: center; */
    margin-left:50px ;
    width: 150px;
  height: 150px;
  border-radius: 6px;
}
.cart{
  background-color: #c0d7ea;
  margin: 5px 30px 20px;
  width: 450px;
  height: 300px;
  border-radius: 6px;
  


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