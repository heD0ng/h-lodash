export function sleep1(delay, fn){
    if(typeof fn !== 'function'){
        throw new Error(`it should be a function`)
    }
    return function(...arg){
        let t = setTimeout(()=>{
            fn.apply(this, ...arg)
            t = null;
        }, delay)
    }
}

function sleep2(delay) {
    for(let t = Date.now(); Date.now() - t <= delay; ){
        
    }
}