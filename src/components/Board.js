import React, {useState, useEffect} from "react";
import deck from "./Deck";
const Board = (props) => {
    const [table, setTable] = useState([]);
    const change = (key) =>{
        setTable(table => [...table, key])
    }
    const [cards, setCards] = useState(deck(props.fn, change))    
    const random = () =>{
    let temp = cards.slice();
        for (let i = temp.length - 1;i > 0; i--){
            let j = Math.floor(Math.random() * (i+1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }
        setCards(temp)
    }
    useEffect(random, [table])
    return(
        <div className="row">
            {cards}
        </div>
    )
}
export default Board