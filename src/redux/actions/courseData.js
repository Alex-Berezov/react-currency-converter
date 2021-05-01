export const GET_COURSES_DATA = 'GET_COURSES_DATA';
export const SET_SELECTED_CURRENCY = 'SET_SELECTED_CURRENCY';
export const SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
export const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
export const SET_EXCHANGE_RATE = 'SET_EXCHANGE_RATE';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_AMOUNT_IN_FROM_CURRENCY = 'SET_AMOUNT_IN_FROM_CURRENCY';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const getCoursesDataAction = (data) => ({
    type: GET_COURSES_DATA,
    data
});

export const setSelectedCurrency = (selectedCurrency) => ({
    type: SET_SELECTED_CURRENCY,
    selectedCurrency
});

export const setFromCurrency = (fromCurrency) => ({
    type: SET_FROM_CURRENCY,
    fromCurrency
});

export const setToCurrency = (toCurrency) => ({
    type: SET_TO_CURRENCY,
    toCurrency
});

export const setExchangeRate = (exchangeRate) => ({
    type: SET_EXCHANGE_RATE,
    exchangeRate
});

export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    amount
});

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
});