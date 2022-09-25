import React from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Grid,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "60%",
    },
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    color: "white",
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginRight: theme.spacing(2),
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState();

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent="space-between">
          <Typography variant="h6">MISSION</Typography>
          <div className={classes.search}>
            <Search />
            <InputBase
              placeholder="Search..."
              className={classes.searchInput}
              inputProps={{ "aria-label": "search posts" }}
              fullWidth
            />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchIcon}
              onClick={() => setOpen(true)}
            />
            <Badge
              badgeContent={4}
              color="secondary"
              className={classes.badge}
              overlap="rectangular"
            >
              <Mail />
            </Badge>
            <Badge
              badgeContent={2}
              color="secondary"
              className={classes.badge}
              overlap="rectangular"
            >
              <Notifications />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className={classes.avatar}
            />
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
