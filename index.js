function isObject(obj){
    let type = typeof obj

    return obj && (type === 'function' || type === 'object')
}

function isNull(obj){
    return obj === null;
}

function isUndefined(obj){
    return  obj === undefined;
}

// 节点元素
function isELement(node){
    return node && node.nodeType == 1
}
// 文本节点
function isTextNode(node){
    return node && node.nodeType == 3
}

function has(obj, key){
    return hasOwnProperty.call(obj, key)
}


let a = undefined;
console.log(isUndefined(a))