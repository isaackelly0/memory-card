import React, {useState, useEffect} from "react";
import deck from "./Deck";
const Board = (props) => {
    const [table, setTable] = useState([]);
    const change = (key) =>{
       setTable(newTable => [...newTable, key])
    }
    const [cards, setCards] = useState(deck(change))    
    const update = () =>{
        let bool = true;
        if(table.length>1){
            for(let i = 0; i < table.length - 1; i++){
                if(table[i] === (table[table.length - 1])){
                    bool = false;
                    //break;
                    //console.log(table[i])
                }
            }
            props.fn(bool)
        }
        else if(table.length === 1){
            props.fn(true)
        }
        let temp = cards.slice();
            for (let i = temp.length - 1;i > 0; i--){
                let j = Math.floor(Math.random() * (i+1));
                [temp[i], temp[j]] = [temp[j], temp[i]];
            }
            setCards(temp) 
    }
    useEffect(update, [table])
    return(
        <div className="row">
            {cards}
            {table}
            
        </div>
    )
}
export default Board