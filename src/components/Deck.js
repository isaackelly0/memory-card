import Card from "./Card"
const deck = (shuffle) => {
    return [
        <Card id="1" key="1" sh={shuffle} name="Joker"/>,
        <Card id="2"  key="2" sh={shuffle} name="Mona"/>,
        <Card id="3"  key="3" sh={shuffle} name="Skull"/>,
        <Card id="4"  key="4" sh={shuffle} name="Panther"/>,
        <Card id="5"  key="5" sh={shuffle} name="Fox"/>,
        <Card id="6"  key="6" sh={shuffle} name="Queen"/>,
        <Card id="7"  key="7" sh={shuffle} name="Oracle"/>,
        <Card id="8"  key="8" sh={shuffle} name="Noir"/>,
        <Card id="9"  key="9" sh={shuffle} name="Crow"/>,
        <Card id="10"  key="10" sh={shuffle} name="Kasumi"/>,
        <Card id="11"  key="11" sh={shuffle} name="Naoto"/>,
        <Card id="12"  key="12" sh={shuffle} name="Rise"/>
    ]
} 
export default deck