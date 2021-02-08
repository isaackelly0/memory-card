//possibly add board
//have states to third party whether or not an element was clicked
//mediate between App and card1
import React, {useState, useEffect} from "react";
import deck from "./Deck";
const Board = (props) => {
    const [cards, setCards] = useState(deck(props.fn))
    return(
        <div>
            {cards}
        </div>
    )
}
export default Board