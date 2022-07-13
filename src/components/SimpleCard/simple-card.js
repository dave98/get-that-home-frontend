import { useNavigate } from "react-router-dom";
import { CardContainer, CardDescription, CardImage, CardTitle } from "./style";

const SimpleCard = ({ img, title, description, route }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(route);
  };
  return (
    <CardContainer
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <CardImage src={img} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default SimpleCard;
