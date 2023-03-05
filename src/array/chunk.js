/**
 * 数组分块：[1,2,3,4,5,6,7] => [[1,2], [3,4], [5,6], [7]]
 * @param { Array } arr 
 * @param { Number } size 
 */
export function chunk(arr, size = 1) {
    if (arr.length === 0) {
        return [];
    }
    let res = [];
    let tmp = [];
    arr.forEach(item => {
        if (tmp.length < size) {
            tmp.push(item);
        } else {
            res.push([...tmp]);
            tmp = [];
        }
    });
    return res;
}