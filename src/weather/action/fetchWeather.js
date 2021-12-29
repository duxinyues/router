/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-29 21:33:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-29 23:04:28
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
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html?_=` + new Date().getTime();

        dispatch(fetchWeatherStarted());

        return fetch(apiUrl)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('获取数据失败' + response.status);
                }

                response.json()
                    .then((res) => {
                        dispatch(fetchWeatherSuccess(res));
                    })
                    .catch(error => {
                        dispatch(fetchWeatherFailure(error))
                    });
            })
            .catch(error => {
                dispatch(fetchWeatherFailure(error))
            })
    }
}