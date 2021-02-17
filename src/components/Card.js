import "./Card.css";
const Card = (props) => {
    const callBack = () => {
        props.sh(props.id)
    };   
    return(
        <div className="col-3 cat" id={props.id} onClick={callBack}>
            <h4>{props.name}</h4>
        </div>
    )
}
export default Card;