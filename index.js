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

function tagTester(name){
    let tag = '[object' + name + ']';

    return (obj)=>{
        return Object.prototype.toString.call(obj) === tag;
    }
}

function isArray(arr){
    return Array.isArray(arr) || tagTester('Array')(arr);
}

let a = [undefined, 1, 3];
console.log(isArray(a))