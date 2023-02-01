import './accordion1.scss';

export const Accordion1 = () => {
    return (
        <div>
            <div>
                HTML{' '}
                <span
                    aria-hidden={true}
                    className="accordion-icon"
                />
            </div>
            <div>
                The HyperText Markup Language or HTML is the
                standard markup language for documents designed to
                be displayed in a web browser.
            </div>
        </div>
    );
}