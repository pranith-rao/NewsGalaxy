import React from "react";
import Box from "@mui/material/Box";
import NavBarComponent from "./NavBarComponent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function HomeComponent() {
  let cards = {
    1: {
      name: "Health",
      image:
        "https://thumbs.dreamstime.com/z/good-health-best-wealth-card-stethoscope-red-heart-wood-table-medical-concept-72050180.jpg",
      description: " to view news releated to health",
      to: "/health",
    },
    2: {
      name: "Sports",
      image:
        "https://media.istockphoto.com/id/1141191007/vector/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-silhouettes-run-soccer.jpg?s=612x612&w=0&k=20&c=SEabW4SHZ7blMHJPxZNSTl_anOMHO3whQI7HIMxFpSg=",
      description: " to view news releated to sports",
      to: "/sports",
    },
    3: {
      name: "Business",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwAnfpnVzefygv9L3xufp_azOVKRlUzSNElP0jXSC&s",
      description: " to view news releated to business",
      to: "/business",
    },
    4: {
      name: "Technology",
      image:
        "https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg",
      description: " to view news releated to technology",
      to: "/technology",
    },
    5: {
      name: "Entertainment",
      image:
        "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHw%3D&w=1000&q=80",
      description: " to view news releated to entertainment",
      to: "/entertainment",
    },
    6: {
      name: "Politics",
      image:
        "https://www.shutterstock.com/image-vector/crowd-people-demonstrating-silhouette-oratory-260nw-1021188484.jpg",
      description: " to view news releated to politics",
      to: "/politics",
    },
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <NavBarComponent />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2, marginTop: "60px", display: "flex" }}
        >
          <Grid container spacing={2}>
            {Object.keys(cards).map((key) => {
              return (
                <Grid item md={4}>
                  <Card sx={{ maxWidth: 365 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={cards[key].image}
                      title={cards[key].name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {cards[key].name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Link
                          to={cards[key].to}
                          style={{ textDecoration: "none", color: "blue" }}
                        >
                          Click here
                        </Link>
                        {cards[key].description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
