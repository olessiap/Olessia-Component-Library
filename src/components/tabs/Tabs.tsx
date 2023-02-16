import { useState } from 'react';
import './tabs.scss';

export const Tabs = (props: Props) => {
    const [active, setActive] = useState(props.defaultValue ?? props.items[0].value);

    return (
        <div className="tab-main-container">
            <div className="tab-button-container">
                {props.items.map((item: any) => {
                    const isActiveValue = item.value == active;
                    return (
                        <button
                            key={item.value}
                            type="button"
                            className={["tab-button", isActiveValue && "tab-button-active"].filter(Boolean).join(" ")}
                            onClick={() => setActive(item.value)}>
                            {item.label}
                        </button>
                    )
                })}
            </div>
            <div className="tab-content">
                {props.items.map((item: any) => (
                    <div key={item.value} hidden={item.value !== active}>
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface Props {
    items: any;
    defaultValue?: string;
}