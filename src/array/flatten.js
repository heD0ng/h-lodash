
const flat = (arr, n = 1) => {
    // 需要深克隆一份;
    if(n <= 0) return arr;
    if(n === Infinity) {
        return arr.slice(0).toString().split(',').map((item) => Number(item) || undefined);
    }
    const res = [];
    const fn = (data, n) => {
        data.reduce((p, c) => {
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