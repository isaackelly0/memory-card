import Card from "./Card";
import Azorius from "./Pic/Azorius.png";
import Boros from "./Pic/Boros.png";
import colorless from "./Pic/colorless.png";
import Dimir from "./Pic/Dimir.png";
import Golgari from "./Pic/Golgari.png";
import Gruul from "./Pic/Gruul.png";
import Izzet from "./Pic/Izzet.png";
import mtg_black from "./Pic/mtg-black.png";
import mtg_blue from "./Pic/mtg-blue.png";
import mtg_green from "./Pic/mtg-green.png";
import mtg_red from "./Pic/mtg-red.png";
import mtg_white from "./Pic/mtg-white.png";
import Orzhov from "./Pic/Orzhov.png";
import Rakdos from "./Pic/Rakdos.png";
import Selesnya from "./Pic/Selesnya.png";
import Simic from "./Pic/Simic.png";

const deck = (shuffle) => {
    return [
        <Card id="1"  key="1" sh={shuffle} pic={Azorius}/>,
        <Card id="2"  key="2" sh={shuffle} pic={Boros}/>,
        <Card id="3"  key="3" sh={shuffle} pic={colorless}/>,
        <Card id="4"  key="4" sh={shuffle} pic={Dimir}/>,
        <Card id="5"  key="5" sh={shuffle} pic={Golgari}/>,
        <Card id="6"  key="6" sh={shuffle} pic={Gruul}/>,
        <Card id="7"  key="7" sh={shuffle} pic={Izzet}/>,
        <Card id="8"  key="8" sh={shuffle} pic={mtg_black}/>,
        <Card id="9"  key="9" sh={shuffle} pic={mtg_blue}/>,
        <Card id="10" key="10" sh={shuffle} pic={mtg_green}/>,
        <Card id="11" key="11" sh={shuffle} pic={mtg_red}/>,
        <Card id="12" key="12" sh={shuffle} pic={mtg_white}/>,
        <Card id="13" key="13" sh={shuffle} pic={Orzhov}/>,
        <Card id="14" key="14" sh={shuffle} pic={Rakdos}/>,
        <Card id="15" key="15" sh={shuffle} pic={Selesnya}/>,
        <Card id="16" key="16" sh={shuffle} pic={Simic}/>

    ]
} 
export default deck