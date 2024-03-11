import { Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Contact() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      mt={2}
      spacing={2}
    >
      <Grid item id={"contact"}>
        <Typography variant="h4" fontStyle={"bold"}>
          Contact
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">fabiobushi99@gmail.com</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={1} direction={"row"}>
          <Grid item>
            <CallIcon />
          </Grid>
          <Grid item>
            <Typography variant="h6">+355698536159</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4" fontStyle={"bold"}>
          Location
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h8">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={
              "https://www.google.com/maps/place/Hotel+SALA/@39.8746719,20.0059939,17z/data=!3m1!4b1!4m9!3m8!1s0x135b14f9cce945d5:0x8b7cc0bfa78b470a!5m2!4m1!1i2!8m2!3d39.8746678!4d20.0081826!16s%2Fg%2F11d_z0g3r9"
            }
          >
            Hotel SALA, Rruga Skënderbeu, Sarandë
          </Link>
        </Typography>
      </Grid>
      <Grid item>
      <Link href={'https://www.instagram.com/hotel_sala/?hl=en'} rel="noopener noreferrer" target="_blank" ><InstagramIcon /></Link>
      </Grid>
    </Grid>
  );
}
