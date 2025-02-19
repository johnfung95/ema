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
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSession, getProviders, signIn, signOut } from "next-auth/react"

interface Props {
  window?: () => Window;
}

const drawerWidth = 200;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [providers, setProviders] = React.useState(null)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: session } = useSession()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const settingProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    settingProviders();
  }, []);


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {session?.user ? (
        <List key="mobile-signout">
          <ListItem sx={{ justifyContent: "center" }}>
            <Image
              src={session?.user.image}
              width={40}
              height={40}
              className="rounded-full p-1"
              alt="profile"
            />
          </ListItem>
          <ListItem key={"menu-btn-signout"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 212 216)}" } }}>
            <ListItemButton onClick={() => signOut({ redirect: false })} className="hover:text-orange-400" sx={{ textAlign: "center" }}>
              <ListItemText secondary={"Sign Out"} />
            </ListItemButton>

          </ListItem>
        </List>
      ) :
        providers &&
        Object.values(providers).map((provider: any) => (
          <List key="mobile-signin">
            <ListItem key={"menu-btn-signin"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 212 216)}" } }}>
              <ListItemButton onClick={() => signIn(provider.id, { redirect: false })} className="hover:text-orange-400" sx={{ textAlign: "center" }}>
                <ListItemText primary={"Sign In"} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      <List key="mobile-home">
        <Link key={`menu-btn-home`} href="/emas" className="hover:text-orange-400">
          <ListItem key={"home"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 225 216)}" } }}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List key="mobile-about">
        <Link key={`menu-btn-about`} href="/about" className="hover:text-orange-400">
          <ListItem key={"about"} disablePadding sx={{ '&:hover': { backgroundColor: "rgb(212 212 216)}" } }}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List key="mobile-create">
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
          opacity: 0.7,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3.1rem"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1, justifyContent: "center", paddingLeft: "5rem" }}>
            <Link key="home" href="/emas" className="p-2 hover:text-amber-400">
              Home
            </Link>
            <Link key="about" href="/about" className="p-2 hover:text-amber-400">
              About
            </Link>
            <Link key="create" href="/create-ema" className="p-2 hover:text-amber-400">
              Create Ema
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {session?.user ? <div className="flex">
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                className="rounded-full p-1"
                alt="profile"
              />
              <button onClick={() => signOut({ redirect: false })} className="hover:text-amber-400 text-sm">
                Sign out
              </button>
            </div>
              : providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id, { redirect: false })}
                  className="black_btn hover:text-amber-400 text-sm"
                >
                  Sign In
                </button>
              ))}
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
