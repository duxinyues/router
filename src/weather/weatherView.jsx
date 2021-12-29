import { connect } from 'react-redux';
function WeatherView(props) {
    console.log('props', props)
    switch (props.status) {
        case 'loading':
            return <div>天气信息请求中...</div>;
        case 'success':
            return <div>
                {props.weatherinfo.city}  最低气温 {props.weatherinfo.temp1} 最高气温 {props.weatherinfo.temp2}
            </div>;
        default:
            return <div>异常啦</div>
    }
}
const mapStateToProps = ({ weatherStore }) => {
    console.log(weatherStore)
    return { ...weatherStore }
}
export default connect(mapStateToProps)(WeatherView)