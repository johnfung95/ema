"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface Props {
  window?: () => Window;
}

const drawerWidth = 200;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
          <Link key={`menu-btn-home`} href="/ema" className="hover:text-orange-400">
            <ListItem key={"home"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 225 216)}" } }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
      <List>
          <Link key={`menu-btn-about`} href="/about" className="hover:text-orange-400">
            <ListItem key={"about"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 212 216)}" } }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={"About"} />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
      <List>
          <Link key={`menu-btn-create`} href="/create" className="hover:text-orange-400">
            <ListItem key={"create"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 212 216)}" } }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={"Create Ema"} />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "rgb(24 24 27)",
          opacity: 0.6,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1, justifyContent: "center" }}>
            <Link key="home" href="/ema" className="p-2 hover:text-amber-400">
              Home
            </Link>
            <Link key="about" href="/about" className="p-2 hover:text-amber-400">
              About
            </Link>
            <Link key="create" href="/create-ema" className="p-2 hover:text-amber-400">
              Create Ema
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: "rgb(113 113 122)",
            opacity: 0.8
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
