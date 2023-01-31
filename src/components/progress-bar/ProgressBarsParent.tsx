import { useState } from 'react';
import { ProgressBarDynamic } from './ProgressBarDynamic';

export const ProgressBarsParent = () => {
    const [result, setResult] = useState(0);

    return (
        <div>
            <button onClick={() => setResult(result + 1)}>
                Add
            </button>
            <div className="wrapper">
                {Array(result).fill(null).map((_, index) => {
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