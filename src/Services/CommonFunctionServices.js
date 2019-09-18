/**
* GenerateUrl
* OpenUrlInNewTab
* ParseDate
* ParseNumber
* ParseNumberToString
* FormatValue
* FormatAbbreviatedValue
* GetTextRenderWidth
* ValidateEmail
* ValidateNumber
* ValidateInteger
* ValidatePassword
* SortArray
* GetArraySum
* GetCountDataForHud
* GetColorSpread
* HexToRgb
* HexToRgbObject
* RgbObjectToHex
* GetColorTints
* GetColorList
* CloneObject
* CloneArray
* GetFontColorByBackgroundColor
* RemoveAllSpacesFromString
* RemoveAllOccurenceFromString
* GetScrollBarWidth
*/
const CurrencySymbol = '$';

export function GenerateUrl(url) {
    return urlContent + url;
}

export function OpenUrlInNewTab(url, checkHttps) {
    if (!url) {
        showHive9Alert('URL is invalid.');
    } else if (checkHttps) {
        if (!~url.indexOf('https://') && !~url.indexOf('http://')) {
            window.open('https://' + url);
        } else {
            window.open(url);
        }
    } else {
        window.open(url);
    }
}

export function ParseDate(date, dateType) {
    const format = SessionUserDateFormat + (dateType == 'longDate' ? ' hh:mm:ss A' : '');
    return moment(date, format).isValid() ? moment(date, format).format('MM/DD/YYYY') : date;
}

export function ParseNumber(value) {
    var parsedValue;

    if (value == undefined || value == null) {
        parsedValue = 0;
    } else if (typeof value == 'string') {
        // Test if value can be directly parsed into a number. If not, let's take out all the chars
        // that's not "0-9", "." and "-".
        parsedValue = isNaN(parseFloat(value)) ? parseFloat(value.replace(/[^0-9./-]/g, ''))
            : parseFloat(value);

        // If above logic still doesn't give us a number, then we simply return 0.
        if (isNaN(parsedValue)) {
            parsedValue = 0;
        }
    } else if (typeof value == 'number') {
        parsedValue = value;
    }

    return parsedValue;
}

export function ParseNumberToString(value) {
    if (value == undefined || value == '') return 0;

    return value.toString().replace(/[^0-9./-]/g, '');
}

function addCommasToNumber(number) {
    if (typeof number != 'number' && typeof number != 'string') {
        return number;
    } else {
        const integerPart = number.toString().split('.')[0];
        const decimalPart = number.toString().split('.')[1];

        return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            (decimalPart ? ('.' + decimalPart) : '');
    }
}

export function FormatValue(value, valueType, hideDecimals, decimalPlaces, needsMultiplication, currencySymbol) {
    if (valueType == 'integer') {
        valueType = 'number';
        hideDecimals = true;
    }

    if (value != '' && (valueType == 'currency' || valueType == 'number' || valueType == 'percentage')) {
        // First parse the input value to a number as it might be a string with
        // all kinds of symbols.
        const parsedValue = ParseNumber(value) * (needsMultiplication ? 100 : 1);
        const negativeSign = parsedValue < 0 ? '-' : '';
        var absoluteValue;

        if (hideDecimals) {
            absoluteValue = Math.abs(Math.round(parsedValue));
        } else {
            if (valueType == 'currency') { // For currency, we always show 2 decimals if any. 2 => $2, 2.1 => $2.10, 2.11 => $2.11
                absoluteValue = parsedValue % 1 == 0 ? Math.abs(parsedValue)
                    : Math.abs(parsedValue).toFixed(decimalPlaces || 2);
            } else {
                absoluteValue = Math.abs(parsedValue.toFixed(decimalPlaces || 2));
            }
        }

        // Always parse its absolute value. Negative sign will be added at the end.
        const valueWithComma = addCommasToNumber(absoluteValue);

        // Once we have a parsed value in number format, we start formatting it.
        switch (valueType) {
            case 'currency':
                return negativeSign + (currencySymbol || CurrencySymbol) + valueWithComma;
            case 'number':
                return negativeSign + valueWithComma;
            case 'percentage':
                return negativeSign + valueWithComma + '%';
        }
    } else if (valueType == 'date') {
        if (typeof value == 'string') {
            // 2018-12-31T23:59:59.9999999
            const momentDate = moment(value.slice(0, 19));
            return momentDate.isValid() ? momentDate.format(SessionUserDateFormat) : value;
        } else if (value instanceof Date) {
            return moment(value).format(SessionUserDateFormat);
        } else {
            return value.format ? value.format(SessionUserDateFormat) : value;
        }
    } else if (valueType == 'longDate') {
        if (typeof value == 'string') {
            // 2018-12-31T23:59:59.9999999
            const momentDate = moment(value.slice(0, 19));
            return momentDate.isValid() ? momentDate.format(SessionUserDateFormat + ' hh:mm:ss A') : value;
        } else if (value instanceof Date) {
            return moment(value).format(SessionUserDateFormat + ' hh:mm:ss A');
        } else {
            return value.format ? value.format(SessionUserDateFormat + ' hh:mm:ss A') : value;
        }
    } else {
        return value;
    }
}

export function FormatAbbreviatedValue(value, valueType, hideDecimals, decimalPlaces, needsMultiplication, currencySymbol) {
    if (valueType == 'integer') {
        valueType = 'number';
        hideDecimals = true;
    }

    if (valueType == 'currency' || valueType == 'number' || valueType == 'percentage') {
        const unitList = ['', 'k', 'M', 'B', 'T', 'Q']; // We don't expect to see numbers bigger than these.
        // First parse the input value to a number as it might be a string with
        // all kinds of symbols.
        var parsedValue = ParseNumber(value) * (needsMultiplication ? 100 : 1);
        const negativeSign = parsedValue < 0 ? '-' : '';
        var unitCounter = 0;
        var absoluteParsedValue = Math.abs(parsedValue);
        while (absoluteParsedValue >= 1000) {
            absoluteParsedValue /= 1000;
            unitCounter++;
        }

        const unit = unitList[unitCounter];

        if (hideDecimals) {
            parsedValue = Math.round(absoluteParsedValue);
        } else {
            // If we are to show decimals, we always show 3 digits in total.
            decimalPlaces = decimalPlaces || (absoluteParsedValue >= 100 ? 0 : absoluteParsedValue >= 10 ? 1 : 2);
            parsedValue = parseFloat(absoluteParsedValue.toFixed(decimalPlaces));
        }

        // Once we have a parsed value in number format, we start formatting it.
        switch (valueType) {
            case 'currency':
                return negativeSign + (currencySymbol || CurrencySymbol) + parsedValue + unit;
            case 'number':
                return negativeSign + parsedValue + unit;
            case 'percentage':
                return negativeSign + parsedValue + unit + '%';
        }
    } else {
        return value;
    }
}

export function GetTextRenderWidth(text, fontSize, fontFamilyClass) {
    // Now we do the real calculation.
    var element = document.createElement('span');
    element.innerHTML = text;
    element.style.fontSize = fontSize || "12px";
    fontFamilyClass && element.classList.add(fontFamilyClass);
    element.style.visibility = 'hidden';
    document.body && document.body.appendChild(element);
    const elementWidth = element.offsetWidth;
    element.remove();

    return elementWidth;
}

export function ValidateEmail(email) {
    var result = {
        isValid: true,
        message: ''
    };

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        result.isValid = false;
        result.message = "Email cannot be empty.";
    } else if (!regex.test(email.toLowerCase())) {
        result.isValid = false;
        result.message = "Email is invalid.";
    }

    return result;
}

// A number is considered valid if it is a number and the length is less than 12 (our app's standard).
export function ValidateNumber(number) {
    if (number == undefined || number == null) {
        return {
            isValid: false
        };
    } else {
        var numberInString = number.toString().trim();

        if (~['', '.', '-', '-.'].indexOf(numberInString)) {
            return {
                isValid: true
            };
        } else {
            // Number is invalid, let's try to parse it.
            if (isNaN(numberInString)) {
                const parsedNumber = parseFloat(numberInString);
                if (isNaN(parsedNumber) || parsedNumber.toString().length > 11) {
                    return {
                        isValid: false
                    };
                } else {
                    return {
                        isValid: true,
                        result: parsedNumber
                    };
                }
            } else {
                return {
                    isValid: true,
                    result: number
                };
            }
        }
    }
}

export function ValidateInteger(number) {
    if (number == '' || number && number.toString().trim() == '') {
        return {
            isValid: true
        };
    } else {
        // Number is invalid, let's try to parse it.
        if (isNaN(number)) {
            const parsedNumber = Math.round(number);
            if (isNaN(parsedNumber) || parsedNumber.toString().length > 11) {
                return {
                    isValid: false
                };
            } else {
                return {
                    isValid: true,
                    result: parsedNumber
                };
            }
        } else {
            return {
                isValid: true,
                result: Number.isInteger(number) ? number : Math.round(number)
            };
        }
    }
}

export function ValidatePassword(password) {
    var result = {
        isValid: true,
        message: ''
    };

    if (!password || password.length < 8) {
        result.isValid = false;
        result.message = "Minimum 8 characters required.";
    } else if (!password.match(/([a-z])/) || !password.match(/([A-Z])/) || !password.match(/([0-9])/) || !password.match(/([@@,#,$,%,^,&,*,_,+,|,~,!,?,.,\-,=,\\,`,:,\",;,',(,),{,},\],\[,<,>,\/])/)) {
        result.isValid = false;
        result.message = "Password should contain at least one lower case, one upper case, one digit and one special character.";
    }

    return result;
}

export function SortArray(array, sortedBy, valueType = 'string', isDesc) {
    var arrayCopy = [...array];
    const greaterThanResult = isDesc ? -1 : 1;
    const smallerThanResult = isDesc ? 1 : -1;

    if (sortedBy == null) {
        arrayCopy.sort((a, b) => {
            if (valueType == 'string') {
                return a.toString().toLowerCase() > b.toString().toLowerCase() ? greaterThanResult : smallerThanResult;
            } else if (valueType == 'currency') {
                return ParseNumber(a) > ParseNumber(b) ? greaterThanResult : smallerThanResult;
            } else if (valueType == 'number') {
                return parseFloat(a) > parseFloat(b) ? greaterThanResult : smallerThanResult;
            }
        });
    } else {
        arrayCopy.sort((a, b) => {
            if (valueType == 'string') {
                return a[sortedBy].toString().toLowerCase() > b[sortedBy].toString().toLowerCase() ? greaterThanResult : smallerThanResult;
            } else if (valueType == 'currency') {
                return ParseNumber(a[sortedBy]) > ParseNumber(b[sortedBy]) ? greaterThanResult : smallerThanResult;
            } else if (valueType == 'number') {
                return parseFloat(a[sortedBy]) > parseFloat(b[sortedBy]) ? greaterThanResult : smallerThanResult;
            }
        });
    }

    return arrayCopy;
}

export function GetArraySum(array, key) {
    if (!array || !array.length) {
        return 0;
    } else {
        if (key == undefined || key == null) {
            return array.reduce((a, b) => ParseNumber(a) + ParseNumber(b));
        } else {
            return array.map(a => a.key).reduce((a, b) => ParseNumber(a) + ParseNumber(b));
        }
    }
}

export function GetCountDataForHud(array, total) {
    if (!array) {
        array = [];
    }

    var list = [], xAxis = [];
    array.forEach((a, i) => {
        if (i == 0) {
            list = a.Entities.map(l => l.Value);
            xAxis = a.Entities.map(l => l.Label);
        } else {
            a.Entities.forEach((l, j) => {
                list[j] += l.Value;
            });
        }
    });

    var distribution = array.map(a => ({
        name: a.Title,
        count: a.TotalCount
    }));

    return {
        xAxis: xAxis,
        list: list,
        total: total,
        distribution: distribution
    };
}

// Total: total spread of color
export function GetColorSpread(total, current) {
    const max = 16777215 - 150; // 16777215 is max (255, 255, 255), we subtract it with 150 to get rid of color white
    const color = (current / total) * max;

    return {
        red: Math.floor(color / 256 / 256),
        green: Math.round((color / 255) % 256),
        blue: Math.round(color % 256)
    };
}

export function HexToRgb(hex, opacity) {
    const result = HexToRgbObject(hex);
    const rgbString = [result.r, result.g, result.b].join(', ');

    return opacity ? 'rgba(' + rgbString + ', ' + opacity + ')'
        : 'rgb(' + rgbString + ')';
}

function HexToRgbObject(hex) {
    if (!hex) {
        return {
            r: 0,
            g: 0,
            b: 0
        };
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const red = Math.round(result[1], 16);
    const green = Math.round(result[2], 16);
    const blue = Math.round(result[3], 16);

    return {
        r: red,
        g: green,
        b: blue
    };
}

function RgbObjectToHex(rgb) {
    const r = rgb.r.toString(16);
    const g = rgb.g.toString(16);
    const b = rgb.b.toString(16);

    return '#' + (r.length == 2 ? '' : '0') + r + (g.length == 2 ? '' : '0') + g + (b.length == 2 ? '' : '0') + b;
}

// Return a list of colors from provided color to white. isAsc set to true means shallow to dark.
export function GetColorTints(color, count, isAsc) {
    const max = {
        r: 255,
        g: 255,
        b: 255
    };
    const colorInRgb = HexToRgbObject(color);
    const percentageSplit = {
        r: (1 - colorInRgb.r / max.r) / count,
        g: (1 - colorInRgb.g / max.g) / count,
        b: (1 - colorInRgb.b / max.b) / count,
    };

    var tintList = [];

    if (isAsc) {
        for (var i = 0; i < count; i++) {
            tintList.unshift(RgbObjectToHex({
                r: Math.round(colorInRgb.r + i * percentageSplit.r * max.r),
                g: Math.round(colorInRgb.g + i * percentageSplit.g * max.g),
                b: Math.round(colorInRgb.b + i * percentageSplit.b * max.b)
            }));
        }
    } else {
        for (var i = 0; i < count; i++) {
            tintList.push(RgbObjectToHex({
                r: Math.round(colorInRgb.r + i * percentageSplit.r * max.r),
                g: Math.round(colorInRgb.g + i * percentageSplit.g * max.g),
                b: Math.round(colorInRgb.b + i * percentageSplit.b * max.b)
            }));
        }
    }

    return tintList;
}

export function GetColorList(count) {
    var list = ['#F8710E', '#E2B22C', '#3E3F37', '#C7C9BE', '#F4F5ED', '#89CEDE', '#524e7b', '#5f91b3', '#d5ecff', '#e2502d'];
    return list.slice(0, count);
}

export function CloneObject(target, shallowCopy) {
    if (target == null || target == undefined) {
        return target;
    } else if (shallowCopy) {
        return Object.assign({}, target);
    } else {
        return JSON.parse(JSON.stringify(target));
    }
}

export function CloneArray(array) {
    if (array && array.length) {
        return JSON.parse(JSON.stringify(array));
    } else {
        return [];
    }
}

export function GetFontColorByBackgroundColor(backgroundColor) {
    // We simply return white or black based on the contrast to the background color.
    // Input color has to be in hash format.
    // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    const r = parseInt(backgroundColor.slice(1, 3), 16);
    const g = parseInt(backgroundColor.slice(3, 5), 16);
    const b = parseInt(backgroundColor.slice(5), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 150 ? '#000000' : '#ffffff';
}

export function RemoveAllSpacesFromString(inputString) {
    return RemoveAllOccurenceFromString(inputString, ' ');
}

export function RemoveAllOccurenceFromString(inputString, pattern) {
    if (inputString === undefined || inputString === null) {
        return '';
    } else {
        return inputString.toString().replace(new RegExp(pattern, 'g'), '');
    }
}

export function GetScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    w1 == w2 && (w2 = outer.clientWidth);
    document.body.removeChild(outer);
    return (w1 - w2);
}