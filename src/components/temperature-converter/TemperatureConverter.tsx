import { useState } from 'react';
import './temperatureConverter.scss';

export const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState(0);
    const [farenheight, setFarenheight] = useState(0);

    function handleCelsiusChange(value: any) {
        setCelsius(Number(value));
        let farenheight = convertTo('farenheight', value);
        setFarenheight(Number(farenheight));
    }
    function handleFarenheightChange(value: any) {
        setFarenheight(Number(value));
        let celsius = convertTo('celsius', value);
        setCelsius(Number(celsius));
    }
    function convertTo(degreeType: string, degreeValue: number) {
        let result;
        if (degreeType === "farenheight") {
            result = (degreeValue * 1.8) + 32;
        } else if (degreeType === "celsius") {
            result = (degreeValue - 32) * .5556;
        }
        return result;
    }

    return (
        <div>
            <div>
                <input value={celsius} onChange={(e) => handleCelsiusChange(e.target.value)} />
                <p>Celsius</p>
            </div>
            <div>
                <input value={farenheight} onChange={(e) => handleFarenheightChange(e.target.value)} />
                <p>Farenheight</p>
            </div>
        </div>
    );
}