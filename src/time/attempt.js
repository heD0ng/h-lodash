function attempt(fn, ...arg) {
    let count = 0
    try {
        fn(...arg)
    } catch (error) {
        if (count >= 3) {
            throw new Error(error)
        }
        count++
        setTimeout(() => {
            attempt(fn, ...arg)
        }, 1000)
        throw new Error(error)
    }
}