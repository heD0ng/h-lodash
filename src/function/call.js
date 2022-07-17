
export function call(obj, ...args){
    const fn = this;
    //判断
    if(obj === undefined || obj === null){
        obj = window;
    }
    //obj 添加临时方法
    obj.fn = fn;
    //执行方法
    let result = obj.fn(...args);
    //删除临时属性
    delete obj.fn;
    //返回结果
    return result;
}

/**
 * 使用示例
 * fn.apply(obj, 1, 2, 3)
 */