import React, {useState} from "react";
const Card1 = (props) => {
    const [check, setCheck] = useState(true);

    const callBack = () => {
        changeCheck()
        check ? props.fn(true) : props.fn(false)
    };
    const changeCheck = () => {
        setCheck(false);
    }
    return(
        <div>
            <button onClick={callBack}>Change</button>
        </div>
    )
}
export default Card1;