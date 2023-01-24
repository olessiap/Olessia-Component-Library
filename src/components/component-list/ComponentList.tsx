import { useState } from 'react';
import { ComponentItem } from './ComponentItem';
import './componentList.scss';
import { ComponentTitle } from './ComponentTitle';

export const ComponentList = (props: Props) => {
    const [activeComponent, setActiveComponent] = useState(null);
    const [activeComponentTitle, setActiveComponentTitle] = useState(null);
    return (
        <>
            {activeComponent ? (
                <>
                    <button
                        onClick={() => {
                            setActiveComponent(null)
                            setActiveComponentTitle(null)
                        }}
                    >
                        back
                    </button>
                    <ComponentTitle title={activeComponentTitle} />
                    {activeComponent}
                </>
            ) : (
                <>
                    <ComponentTitle title={"Olessia's Component Library"} />
                    <div className="card-container">
                        {props.items.map((item: any) => {
                            return (
                                <ComponentItem
                                    key={item.name}
                                    item={item}
                                    updateFn={() => {
                                        setActiveComponent(item.component)
                                        setActiveComponentTitle(item.name)
                                    }}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </>
    );
}

interface Props {
    items: any;
}