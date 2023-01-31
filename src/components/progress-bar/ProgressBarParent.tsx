import './progressBar.scss';
import { ProgressBarStatic } from './ProgressBarStatic';

export const ProgressBarParent = () => {
    return (
        <div className="wrapper">
            <ProgressBarStatic value={0} />
            <ProgressBarStatic value={25} />
            <ProgressBarStatic value={50} />
            <ProgressBarStatic value={75} />
            <ProgressBarStatic value={100} />
            <ProgressBarStatic value={2} />
            <ProgressBarStatic value={-10} />
            <ProgressBarStatic value={120} />
        </div>
    );
}
