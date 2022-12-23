import { DefiniteIndefinite } from '../definite-indefinite/definiteIndefinite';
import { ProgressBar } from '../progress-bar/ProgressBar';
import './componentList.scss';

export const ComponentList = () => {

    const components = [
        {
            name: "Definite Indefinite Grammar Practice",
            description: "This is a multiple choice grammar quiz that tests the user's knowledge of articles",
            image: "",
            component: <DefiniteIndefinite />
        },
        {
            name: "Progress Bar",
            description: "A custom progress bar that displayes completed percentage number",
            image: "",
            component: <ProgressBar />
        }
    ]
    return (
        <div>
            {/* <DefiniteIndefinite />
            <ProgressBar /> */}
            {components.map((item) => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                )
            })}
        </div>
    );
}