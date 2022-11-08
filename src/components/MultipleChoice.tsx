import React, { useState } from "react";

export const MultipleChoice = (props: Props) => {
    const [answerStatus, setAnswerStatus] = useState(true);

    const handleAnswer = (value: string) => {
        if (value === props.correctValue.toLowerCase()) {
            setAnswerStatus(true);
        } else {
            setAnswerStatus(false);
        }
    };
    return (
        <>
            <select
                onChange={(e) => handleAnswer(e.target.value)}
                style={{
                    border: answerStatus === false ? "2px solid red" : "2px solid black",
                }}
            >
                <option defaultValue="">___</option>
                <option value="a">a</option>
                <option value="an">an</option>
                <option value="the">the</option>
            </select>
        </>
    );
};

interface Props {
    correctValue: string;
}
