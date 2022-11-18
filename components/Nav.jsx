import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="fixed left-0 top-0  w-full z-10 ease-in duration-300 "
    >
      <AppBar position="static" style={{ background: `${color}` }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            color={textColor}
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block p5", sm: "block p4" },
              color: `${textColor}`,
            }}
          >
            Logo
          </Typography>
          <Typography
            variant="h6"
            noWrap
            color={textColor}
            component="ul"
            className="hidden sm:flex"
          >
            <Typography
              variant="h6"
              noWrap
              color={textColor}
              component="li"
              className="p-4"
            >
              <Link href={"/"}>Home</Link>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              color={textColor}
              component="li"
              className="p-4"
            >
              <Link href={"/#gallery"}>Gallery</Link>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              color={textColor}
              component="li"
              className="p-4"
            >
              <Link href={"/#contact"}>Contact</Link>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              color={textColor}
              component="li"
              className="p-4"
            >
             <Link href={'https://www.instagram.com/'} rel="noopener noreferrer" target="_blank" ><InstagramIcon /></Link>
            </Typography>
          </Typography>
          <IconButton
            onClick={handleNav}
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: `${textColor}` }}
            className={
              nav ? "block sm:hidden z-10 text-white " : `block sm:hidden z-10`
            }
          >
            <MenuIcon />
          </IconButton>

          <Typography
            sx={{ mt: 0, mb: 2 }}
            variant="h6"
            component="div"
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <List>
              <ListItem>
                <ListItemText className="p-2 text-4xl hover:text-gray-500">
                  <Link href={"/"} onClick={handleNav}>
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className="p-2 text-4xl hover:text-gray-500">
                  <Link href={"/#gallery"} onClick={handleNav}>
                    Gallery
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className="p-2 text-4xl hover:text-gray-500">
                  <Link href={"/#contact"} onClick={handleNav}>
                    Contact
                  </Link>
                </ListItemText>
              </ListItem>
              <Link href={'https://www.instagram.com/'} rel="noopener noreferrer" target="_blank" ><InstagramIcon /></Link>
            </List>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
