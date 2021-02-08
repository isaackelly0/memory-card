import Card from "./Card"
const deck = callback => {
    return [
        <Card fn={callback} name="head"/>,
        <Card fn={callback} name="shoulders"/>,
        <Card fn={callback} name="knees"/>,
        <Card fn={callback} name="and"/>,
        <Card fn={callback} name="toes"/>
    ]
} 
export default deck