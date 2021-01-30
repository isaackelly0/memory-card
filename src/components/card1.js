import React, {useState} from "react";
const Card1 = () => {
    const [check, setCheck] = useState("Check");
    const changeCheck = () => {
        setCheck("Uncheck");
    }
    return(
        <div>
            <h1>{check}</h1>
            <button onClick={changeCheck}>Change</button>
        </div>
    )
}
export default Card1;