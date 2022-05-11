function attempt(fn, ...arg){
    try {
        fn(...arg)
    } catch (error) {
        throw new Error(error)
    }
}