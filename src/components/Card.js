import React, {useState, useEffect} from "react";
const Card = (props) => {
    const [check, setCheck] = useState(true);
    //useEffect(()=>{if (!check){props.sh()}}, [props, check])
    const callBack = () => {
        changeCheck()
        check ? props.fn(true) : props.fn(false)
    };
    const changeCheck = () => {
        check ? setCheck(false): setCheck(true);
    }
    return(
        <div className="col-3" id={props.id}>
            <h1>{props.name}</h1>
            <button onClick={callBack}>Change</button>
        </div>
    )
}
export default Card;