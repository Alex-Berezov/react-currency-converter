import axios from 'axios';

import { 
    getCoursesDataAction,
    setFromCurrency,
    setToCurrency,
    setIsLoading
} from '../redux/actions/courseData';

const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

const serverRequest = axios.create({
    baseURL: apiUrl
});

export const getCourseData = {
    getData() {
        return serverRequest.get();
    }
};
export const getCourseDataThunk = () => async (dispatch) => {
    const response = await getCourseData.getData();

    const valuteData = Object.values(response.data.Valute);
    const firstCurrency = valuteData[3];

    dispatch(getCoursesDataAction(valuteData));
    dispatch(setFromCurrency(valuteData[10]));
    dispatch(setToCurrency(firstCurrency));
    dispatch(setIsLoading(false));
};