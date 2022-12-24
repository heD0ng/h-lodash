export class MyPromise {
    constructor(fn) {
        this.status = 'pending';
        this.value = null;
        this.onResolveCallbacks = [];
        this.onRejectedCallbacks = [];
        try {
            // 执行传进来的函数
            fn(this.resolve, this.reject);
        } catch (e) {
            // 捕捉到错误直接执行reject
            this.reject(e);
        }
    }

    resolve = (value) => {
        if (this.status !== 'pending') return;
        this.status = 'fulfilled';
        this.value = value;
        while (this.onResolveCallbacks.length) {
            const fn = this.onResolveCallbacks.shift();
            fn.call(this, this.value);
        }
    }

    reject = (reason) => {
        if (this.status !== 'pending') return;
        this.status = 'rejected';
        this.value = reason;
        while (this.onRejectedCallbacks.length) {
            const fn = this.onRejectedCallbacks.shift();
            fn.call(this, this.value);
        }
    }
    then(onResolve, onRejected) {
        return new MyPromise((resolve, reject) => {
            onResolve = typeof onResolve === 'function' ? onResolve : value => value;
            onRejected = typeof onRejected === 'function' ? onRejected : reason => {
                throw reason
            }
            const fn = cb => {
                setTimeout(() => {
                    try {
                        const res = cb(this.value)
                        // resolve(res);
                        if(res instanceof MyPromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res);
                        }
                    } catch (error) {
                        reject(error);
                    }
                })
            }
            if (this.status === 'fulfilled') {
                fn(onResolve);
            } else if (this.status === 'reject') {
                fn(onRejected);
            } else {
                // 异步的时候，先缓存
                this.onResolveCallbacks.push(onResolve);
                this.onRejectedCallbacks.push(onResolve);
            }
        })
    }
    all(promises) {
        let count = 0;
        let data = []
        return new MyPromise((resolve, reject) => {
            promises.forEach((item, i) => {
                resolve(item).then((res) => {
                    data[i] = res;
                    count++
                    if(count === promises.length) {
                        resolve(data);
                    }
                }, err => {
                    reject(err);
                })
            });
        })
    }
    race(promises) {
        return new MyPromise((resolve, reject) => {
            // promise是异步，forEach是同步，谁先执行完，就抛出谁的状态与数据；
            promises.forEach((item, i) => {
                resolve(item).then((res) => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            });
        })
    }
    allSettled(promises) {
        let count = 0;
        let data = []
        return new MyPromise((resolve, reject) => {
            // 无论成功失败，执行完返回；
            promises.forEach((item, i) => {
                resolve(item).then((res) => {
                    data[i] = res;
                    count++
                    if(count === promises.length) {
                        resolve(data);
                    }
                }, err => {
                    data[i] = err;
                    count++;
                    if(count === promises.length) {
                        resolve(data);
                    }
                })
            });
        })
    }
}

MyPromise.all = (promises) => {
    let count = 0;
    let data = []
    return new MyPromise((resolve, reject) => {
        promises.forEach((item, i) => {
            // 这里需要先进行一次promise包装，原生可以用Promise.resolve(item);
            resolve(item).then((res) => {
                data[i] = res;
                count++
                if(count === promises.length) {
                    resolve(data);
                }
            }, err => {
                reject(err);
            })
        });
    })
}

// 原生
Promise.myall = function (promises) {
    const values = []
    let c = 0

    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then(value => {
                c++
                values[i] = value
                if (c === promises.length) {
                    resolve(values)
                }
            }, reason => {
                reject(reason)
            })
        });
    })
}


const p1 = new MyPromise((resolve, reject) => {
    resolve(111);
})
p1.then((res) => {
    setTimeout(() => {
        console.log('222', res);
        return 333
    }, 3000)
}).then(res => {
    console.log('444',res);
})
console.log(555);

Promise.myall([1,2,3]).then((res) => console.log('all', res));