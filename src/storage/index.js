import { isObject, isString } from '../judge';
export const ls = {};

const localStorage = window.localStorage;

ls.get = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return '';
    }
}

ls.set = (key, val) => {
    if(!isString(key)) {
        console.error('ls.set() need a string as key!')
    }
    try {
        if(isObject(val)) {
            localStorage.setItem(key, JSON.stringify(val));
        } else {
            localStorage.setItem(key, val);
        }
        return true;
    } catch (error) {
        return false;
    }
}

ls.clear = (key) => {
    localStorage.clear(key);
}