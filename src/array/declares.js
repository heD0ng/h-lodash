/**
 * 
 * @param {Function} callback 
 */
export function map(cb) {
    const arr = this;
    return arr.reduce((p, c, i) => {
        p.push(cb(c, i));
        return p;
    }, [])
}

/**
 * 
 * @param {Function} callback 
 * @param {*} initValue 
 */
export function reduce(callback, initValue) {
    const arr = this;
    let res = null;
    if(!initValue) {
        res = arr[0];
        for (let i = 1; i < arr.length; i++) {
            res = callback(res, arr[i], i);
        }
    } else {
        res = initValue;
        for (let i = 0; i < arr.length; i++) {
            res = callback(res, arr[i], i);
        }
    }
    
    return res;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
export function filter(callback) {
    const arr = this;
    return arr.reduce((p, c, i) => {
        const res = callback(c, i);
        if (res) {
            p.push(c);
        };
        return p;
    }, [])
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
export function find(arr, callback) {
    const arr = this;
    let tmp = false
    return arr.reduce((p, c, i) => {
        if(tmp) return p;
        const res = callback(c, i);
        if (res) {
            p = c;
            return p;
        };
        return undefined;
    }, 0)
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
export function findIndex(arr, callback) {
    const arr = this;
    let tmp = false
    return arr.reduce((p, c, i) => {
        if(tmp) return p;
        const res = callback(c, i);
        if (res) {
            p = i;
            return p;
        };
        return undefined;
    }, 0)
}
