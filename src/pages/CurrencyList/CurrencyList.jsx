import React from 'react';

import CurrencyPair from '../../components/CurrencyPair/CurrencyPair';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import './currencyList.scss';

const CurrencyList = ({ coursesData, handleSelectedCurrency, selectedCurrency }) => {

    const changeValueRate = (value, prevValue) => {
        let res = value - prevValue;
        return res.toFixed(4);
    };

    return (
        <section className="currency__list">
            <div className="wrapper">
                <CurrencyPair 
                    handleSelectedCurrency={handleSelectedCurrency}
                    coursesData={coursesData}
                    selectedCurrency={selectedCurrency}
                    changeValueRate={changeValueRate}
                />

                <CurrencyTable 
                    coursesData={coursesData}
                    changeValueRate={changeValueRate}
                />
            </div>            
        </section>
    );
};

export default CurrencyList;