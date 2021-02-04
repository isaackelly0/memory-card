import Card1 from "./card1"
const deck = (callback, bool) => {
    return [
        <Card1 fn={callback} status={bool} name="head"/>,
        <Card1 fn={callback} status={bool} name="shoulders"/>,
        <Card1 fn={callback} status={bool} name="knees"/>,
        <Card1 fn={callback} status={bool} name="and"/>,
        <Card1 fn={callback} status={bool} name="toes"/>
    ]
} 
export default deck