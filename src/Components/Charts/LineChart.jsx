'use strict';
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { FormatValue, FormatAbbreviatedValue } from './../../Services/CommonFunctionServices';

export default class LineChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dataWrap, height, width } = this.props;
        const { xAxis, graphData, dataType } = dataWrap;
        var data = {
            labels: xAxis,
            datasets: graphData.map((gd, i) => (
                {
                    label: gd.name,
                    data: gd.data,
                    backgroundColor: gd.color,
                    pointRadius: 1,
                    pointBorderColor: gd.color,
                    pointBackgroundColor: gd.color,
                    borderColor: gd.color,
                    fill: false
                }
            ))
        };

        var options = {
            title: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: value => FormatAbbreviatedValue(value, dataType)
                    },
                }]
            },
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
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

        return <Line data={data} options={options} height={height} width={width} />;
    }
}