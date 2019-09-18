import React from 'react';
import './stock.css';
import { data } from './example';
import Charts from './../../Components/Charts/Charts.jsx';
import moment from 'moment';

export default class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const filteredData = data.map(d => ({
            date: moment(new Date(d.date)),
            open: d.uOpen,
            close: d.uClose,
            high: d.uHigh,
            low: d.uLow
        }));

        var thursdayData = [];
        var fridayData = [];
        filteredData.forEach(d => {
            if (d.date.day() == 3) {
                thursdayData.push(d);
            } else if (d.date.day() == 4) {
                fridayData.push(d);
            }
        });

        var positives = [];
        var negatives = [];

        const difference = thursdayData.map((d, i) => {
            const diff = d.close - (fridayData[i] ? fridayData[i].open : 0);
            diff > 0 ? positives.push(diff) : negatives.push(diff);
            return parseInt(diff);
        });

        const dataWrap = {
            graphData: [{
                name: 'high',
                color: '#f8710e',
                data: filteredData.map(d => d.high)
            }, {
                name: 'low',
                color: '#89cede',
                data: filteredData.map(d => d.low)
            }, {
                name: 'open',
                color: '#000000',
                data: filteredData.map(d => d.open)
            }
            ],
            dataType: 'currency',
            xAxis: filteredData.map(d => d.date.format('MM/DD/YY'))
        };

        return (
            <div id='stockContainer' className='stock-container'>
                <Charts graphLabel='stock' dataWrap={dataWrap} height={500} style={{ height: 500 }} />
                {`${positives.length} : ${negatives.length}`}
                {
                    difference.map((d, i) => {
                        return (
                            <div key={i} style={{ color: d > 0 ? 'green' : 'red' }}>
                                {d}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
