import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setExchangeRate, 
    setAmount, 
    setFromCurrency,
    setToCurrency
} from '../../redux/actions/courseData';

import CurrencyRow from '../../components/CurrencyRow/CurrencyRow';
import './currencyConverter.scss';

const CurrencyConverter = ({ coursesData }) => {
    const dispatch = useDispatch();

    const {
        fromCurrency,
        toCurrency,
        exchangeRate,
        amount
    } = useSelector(({ getCourseData }) => getCourseData);

    useEffect(() => {
        dispatch(setAmount(fromCurrency && fromCurrency.Nominal));
        dispatch(setExchangeRate(toCurrency && 
            (fromCurrency.Value * fromCurrency.Nominal) / (toCurrency.Value / toCurrency.Nominal)));
    }, [fromCurrency, toCurrency, dispatch]);

    const filteredSelectedCurrency = (value) => {
        let res = coursesData.filter(currency => {
            if (currency.CharCode === value) return currency;
            return undefined;
        });
        return res;
    };
    const onChangeFromCurrency = (e) => {
        const selectedCurrency = filteredSelectedCurrency(e.target.value);
        dispatch(setFromCurrency(selectedCurrency[0]));
    };
    const onChangeToCurrency = (e) => {
        const selectedCurrency = filteredSelectedCurrency(e.target.value);
        dispatch(setToCurrency(selectedCurrency[0]));
    };

    const handleFromAmountChange = (e) => {
        if (e.target.value < 0 || e.target.value === null) return;
        dispatch(setAmount(e.target.value));
        dispatch(setExchangeRate(
            (fromCurrency.Value * e.target.value) / (toCurrency.Value / toCurrency.Nominal)
        ));
    };    

    return (
        <section className="currencyConverter">
            <div className="wrapper">
                <h2>Конвертер валют</h2>
                <div className="currencyConverter_block">
                    <CurrencyRow
                        coursesData={coursesData}
                        selectedCurrency={fromCurrency}
                        onChangeCurrency={onChangeFromCurrency}
                        amount={amount}
                        onChangeAmount={handleFromAmountChange}
                        disabled={false}
                    />
                    <div className="swapCurrencies">
                        <i className="fas fa-arrows-alt-h"/>
                    </div>
                    <CurrencyRow
                        coursesData={coursesData}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={onChangeToCurrency}
                        amount={exchangeRate && exchangeRate.toFixed(2)}
                        disabled={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default CurrencyConverter;