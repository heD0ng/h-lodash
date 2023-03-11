import moment from 'moment';

// Safari用/存在兼容问题：yyyy/MM/dd HH:mm:ss
export const formatTime = (date, formatType = 'yyyy-MM-dd HH:mm:ss') => {
    return moment(date || new Date()).format(formatType);
}

// 当天的23：59：59: setHours返回时间戳
export const getLastSecondForCurDay = (date) => {

    const tmp = new Date(date).setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1;
    return formatTime(tmp);
}

// 当前时间的第n个小时
export const getNextHourForCur = (date, n = 1) => {
    
    const tmp = new Date(date).getTime() + n * 60 * 60 * 1000;
    return formatTime(tmp);
}

// 当前时间的第n天
export const getNextDayForCur = (date, n = 1) => {
    
    const tmp = new Date(date).getTime() + n * 24 * 60 * 60 * 1000;
    return formatTime(tmp);
}