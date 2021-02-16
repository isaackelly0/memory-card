import Card from "./Card"
const deck = (shuffle) => {
    return [
        <Card id="1" sh={shuffle} name="Joker"/>,
        <Card id="2"  sh={shuffle} name="Mona"/>,
        <Card id="3"  sh={shuffle} name="Skull"/>,
        <Card id="4"  sh={shuffle} name="Panther"/>,
        <Card id="5"  sh={shuffle} name="Fox"/>,
        <Card id="6"  sh={shuffle} name="Queen"/>,
        <Card id="7"  sh={shuffle} name="Oracle"/>,
        <Card id="8"  sh={shuffle} name="Noir"/>,
        <Card id="9"  sh={shuffle} name="Crow"/>,
        <Card id="10"  sh={shuffle} name="Kasumi"/>,
        <Card id="11"  sh={shuffle} name="Naoto"/>,
        <Card id="12"  sh={shuffle} name="Rise"/>
    ]
} 
export default deck