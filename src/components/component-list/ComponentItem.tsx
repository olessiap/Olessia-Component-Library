import { useEffect, useState } from 'react'
import './componentList.scss'

type ComponentItemProps = {
    item: any;
    updateFn: () => void;
}

export const ComponentItem = (props: ComponentItemProps) => {
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=Ns_UwMHIbVtRdA3PpY4JpMm0KR-bn1o-gv7GQL8Wg6Q&query=${props.item.name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setImgSrc(result.results[0]?.urls?.small);
                },
                (error) => {
                    console.log('an error occured ');
                }
            )
    }, [])
    return (
        <ComponentCard>
            <>
                <div className="img-wrapper">
                    <img src={imgSrc} className="card-image" />
                </div>
                <h4 className="card-title">{props.item.name}</h4>
                <p className="card-description">{props.item.description}</p>
                <button className="demo-button" onClick={() => props.updateFn()}>DEMO</button>
            </>
        </ComponentCard>
    )
}


const ComponentCard = (props: ComponentCardProps) => {

    return (
        <div className="card">
            {props.children}
        </div>
    )
}

type ComponentCardProps = {
    children: any;
}