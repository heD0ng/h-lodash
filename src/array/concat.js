/**
 * [1,2,[3]] [4,5,6] => [1, 2, [3], 4, 5, 6]
 * @param {Array} arr 
 * @param  {...any} args 
 */
export function concat(arr, ...args) {

    const res = [...arr];

    args.forEach(item => {
        res.push(item);
    });

    return res;
}