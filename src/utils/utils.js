/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-19 23:36:14
 * @LastEditTime: 2021-07-19 23:59:48
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 工具函数
 * @FilePath: \router\src\utils\utils.js
 *
 */
/**
 * 获取本月第一天和最后一天
 * @param {*} type 
 */
export const getFirstAndEndDay = (type) => {
    var nowDate = new Date();
    var cloneNowDate = new Date();
    var fullYear = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
    var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天
    function getFullDate(targetDate) {
        var D, y, m, d;
        if (targetDate) {
            D = new Date(targetDate);
            y = D.getFullYear();
            m = D.getMonth() + 1;
            d = D.getDate();
        }
        m = m > 9 ? m : '0' + m;
        d = d > 9 ? d : '0' + d;
        return y + '-' + m + '-' + d;
    };
    var endDate = getFullDate(cloneNowDate.setDate(endOfMonth));//当月最后一天
    var starDate = getFullDate(cloneNowDate.setDate(1));//当月第一天
    if (type === 1) return endDate;
    if (type === 2) return starDate;
    if (type === 3) return {
        start: starDate,
        end: starDate
    };
}
export const getYearFirstLastDay = () => {
    var firstDay = new Date();
    firstDay.setDate(1);
    firstDay.setMonth(0);
    var lastDay = new Date();
    lastDay.setFullYear(lastDay.getFullYear() + 1);
    lastDay.setDate(0);
    lastDay.setMonth(-1);
    return [firstDay, lastDay];
}