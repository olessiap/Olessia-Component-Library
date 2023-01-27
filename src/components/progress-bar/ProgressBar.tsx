import { useEffect } from 'react';
import './progressBar.scss';

export const ProgressBarParent = () => {
    return (
        <>
            <ProgressBar value={0} />
            <ProgressBar value={25} />
            <ProgressBar value={50} />
            <ProgressBar value={75} />
            <ProgressBar value={100} />
            <ProgressBar value={2} />
            <ProgressBar value={-10} />
            <ProgressBar value={120} />
        </>
    );
}

const MAX = 100;
const MIN = 0;

const ProgressBar = (props: Props) => {
    // handle invalid values and convert them to be within [0, 100] range
    const clampedValue = Math.min(Math.max(props.value, MIN), MAX);

    return (
        <div className="progress">
            <div className="progress-bar" style={{ width: `${clampedValue}%` }}>
                <p>{props.value}%</p>
            </div>
        </div>
    )
}

interface Props {
    value: number;
}