import { DefiniteIndefinite } from '../definite-indefinite/definiteIndefinite';
import { ProgressBar } from '../progress-bar/ProgressBar';
import { ComponentItem } from './ComponentItem';
import './componentList.scss';

export const ComponentList = (props: Props) => {

    // const components = [
    //     {
    //         name: "Definite Indefinite Grammar Practice",
    //         description: "This is a multiple choice grammar quiz that tests the user's knowledge of articles",
    //         image: "./images/definite-indefinite.jpg",
    //         component: <DefiniteIndefinite />
    //     },
    //     {
    //         name: "Progress Bar",
    //         description: "A custom progress bar that displays a completed percentage number",
    //         image: "./images/cat.jpeg",
    //         component: <ProgressBar />
    //     },
    // ]
    return (
        <>
            <h1 className="heading">Olessia's Component Library List</h1>
            <div className="card-container">
                {props.items.map((item: any) => {
                    return (
                        <ComponentItem item={item} onClick={(item) => props.onClick(item)} />
                    )
                })}
            </div>
        </>
    );
}

interface Props {
    items: any;
    onClick: (item: any) => void;
}