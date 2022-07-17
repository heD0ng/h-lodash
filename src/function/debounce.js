
export function debounce(callback, delay = 500){
    //定时器变量
    let timer = null;
    //返回一个函数
    return function(e){
        //判断
        if(timer !== null){
            //清空定时器
            clearTimeout(timer);
        }
        //启动定时器
        timer = setTimeout(() => {
            //执行回调
            callback.call(this, e);
            //重置定时器变量
            timer = null;
        }, delay);
    }
}