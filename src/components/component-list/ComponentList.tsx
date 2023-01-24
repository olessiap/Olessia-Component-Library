import { useState } from 'react';
import { ComponentItem } from './ComponentItem';
import './componentList.scss';

export const ComponentList = (props: Props) => {
    const [activeComponent, setActiveComponent] = useState(null);
    return (
        <>
            <div>
                {activeComponent ? (
                    <button onClick={() => setActiveComponent(null)}>back</button>
                ) :
                    <h1 className="heading">Olessia's Component Library List</h1>
                }
            </div>
            {activeComponent ? activeComponent : (
                <div className="card-container">
                    {props.items.map((item: any) => {
                        return (
                            <ComponentItem key={item.name} item={item} updateFn={() => setActiveComponent(item.component)} />
                        )
                    })}
                </div>

            )}
        </>
    );
}

interface Props {
    items: any;
}