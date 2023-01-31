import { useEffect, useState } from "react";

export const ProgressBarDynamic = () => {
    const [startTransition, setStartTransition] = useState(false);

    useEffect(() => {
        if (startTransition) {
            return;
        }

        setStartTransition(true);
    }, []);

    return (
        <div className="bar">
            <div className={[
                'bar-contents',
                startTransition && 'bar-contents--filled',
            ]
                .filter(Boolean)
                .join(' ')}
            />
        </div>

    )
}
