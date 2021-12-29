/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-28 22:25:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-29 21:57:23
 * @Description: 文件描述
 */
const weatherReducer = (state = { status: 'loading' }, action) => {
    switch (action.type) {
        case 'FETCH_STARTED':
            return {
                status: 'loading',
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                status: 'success',
                ...action.res
            };
        case 'FETCH_FAILURE':
            return {
                status: 'failure',
            };
        default:
            return state;
    }
}
export default weatherReducer