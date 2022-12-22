import { DefiniteIndefinite } from '../definite-indefinite/definiteIndefinite';
import { ProgressBar } from '../progress-bar/ProgressBar';
import './componentList.scss';

export const ComponentList = () => {
    return (
        <div>
            <DefiniteIndefinite />
            <ProgressBar />
        </div>
    );
}