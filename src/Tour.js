import React, {useState} from 'react'


const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
    <article className="single-tour">
        <img src={image} alt={name}/>
        <div>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="price">${price}</h4>
            </div>
            <p>
                {readMore ? info: `${info.substring(0, 200)}.... `}
                <button onClick={()=> setReadMore(!readMore)} className="readButton">{readMore ? "show less" : "Read More"}</button>
            </p>
        </div>
        <button onClick={()=> removeTour(id)} className="removeButton">not interested</button>
    </article>
    )
}
export default Tour