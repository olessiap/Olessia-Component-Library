import React from 'react';
type Props = {
    item: any;
}

export const ComponentItem = (props: Props) => {
    return (
        <ComponentCard>
            <>
                <img src={props.item.image} height='200px' width="300px" />
                <h1>{props.item.name}</h1>
                <p>hellloooooo</p>
            </>
        </ComponentCard>
    )
}

type Props2 = {
    children: any;
}

const ComponentCard = (props: Props2) => {
    return (
        <div style={{ backgroundColor: 'pink' }}>
            {props.children}
        </div>
    )
}
