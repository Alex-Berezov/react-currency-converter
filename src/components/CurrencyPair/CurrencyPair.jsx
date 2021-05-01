import React from 'react';

import './currencyPair.scss';

const CurrencyPair = ({ 
    handleSelectedCurrency, 
    coursesData, 
    selectedCurrency, 
    changeValueRate }) => {

    return (
        <div className="currency__pair">
            <div className="card bg-light col-4">
                <div className="row g-0">
                    <div className="select_blok col-md-3">
                        <select onChange={handleSelectedCurrency}>
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
                    </div>
                    <div className="col-md-9">
                        { selectedCurrency && 
                            <div className="card-body">
                                <h6 className="card-title">{selectedCurrency.Name}</h6>
                                <div className="pair_block">
                                    <p className="card-text">
                                        {`${selectedCurrency.Nominal} ${selectedCurrency.CharCode}`}
                                    </p>
                                    <i className="fas fa-arrows-alt-h"/>
                                    <p className="card-text">{selectedCurrency.Value} RUB</p>
                                    <div className={
                                        (selectedCurrency.Value - selectedCurrency.Previous) > 0 
                                        ? "course_change text-success"
                                        : "course_change text-danger"
                                    }>
                                        {
                                            (selectedCurrency.Value - selectedCurrency.Previous) > 0 
                                            ? <i className="fas fa-arrow-up"/>
                                            : <i className="fas fa-arrow-down"/>
                                        }
                                        <p className="card-text">
                                            {changeValueRate(selectedCurrency.Value, selectedCurrency.Previous)}
                                            </p>
                                    </div>
                                </div>
                            </div> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyPair;