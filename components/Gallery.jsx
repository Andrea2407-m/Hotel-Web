import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { Grid } from "@mui/material";

export default function Gallery() {
    
  return (
    <Grid id="gallery" container sx={{mt:2}} spacing={-1}> 
    <ImageList sx={{ ml:1, mr:1 , overflow:"hidden"}} cols={4} >
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <Image
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            width={600}
            height={600}
            className="sm: w-300  ml-2 mr-2"
           
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
  );
}

const itemData = [
  {
    id:1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast"
  },
  {
    id:2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger"
  },
  {
    id:3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera"
  },
  {
    id:4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee"
  },
  {
    id:5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats"
  },
  {
    id:6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey"
  },
  {
    id:7,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats"
  },
  {
    id:8,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey"
  },
 
];
