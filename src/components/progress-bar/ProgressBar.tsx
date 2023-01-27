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


const ProgressBar = (props: Props) => {

    return (
        <div className="progress">
            {props.value <= 100 && (
                <div className="progress-bar" style={{ width: `${props.value}%` }}>
                    <p>{props.value}%</p>
                </div>
            )}
        </div>
    )
}

interface Props {
    value: number;
}