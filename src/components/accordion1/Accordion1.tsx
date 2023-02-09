import { useState } from 'react';
import './accordion1.scss';

export const Accordion1 = (props: Props) => {
    const [openSections, setOpenSections] = useState(
        new Set(),
    );
    const [count, setCount] = useState();

    return (
        <div>
            {props.accordionData.map((item: any, index: number) => {
                const isExpanded = openSections.has(item.value);
                return (
                    <div key={index} className="accordion">
                        <div className="accordion-item">
                            <button
                                onClick={() => {
                                    const newOpenSections = new Set(openSections);
                                    newOpenSections.has(item.value) ? newOpenSections.delete(item.value) : newOpenSections.add(item.value);
                                    setOpenSections(newOpenSections)
                                }}
                                className="accordion-item-title">
                                {item.title}{' '}
                                <span
                                    aria-hidden={true}

                                    className={['accordion-icon', isExpanded && 'accordion-icon--filed'].filter(Boolean).join(' ')}
                                />
                            </button>
                            <div
                                hidden={!isExpanded}
                                className="accordion-item-contents">
                                {item.content}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
interface Props {
    accordionData: any;
}

// const AccordionContent = (props: Props) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div className="accordion">
//             <div className="accordion-item">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="accordion-item-title">
//                     {props.title}{' '}
//                     <span
//                         aria-hidden={true}

//                         className={['accordion-icon', isOpen && 'accordion-icon--filed'].filter(Boolean).join(' ')}
//                     />
//                 </button>
//                 <div
//                     hidden={!isOpen}
//                     className="accordion-item-contents">
//                     {props.content}
//                 </div>
//             </div>
//         </div>
//     )

// }
