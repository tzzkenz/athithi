import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import PropTypes from "prop-types";

export default function ReusableCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image || "https://source.unsplash.com/random"}
          alt="random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || "Lizard"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description ||
              "Lizards are a widespread group of squamate reptiles"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ReusableCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
