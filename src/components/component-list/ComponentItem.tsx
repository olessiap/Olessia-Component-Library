import React from 'react';
import './componentList.scss'

type ComponentItemProps = {
    item: any;
}

export const ComponentItem = (props: ComponentItemProps) => {
    return (
        <ComponentCard>
            <>
                <div className="img-wrapper">
                    <img src={require(`${props.item.image}`)} className="card-image" alt={`${props.item.name} demo`} />
                </div>
                <h4 className="card-title">{props.item.name}</h4>
                <p className="card-description">{props.item.description}</p>
            </>
        </ComponentCard>
    )
}


const ComponentCard = (props: ComponentCardProps) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

type ComponentCardProps = {
    children: any;
}