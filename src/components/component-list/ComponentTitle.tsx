import React from 'react';

export const ComponentTitle = (props: Props) => {
    return (
        <h1 className="heading">{props.title}</h1>
    )
}

interface Props {
    title: string | null;
}