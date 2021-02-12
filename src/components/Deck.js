import Card from "./Card"
const deck = (callback, shuffle) => {
    return [
        <Card fn={callback} id="1" sh={shuffle} name="head"/>,
        <Card fn={callback} id="2"  sh={shuffle} name="shoulders"/>,
        <Card fn={callback} id="3"  sh={shuffle} name="knees"/>,
        <Card fn={callback} id="4"  sh={shuffle} name="and"/>,
        <Card fn={callback} id="5"  sh={shuffle} name="toes"/>
    ]
} 
export default deck