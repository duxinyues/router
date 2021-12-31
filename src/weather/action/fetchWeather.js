/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-29 21:33:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-31 23:06:18
 * @Description: 文件描述
 */
export const fetchWeatherStarted = () => ({
    type: 'FETCH_STARTED'
})

export const fetchWeatherSuccess = (res) => ({
    type: 'FETCH_SUCCESS',
    res
})
export const fetchWeatherFailure = (error) => ({
    type: 'FETCH_FAILURE',
    error
})
export const fetchWeather = (cityCode) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html?_=` + new Date().getTime();

    return {
        promise: fetch(apiUrl).then((res) => {
            if (res.status !== 200) {
                throw new Error("报错了" + res.status)
            }
            return res.json().then(result => result.weatherinfo);
        }),
        types: ['FETCH_STARTED', 'FETCH_SUCCESS', 'FETCH_FAILURE']
    };
}