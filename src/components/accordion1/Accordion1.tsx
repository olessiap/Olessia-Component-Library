import { useState } from 'react';
import './accordion1.scss';

export const Accordion1 = () => {

    const accordionData = [
        {
            'title': "HTML",
            'content': "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
            "title": "CSS",
            'content': "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
        }
    ]

    return (
        <>
            {accordionData.map((item, index) => {
                return (
                    <div key={index}>
                        <AccordionContent title={item.title} content={item.content} />
                    </div>
                )
            })}
        </>
    );
}

const AccordionContent = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {props.title}{' '}
            <span
                aria-hidden={true}
                onClick={() => setIsOpen(!isOpen)}
                className={['accordion-icon', isOpen && 'accordion-icon--filed'].filter(Boolean).join(' ')}
            ></span>
            <div>{isOpen && props.content}</div>
        </>
    )

}
interface Props {
    title: string;
    content: string;
}