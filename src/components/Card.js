import "./Card.css";
//import './Pic/Azorius.png';
const Card = (props) => {
    const callBack = () => {
        props.sh(props.id)
    };  
    return(
        <div className="col-3 cat" id={props.id} onClick={callBack}>
         <img alt="" src={props.pic}/>   
        </div>
    )
}
export default Card;