import './progressBar.scss';

export const ProgressBarParent = () => {
    return (
        <>
            <ProgressBar progressDone={25} />
            <ProgressBar progressDone={79} />
            <ProgressBar progressDone={102} />
            <ProgressBar progressDone={100} />
        </>
    );
}

const ProgressBar = (props: Props) => {
    return (
        <div className="container">
            {props.progressDone <= 100 && (
                <div className="progress-done" style={{
                    width: `${props.progressDone}%`, borderRadius: props.progressDone === 100 ? "10px" : "10px 0 0 10px"
                }}>
                    <p>{props.progressDone}%</p>
                </div>
            )}
        </div>
    )
}

interface Props {
    progressDone: number;
}