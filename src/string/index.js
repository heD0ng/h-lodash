
export function reverseString(str){
    //将字符串转为数组
    let arr = [...str];
    //翻转数组
    arr.reverse();
    //将数组拼接成字符串
    let s = arr.join('');
    return s;
}
// 回文串
export function palindrome(str){
    return reverseString(str) === str;
}
// 截断
export function truncate(str, size){
    return str.slice(0, size) + '...';
}

localStorage