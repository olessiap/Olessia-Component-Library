import React from 'react';

export const MultipleChoice = (props: Props) => {
    return (
        <p>{` ${props.correctValue} `}</p>
    )
}

interface Props {
    correctValue: string;
}