/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-31 22:26:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-31 23:23:12
 * @Description: promise中间件
 */
function isPromise(obj) {
    return obj && typeof obj.then === 'function';
}

export default function promiseMiddleware({ dispatch }) {
    return (next) => (action) => {
        console.log("action", action)
        const { types, promise, ...rest } = action;
        if (!isPromise(promise) || !(action.types && action.types.length === 3)) {
            return next(action)
        }

        dispatch({ ...rest, type: 'FETCH_STARTED' });

        return action.promise.then((result) => dispatch({ ...rest, result, type: 'FETCH_SUCCESS' }), (error) => dispatch({ ...rest, error, type: 'FETCH_FAILURE' }));
    };
}
