import { useState } from 'react';
import './tabs.scss';

export const Tabs = () => {
    const [active, setActive] = useState(0);
    const contentData = [
        {
            title: "HTML",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            title: "CSS",
            content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
        },
        {
            title: "Javascript",
            content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
        }
    ]
    return (
        <div>
            <div className="tab-button-container">
                {contentData.map((item, index) => {
                    return (
                        <div
                            style={{ color: active === index ? 'red' : 'black' }}
                            onClick={() => { setActive(index) }}>
                            {item.title}
                        </div>
                    )
                })}
            </div>
            <div>
                {contentData[active].content}
            </div>
        </div>
    );
}