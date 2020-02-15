

export default{
    formateDate(time){
        if(!time) return
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+":"+date.getSeconds()
    },
    //分页方法的封装，在原有基础上
    pagination(data,callback){
        let page = {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.pageSize,
            total:data.result.total,
            showTotal:(total,range)=>{
                return  `共${data.result.total}条`
            },
            showQuickJumper:true
        }
        return page;
    }
}