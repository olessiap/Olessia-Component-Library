import { useState } from 'react';
import { ProgressBarDynamic } from '../progress-bar/ProgressBarDynamic';
import './progressBars.scss';

export const ProgressBars = () => {
    const [result, setResult] = useState(0);

    return (
        <div>
            <button onClick={() => setResult(result + 1)}>
                Add
            </button>
            <div>
                {Array(result).fill(null).map((item, index) => {
                    return (
                        <div key={index}>
                            <ProgressBarDynamic />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}