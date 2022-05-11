function sleep(delay, fn){
    if(typeof fn !== 'function'){
        throw new Error(`it should be a function`)
    }
    return function(...arg){
        let t = setTimeout(()=>{
            fn.apply(this, ...arg)
        }, delay)
    }
}