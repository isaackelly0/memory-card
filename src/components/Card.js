import "./Card.css";
const Card = (props) => {
    const callBack = () => {
        props.sh(props.id)
    };  
    return(
        <div className="col-lg-3 col-md-4 col-sm-6" id={props.id} onClick={callBack}>
         <img alt="" src={props.pic}/>   
        </div>
    )
}
export default Card;