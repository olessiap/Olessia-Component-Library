import { useEffect, useState } from "react";

export const ProgressBarDynamic = () => {
    const [startTransition, setStartTransition] = useState(false);

    useEffect(() => {
        if (startTransition) {
            return;
        }

        setStartTransition(true);
    });

    const test = [
        'bar-contents',
        startTransition && 'bar-contents-filled',
    ].filter(Boolean).join(' ')

    console.log('test ', test);
    return (
        <div className="bar">
            <div className={[
                'bar-contents',
                startTransition && 'bar-contents-filled',
            ]
                .filter(Boolean)
                .join(' ')}
            />
        </div>

    )
}
