import { useId, useState } from 'react';
import './accordion1.scss';

function getAccordionHeaderId(accordionId: string, value: string) {
    return accordionId + "-header-" + value;
}

function getPanelAccordionId(accordionId: string, value: string) {
    return accordionId + '-panel-' + value;
}

export const Accordion1 = (props: Props) => {
    const accordionId = useId();
    const [openSections, setOpenSections] = useState(
        new Set(),
    );

    function focusOnSection(index: number) {
        if (window.document !== null) {
            document
                .getElementById(
                    getAccordionHeaderId(
                        accordionId,
                        props.accordionData[index].value,
                    ),
                )!
                .focus();
        }
    }

    return (
        <div className="accordion-container">
            {props.accordionData.map((item: any, index: number) => {
                const isExpanded = openSections.has(item.value);
                const headerId = getAccordionHeaderId(accordionId, item.value);
                const panelId = getPanelAccordionId(accordionId, item.value);

                return (
                    <div
                        key={index}
                        className="accordion"
                        onKeyDown={(event) => {
                            console.log('clicked on this event ', event);
                            const activeItemValue =
                                document.activeElement && document.activeElement.getAttribute("data-accordion-value");
                            ;
                            if (activeItemValue == null) {
                                return;
                            }

                            switch (event.code) {
                                case 'ArrowUp': {
                                    const index = props.accordionData.findIndex(
                                        (value: string) =>
                                            value === activeItemValue,
                                    );
                                    focusOnSection(
                                        (index - 1 + props.accordionData.length) %
                                        props.accordionData.length,
                                    );
                                    break;
                                }
                                case 'ArrowDown': {
                                    const index = props.accordionData.findIndex(
                                        (value: string) =>
                                            value === activeItemValue,
                                    );
                                    focusOnSection((index + 1) % props.accordionData.length);
                                    break;
                                }
                                case 'Home': {
                                    focusOnSection(0);
                                    break;
                                }
                                case 'End': {
                                    focusOnSection(props.accordionData.length - 1);
                                    break;
                                }
                                default:
                                    break;
                            }
                        }}>
                        <div className="accordion-item">
                            <button
                                onClick={() => {
                                    const newOpenSections = new Set(openSections);
                                    newOpenSections.has(item.value) ? newOpenSections.delete(item.value) : newOpenSections.add(item.value);
                                    setOpenSections(newOpenSections)
                                }}
                                className="accordion-item-title"
                                aria-expanded={isExpanded}
                                id={headerId}
                                type="button"
                                data-accordion-value={item.value}
                                aria-controls={panelId}>
                                {item.title}{' '}
                                <span
                                    className={['accordion-icon', isExpanded && 'accordion-icon--filed'].filter(Boolean).join(' ')}
                                />
                            </button>
                            <div
                                hidden={!isExpanded}
                                className="accordion-item-contents"
                                role="region"
                                aria-labelledby={headerId}
                                id={panelId}>
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