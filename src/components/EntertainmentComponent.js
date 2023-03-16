import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import NavBarComponent from "./NavBarComponent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default function EntertainmentComponent() {
  const [receivedData, setReceivedData] = React.useState();

  React.useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d91a48e15e2b4175bfadc1be7afc263f"
      )
      .then((response) => {
        setReceivedData(response.data.articles);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <NavBarComponent />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2, marginTop: "60px", display: "flex" }}
        >
          {typeof receivedData === "undefined" ? (
            console.log("empty")
          ) : (
            <Grid container spacing={2}>
              {receivedData.map((data, key) => {
                return (
                  <Grid item key={key} md={4}>
                    <Card sx={{ maxWidth: 365, height: 290 }}>
                      <CardMedia
                        sx={{ height: 160 }}
                        image={
                          receivedData[key].urlToImage
                            ? receivedData[key].urlToImage
                            : "http://surl.li/fmxyb"
                        }
                        title={receivedData[key].title}
                      />
                      <CardContent
                        sx={{
                          textAlign: "center",
                          height: 80,
                          overflow: "hidden",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                        >
                          {receivedData[key].title}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <a
                          href={receivedData[key].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Button size="small" variant="contained">
                            Read More
                          </Button>
                        </a>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>
    </div>
  );
}
