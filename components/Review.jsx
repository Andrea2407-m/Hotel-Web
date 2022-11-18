import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: "20px"
}));

const lightTheme = createTheme({ palette: { mode: "light" } });


export default function Review({reviews}) {
  return (
    <Grid container spacing={1}>
        {reviews.map( (review,index) =>{
            return(
                <Grid item key={review.id} xs={12} sm={12} md={6}>
                <ThemeProvider theme={lightTheme}>
                  <Box
                  key={review.id}
                    sx={{
                      p: 1,
                      bgcolor: "background.default",
                      display: "grid",
                      gap: 1
                    }}
                  >
                    <Item key={review.id} elevation={8}><div className="font-bold">{`${review.title}`}</div>{`${review.content}`}</Item>
                  </Box>
                </ThemeProvider>
              </Grid>
            );
        }
        )}
     
    </Grid>
  );
}