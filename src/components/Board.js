//possibly add board
//have states to third party whether or not an element was clicked
//mediate between App and card1
import React, {useState, useEffect} from "react";
import deck from "./Deck";
const Board = (props) => {
    const [shuffle, setShuffle] = useState(0)
    const clear = () => {
        setShuffle(shuffle + 1);
    }
    const [cards, setCards] = useState(deck(props.fn, clear))
    
    useEffect(()=>{
        let temp = cards.slice();
        for (let i = temp.length - 1;i > 0; i--){
            let j = Math.floor(Math.random() * (i+1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }
        setCards(temp)
    }, shuffle)
    return(
        <div>
            {cards}
        </div>
    )
}
export default Board