import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ lang, img, btn }) => {
  return (
    <div>
      <h1>{lang}</h1>
      <img src={img} alt="image" />
      <Buton />
    </div>
  );
};

export default Card;
