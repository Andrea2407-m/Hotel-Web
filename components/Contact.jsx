import { Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from '@mui/icons-material/Instagram';

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
      <Grid item id={'contact'}>
        <Typography variant="h4" fontStyle={"bold"}>
          Contact
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          email.email@gmail.com
        </Typography>
      </Grid>
      <Grid item>
      <Grid container spacing={1}  direction={"row"}>
          <Grid item>
            <CallIcon />
          </Grid>
          <Grid item>
            <Typography variant="h6">+355 673413333</Typography>
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
          Rruga Rrapo Hekali
        </Typography>
      </Grid>
      <Grid item>
        <InstagramIcon/>
      </Grid>
    </Grid>
  );
}
