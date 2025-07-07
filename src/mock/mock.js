
const Mock=require('mockjs')


Mock.mock('Getmock','post',function(op){
    const account=JSON.parse( op.body)

    if(account.user=="123" && account.pwd=="123"){
        return {flag:true,msg:'账号正确'}
    }
    else{
        return {flag:false,msg:'账号错误'}
    }
})


export default Mock

