'use strict';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { FormatValue, FormatAbbreviatedValue } from './../../Services/CommonFunctionServices';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dataWrap } = this.props;
        const { xAxis, graphData, dataType } = dataWrap;
        var data = {
            labels: xAxis.map(x => x.length > 20 ? x.slice(0, 17) + '...' : x),
            title: xAxis,
            datasets: graphData.map((gd, i) => (
                {
                    label: gd.name,
                    data: gd.data,
                    backgroundColor: gd.color,
                }
            ))
        };

        const options = {
            title: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    categoryPercentage: 0.6
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        callback: value => FormatAbbreviatedValue(value, dataType)
                    }
                }]
            },
            maintainAspectRatio: false,
            tooltips: {
                mode: 'point',
                intersect: false,
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data.title[tooltipItem[0].index] || '';
                    },
                    label: function (tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += FormatValue(tooltipItem.yLabel, dataType);
                        return label;
                    }
                }
            },
        };

        return <Bar data={data} options={options} />;
    }
}