import React from 'react';

import './currencyRow.scss';

const CurrencyRow = ({ 
    coursesData,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
    disabled
}) => {

    return (
        <div className="card bg-light col-3">
            <div className="row g-0">
                <div className="card-body">
                    <h6 className="card-title">{selectedCurrency && selectedCurrency.Name}</h6>
                    <div className="currency_block">
                        <select 
                            value={selectedCurrency && selectedCurrency.CharCode}
                            onChange={onChangeCurrency}
                        >
                            {
                                coursesData &&
                                    coursesData.map(currency => {
                                        return <option 
                                            key={currency.ID}
                                            value={currency.CharCode}
                                            >
                                            {currency.CharCode}
                                        </option>
                                    })
                            }
                        </select>
                        <input 
                            type="number"
                            onChange={onChangeAmount}
                            value={amount && amount}
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyRow;