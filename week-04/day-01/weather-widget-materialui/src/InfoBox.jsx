import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox({ weatherInfo }) {
  const image_url =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="cold image"
            height="140"
            image={image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature:{weatherInfo.temp}&deg;C </p>
              <p>Humidity:{weatherInfo.humidity}</p>
              <p>Min Temp:{weatherInfo.tempMin}&deg;C</p>
              <p>Max Temp: {weatherInfo.tempMax}&deg;C</p>
              <p> {weatherInfo.weather}</p>
              <p>Feels like {weatherInfo.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
