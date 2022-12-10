/**
 * 数组扁平化
 * @param {Array} arr 
 */
function flatten1(arr){
    //声明空数组
    let result = [];
    //遍历数组
    arr.forEach(item => {
        //判断
        if(Array.isArray(item)){
            result = result.concat(flatten1(item));
        }else{
            result = result.concat(item);
        }
    });
    //返回结果
    return result;
}

/**
 * 
 * @param {Array} arr 
 */
function flatten2(arr){
    //声明数组
    let result = [...arr];
    //循环判断
    while(result.some(item => Array.isArray(item))){
        // [1,2,[3,4,[5,6]],7]
        result = [].concat(...result);//
    }
    //返回结果
    return result;
}

const flat3 = (arr, n = 1) => {
    // 需要深克隆一份;
    if(n <= 0) return arr;
    if(n === Infinity) {
        return arr.slice(0).toString().split(',').map((item) => Number(item) || undefined);
    }
    const res = [];
    const fn = (data, n) => {
        data.reduce((p,c) => {
            if(Array.isArray(c) && n > 0) {
                fn(c, n - 1);
            } else {
                res.push(item);
            }
        }, res)
    }
    fn(arr, n);
    return res;
}