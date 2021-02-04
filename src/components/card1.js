import React, {useState, useEffect} from "react";
const Card1 = (props) => {
    const [check, setCheck] = useState(true);
    useEffect(
       () => {return setCheck(true)}
    ,[])
    // const reset = () =>{
    //     return setCheck(true)
    // }
    const callBack = () => {
        changeCheck()
        check ? props.fn(true) : props.fn(false)
    };
    const changeCheck = () => {
        check ? setCheck(false): setCheck(true);
        //setCheck(false)
    }
    return(
        <div>
            <h1>{props.name}</h1>
            <button onClick={callBack}>Change</button>
        </div>
    )
}
export default Card1;