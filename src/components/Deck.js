import Card from "./Card"
const deck = (shuffle) => {
    return [
        <Card id="1" sh={shuffle} name="head"/>,
        <Card id="2"  sh={shuffle} name="shoulders"/>,
        <Card id="3"  sh={shuffle} name="knees"/>,
        <Card id="4"  sh={shuffle} name="and"/>,
        <Card id="5"  sh={shuffle} name="toes"/>
    ]
} 
export default deck