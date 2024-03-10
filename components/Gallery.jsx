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
    img: "/Dhoma 101 (2).jpg",
    title: "Breakfast"
  },
  {
    id:2,
    img: "/Dhoma 101.jpg",
    title: "Burger"
  },
  {
    id:3,
    img: "/Dhoma 102 (1).jpg",
    title: "Camera"
  },
  {
    id:4,
    img: "/Dhoma 105.jpg",
    title: "Coffee"
  },
  {
    id:5,
    img: "/Dhoma 206.jpg",
    title: "Hats"
  },
  {
    id:6,
    img: "/Dhoma 207 (2).jpg",
    title: "Honey"
  },
  {
    id:7,
    img: "/Dhoma 210.jpg",
    title: "Hats"
  },
  {
    id:8,
    img: "/Ballkoni 206.jpg",
    title: "Honey"
  },
 
];
