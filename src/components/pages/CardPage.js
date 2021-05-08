import React from 'react'
import "./WideCard.css"
import CardItem from "./CardItem"






function CardPage(props) {

    const sendToURL = (e) => {
        window.open(e.target.href, "_blank")
        //open a new window with the href from props.outerLink
    }

    return (
        <div className="projectContainer">

            <div className="cards__items">
            <CardItem
            src={props.src}
            text={props.text}
            label={props.label}
            href={props.outerLink}>
            </CardItem>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>

            <button onClick={sendToURL}>See It</button>
        </div>
 
    )
}

export default CardPage
