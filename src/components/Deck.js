import Card from "./Card"
const deck = (callback, shuffle) => {
    return [
        <Card fn={callback} sh={shuffle} name="head"/>,
        <Card fn={callback}  sh={shuffle} name="shoulders"/>,
        <Card fn={callback}  sh={shuffle} name="knees"/>,
        <Card fn={callback}  sh={shuffle} name="and"/>,
        <Card fn={callback}  sh={shuffle} name="toes"/>
    ]
} 
export default deck