import { useState } from 'react';
import './accordion1.scss';

export const Accordion1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div>
                HTML{' '}
                <span
                    aria-hidden={true}
                    onClick={() => setIsOpen(!isOpen)}
                    className={['accordion-icon', isOpen && 'accordion-icon--filed'].filter(Boolean).join(' ')}
                />
            </div>
            {isOpen && (
                <div>
                    The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.
                </div>

            )}
        </div>
    );
}