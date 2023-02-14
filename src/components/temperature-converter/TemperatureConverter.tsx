import { useState } from 'react';
import './temperatureConverter.scss';

function format(number: any) {
    // Show 4 d.p. if number has more than 4 decimal places.
    return /\.\d{5}/.test(number)
        ? Number(number).toFixed(4)
        : number;
}

export const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState<string | number>('');
    const [farenheight, setFarenheight] = useState<string | number>('');

    // converts from C to F and from F to C, returns formated value to 4 decimal points
    function convert(value: any, setDestination: any, calculatedValue: any) {
        const numericValue = Number(value);
        const isValid =
            !Number.isNaN(numericValue) && Boolean(value);
        setDestination(
            isValid ? format(calculatedValue(numericValue)) : '',
        );
    }

    return (
        <div className="temp-container">
            <div className="temp-wrapper">
                <input
                    value={celsius}
                    onChange={(event) => {
                        const newValue = event.target.value;
                        setCelsius(newValue);
                        convert(
                            newValue,
                            setFarenheight,
                            (value: number) => (value * 9) / 5 + 32
                        )
                    }}
                    className="temp-input" />
                <div className="temp-label">Celsius</div>
            </div>
            <div className="temp-divider">=</div>
            <div className="temp-wrapper">
                <input
                    value={farenheight}
                    onChange={(event) => {
                        const newValue = event.target.value;
                        setFarenheight(newValue)
                        convert(
                            newValue,
                            setCelsius,
                            (value: number) => ((value - 32) * 5) / 9,
                        )
                    }}
                    className="temp-input" />
                <div className="temp-label">Farenheight</div>
            </div>
        </div>
    );
}