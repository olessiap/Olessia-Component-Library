const MAX = 100;
const MIN = 0;

export const ProgressBarStatic = (props: Props) => {
    // handle invalid values and convert them to be within [0, 100] range
    const clampedValue = Math.min(Math.max(props.value, MIN), MAX);

    return (
        <div className="progress">
            <div
                className="progress-bar"
                style={{ width: `${clampedValue}%` }}
                role="progressbar"
                aria-valuenow={clampedValue}
                aria-valuemin={MIN}
                aria-valuemax={MAX}>
                {clampedValue}%
            </div>
        </div>
    )
}

interface Props {
    value: number;
}