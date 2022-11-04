import React from 'react';

export const MultipleChoice = (props: Props) => {
    console.log('test props ', props);
    return (
        <p>hello</p>
    )
}

interface Props {
    correctValue: string;
}