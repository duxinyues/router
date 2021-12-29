import { connect } from "react-redux"
import { fetchWeather } from './action/fetchWeather'
import { Select } from 'antd';

const { Option } = Select;
const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
}
function SelectCity(props) {
    console.log('props===', props)
    return (<Select style={{ width: '200px' }} onChange={(value) => props.onSelectCity(value)}>
        {
            Object.keys(CITY_CODES).map(
                cityName => <Option key={cityName} value={CITY_CODES[cityName]}>{cityName}</Option>
            )
        }
    </Select>)
}
const mapDispatchToProps = (dispatch) => ({
    onSelectCity: (cityCode) => dispatch(fetchWeather(cityCode))
})
export default connect(null, mapDispatchToProps)(SelectCity)