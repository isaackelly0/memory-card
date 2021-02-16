import React, {useEffect} from "react";
const Card = (props) => {
    const callBack = () => {
        props.sh(props.id)
    };
    useEffect(()=>{}, [])    
    return(
        <div className="col-3" id={props.id}>
            <h1>{props.name}</h1>
            <button onClick={callBack}>Change</button>
        </div>
    )
}
export default Card;