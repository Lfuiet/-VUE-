<template>
  <Header></Header>
    <div class="fixed">
      <div class="bgColor">
        <h1 class="main-shopcart">购物车</h1>
      </div>
      <div class="container">
        <div class="main">
          <div class="nav">
            <span class="left">全部</span>
          </div>
          <ul class="head">
            <li class="item check">
              
            </li>
            <li class="item classInfo">商品信息</li>
            <li class="item price">单价</li>
            <li class="item count">数量</li>
            <li class="item function">操作</li>
          </ul>
          <div v-if="cartList.length > 0">
            <ul 
              class="haveorder"
              v-for='(item) in cartList'
              :key='item.id'
            >
              <li class="order-item">
                
              </li>
              <li class="order-item info" >
                <div class="courseimg" >
                  <img :src="item.img" alt="">
                </div>
                <div class="course-name">{{item.title}}</div>
              </li>

              <li class="order-item">￥{{item.price}}</li>
              <li class="order-item num">{{item.buyToNum}}</li>
              <li class="order-item delete" @click="del(item.sn0)">
                <button class="Delete" >
                  <i class="el-icon-delete"></i>
                  <span class="deletd-text" >删除</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="noOrder" v-else>
            <img src="/image/norder365.png" alt="">
            <div class="order-alert">哎呦！暂无订单</div>
          </div>
          <el-divider class="line"></el-divider>
          <ul class="foot">
            
            <li class="foot-item">合计<span class="unique">{{total}}</span></li>
            <li >
              <button class="btn" @click="pay()">去结算</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <Foot></Foot>
</template>
  
  <script setup>
  //组件
  import Header from '../components/common/Header.vue'
  import Foot from '../components/common/Foot.vue'
  import axios from 'axios'
  import Mock from 'mockjs';
  const cartList= ref(JSON.parse(window.localStorage.buyCarts_list || '[]'))
  //对支付金额呈现
  const total=ref(0)
  watchEffect(() => {  
      let sum = 0;  
      for (let i = 0; i < cartList.value.length; i++) {  
        sum += cartList.value[i].buyToNum * cartList.value[i].price;  
      }  
      total.value = sum;  
    });

const del = ( id )=>{
 
  cartList.value = cartList.value.filter(item => item.sn0 !== id);
  localStorage.cartList=cartList.value//------


} 
    // 进行模拟后端进行支付
  const pay=()=>{
    localStorage.setItem('total', total.value); 
      axios({  
      url: "GetCart", // 确保与mymock中的url匹配  
      method: "post",  
      data: {  
        pay: total.value,  
      }  
    }).then(function (response) {  
      // 处理响应数据  
      
      alert(response.data.data+total.value); // 使用 alert 来显示返回的数据  
    console.log(response.data); // 查看返回的数据  
    localStorage.setItem('buyCarts_list', JSON.stringify([]));
    location.reload(); // 刷新页面
    })        
  }
  
 Mock.mock('GetCart', 'post', function(options) {  
      const body = JSON.parse(options.body); // 解析请求的body为对象  
      const storedTotal = localStorage.getItem('total'); // 从localStorage中获取值
      
      if (body.pay == storedTotal) {  
        return {  
          'status': 200, // HTTP状态码  
          'statusText': 'OK', // 状态文本  
          'data': '支付成功' // 返回的数据  
        };  
      } else {  
        return {  
          'status': 400, // 例如，使用400表示错误的HTTP状态码  
          'statusText': 'Bad Request', // 状态文本  
          'data': '支付失败' // 返回的数据  
        };  
      }  
    });  
  </script>
  <style scoped>
  .fixed{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
  }
  .bgColor{
    width: 100%;
    height: 200px;
    background-color: red;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
    width: 1200px;
    margin: -100px auto 50px auto;
    background: #EBEDF2;
    border-radius: 12px;
    box-shadow: 0px 2px 5px #888888;
  }
  .main{
    padding:20px;
    border-radius: 5px;
  }
 
  .main-shopcart{
    width: 1200px;
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
    width: 80px;
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
    width: 100%;
    height: 200px;
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