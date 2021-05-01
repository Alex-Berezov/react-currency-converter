import { 
    GET_COURSES_DATA, 
    SET_SELECTED_CURRENCY,
    SET_FROM_CURRENCY,
    SET_TO_CURRENCY,
    SET_EXCHANGE_RATE,
    SET_AMOUNT,
    SET_IS_LOADING
} from '../actions/courseData';

const initialState = {
    coursesData: [],
    selectedCurrency: undefined,
    fromCurrency: undefined,
    toCurrency: undefined,
    exchangeRate: undefined,
    amount: undefined,
    isLoading: true
};

const getCourseData = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES_DATA:
            return {
                ...state,
                coursesData: action.data
            };
        case SET_SELECTED_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.selectedCurrency
            };
        case SET_FROM_CURRENCY:
            return {
                ...state,
                fromCurrency: action.fromCurrency
            };
        case SET_TO_CURRENCY:
            return {
                ...state,
                toCurrency: action.toCurrency
            };
        case SET_EXCHANGE_RATE:
            return {
                ...state,
                exchangeRate: action.exchangeRate
            };
        case SET_AMOUNT:
            return {
                ...state,
                amount: action.amount
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };  
        default:
            return state;
    }
};

export default getCourseData;