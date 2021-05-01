import React, { useState } from 'react';

import './currencyTable.scss';

const CurrencyTable = ({ coursesData, changeValueRate }) => {
    const [serchValue, setSearchValue] = useState('');
    const typedCharAtSearchInput = (e) => {
        setSearchValue(e.target.value);
    };
    const filteredCoursesData= coursesData.filter(data => {
        if (
            data.Name.toLowerCase().includes(serchValue.toLowerCase()) ||
            data.CharCode.toLowerCase().includes(serchValue.toLowerCase())
        ) {
          return data;
        }
        return undefined;
    });
    if (serchValue !== '') {
        coursesData = filteredCoursesData;
    }

    return (
        <>
            <div className="currency__list_header">
                <div className="title">
                    <h1>Курсы валют ЦБ РФ на сегодня</h1>
                </div>
                <div className="search">
                    <input 
                        placeholder="Поиск валюты"
                        onChange={typedCharAtSearchInput}
                    />
                </div>
            </div>
            <div className="currency__list_table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Код</th>
                            <th scope="col">Единиц</th>
                            <th scope="col">Валюта</th>
                            <th scope="col">Курс ЦБ РФ</th>
                            <th scope="col">Изменение</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coursesData &&
                                coursesData.map(currencyInfo => {
                                    return <tr key={currencyInfo.ID}>
                                        <td>{currencyInfo.CharCode}</td>
                                        <td>{currencyInfo.Nominal}</td>
                                        <td>{currencyInfo.Name}</td>
                                        <td>{currencyInfo.Value}</td>
                                        <td className={
                                            (currencyInfo.Value - currencyInfo.Previous) > 0 
                                            ? "course_change text-success"
                                            : "course_change text-danger"
                                        }>
                                            {
                                                (currencyInfo.Value - currencyInfo.Previous) > 0 
                                                ? <i className="fas fa-arrow-up"/>
                                                : <i className="fas fa-arrow-down"/>
                                            }
                                            {changeValueRate(currencyInfo.Value, currencyInfo.Previous)}
                                        </td>
                                    </tr>
                                })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CurrencyTable;