'use strict';
import React, { Component } from 'react';

export default class Hive9Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    render() {
        const { hide } = this.props;

        if (hide) {
            return null;
        } else {
            const { clickHandler, iconClass, type, tooltip = '', fontSize, hoverColor = '#f8710e', color, marginRight } = this.props;
            const { isHovered } = this.state;
            // Set icon styles.
            var style = {};
            if (isHovered && clickHandler) {
                style.color = hoverColor;
            } else if (color) {
                style.color = color;
            }

            marginRight && (style.marginRight = marginRight);

            // Set icon classes.
            var processedIconClass = ['fa', iconClass || '', clickHandler ? 'hive9-icon ' : ''].join(' ') + ' ';

            switch (type) {
                case 'add':
                    processedIconClass += 'fa-plus-circle';
                    break;
                case 'angleLeft':
                    processedIconClass += 'fa-angle-left';
                    break;
                case 'angleRight':
                    processedIconClass += 'fa-angle-right';
                    break;
                case 'angleUp':
                    processedIconClass += 'fa-angle-up';
                    break;
                case 'angleDown':
                    processedIconClass += 'fa-angle-down';
                    break;
                case 'arrowUp':
                    processedIconClass += 'fa-arrow-up';
                    break;
                case 'arrowDown':
                    processedIconClass += 'fa-arrow-down';
                    break;
                case 'asterisk':
                    processedIconClass += 'fa-asterisk';
                    break;
                case 'barChart':
                    processedIconClass += 'fa-bar-chart';
                    break;
                case 'caretDown':
                    processedIconClass += 'fa-caret-down';
                    break;
                case 'caretLeft':
                    processedIconClass += 'fa-caret-left';
                    break;
                case 'caretRight':
                    processedIconClass += 'fa-caret-right';
                    break;
                case 'caretUp':
                    processedIconClass += 'fa-caret-up';
                    break;
                case 'check':
                    processedIconClass += 'fa-check';
                    break;
                case 'close':
                    processedIconClass += 'fa-times';
                    break;
                case 'collapse':
                    processedIconClass += 'fa-minus-square-o';
                    break;
                case 'copy':
                    processedIconClass += 'fa-clone';
                    break;
                case 'delete':
                    processedIconClass += 'fa-trash-o';
                    break;
                case 'edit':
                    processedIconClass += 'fa-pencil-square-o';
                    break;
                case 'ellipsis':
                    processedIconClass += 'fa-ellipsis-h';
                    break;
                case 'exclamationCircle':
                    processedIconClass += 'fa-exclamation-circle';
                    break;
                case 'expand':
                    processedIconClass += 'fa-plus-square-o';
                    break;
                case 'export':
                    processedIconClass += 'fa-upload';
                    break;
                case 'gallery':
                    processedIconClass += 'fa-photo';
                    break;
                case 'lineChart':
                    processedIconClass += 'fa-line-chart';
                    break;
                case 'link':
                case 'linked':
                    processedIconClass += 'fa-link';
                    break;
                case 'lock':
                    processedIconClass += 'fa-lock';
                    break;
                case 'longArrowUp':
                    processedIconClass += 'fa-long-arrow-up';
                    break;
                case 'longArrowDown':
                    processedIconClass += 'fa-long-arrow-down';
                    break;
                case 'package':
                    processedIconClass += 'fa-object-group';
                    break;
                case 'pieChart':
                    processedIconClass += 'fa-pie-chart';
                    break;
                case 'plus':
                    processedIconClass += 'fa-plus';
                    break;
                case 'import':
                    processedIconClass += 'fa-download';
                    break;
                case 'search':
                    processedIconClass += 'fa-search';
                    break;
                case 'settings':
                    processedIconClass += 'fa-cog';
                    break;
                case 'snapshot':
                    processedIconClass += 'fa-camera';
                    break;
                case 'table':
                    processedIconClass += 'fa-th';
                    break;
                case 'unlinked':
                    processedIconClass += 'fa-chain-broken';
                    break;
                case 'view':
                    processedIconClass += 'fa-external-link-square';
                    break;
            }

            return <i className={processedIconClass} aria-hidden='true' onClick={e => clickHandler && clickHandler(e)}
                onMouseEnter={this.hoverHandler} onMouseOut={this.blurHandler} style={style} title={tooltip}></i>;
        }
    }

    hoverHandler = () => {
        this.setState({
            isHovered: true
        });
    }

    blurHandler = () => {
        this.setState({
            isHovered: false
        });
    }
}