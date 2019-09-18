'use strict';
import React, { Component } from 'react';
import LineChart from './LineChart.jsx';
import BarChart from './BarChart.jsx';
import Icons from '../Icons/Icons.jsx';

/**
 * Input parameters: 
 * dataWrap - {
 *      graphData(an array of { name: [name], color: [color], data: [data] })
 *      xAxis
 *      dataType
 * }
 * graphLabel
 * style
 * chartOptions
 * height
 * width
 */

export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: props.chartType || 'lineChart'
        };
    }

    render() {
        const { dataWrap, chartOptions = ['lineChart'], style = {}, height, width } = this.props;
        const { chartType } = this.state;
        var chart;

        switch (chartType) {
            case 'barChart':
                chart = <BarChart dataWrap={dataWrap} height={height} width={width} />;
                break;
            case 'lineChart':
                chart = <LineChart dataWrap={dataWrap} height={height} width={width} />;
                break;
        }

        var chartHeader = null;

        if (chartOptions.length) {
            chartHeader = (
                <div className='chart-header'>
                    {
                        [chartOptions].map((co, i) => {
                            var tooltip, iconType = co;
                            switch (co) {
                                case 'barChart':
                                    tooltip = 'Bar';
                                    break;
                                case 'lineChart':
                                    tooltip = 'Line';
                                    break;
                            }

                            return (
                                <Icons key={i} type={iconType} iconClass={chartType == co ? 'active' : ''}
                                    clickHandler={() => this.setChartType(co)} tooltip={tooltip} />
                            );
                        })
                    }
                </div>
            );
        }

        return (
            <div className={['chart-container', 'common-border'].join(' ')} style={style}>
                {chartHeader}
                {
                    chartHeader ? <div className='chart-body' ref={'chartBody'}>{chart}</div> : chart
                }
            </div>
        );
    }

    setChartType = type => {
        this.setState({
            chartType: type
        });
    }
}