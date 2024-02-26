import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logoImage from '../assets/logo.png'; // Import de l'image
import { IoSearchSharp } from "react-icons/io5";
import { Collapse } from '@mui/material';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, MarginRounded, StarBorder as StarBorderIcon } from '@mui/icons-material';
import { TbBus } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, CardContent } from '@material-ui/core';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaEuroSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { Select, MenuItem } from '@mui/material';
const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor: 'green',
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openInbox, setOpenInbox] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  const [openDrafts, setOpenDrafts] = useState(false);
  const [openDraft, setOpenDraft] = useState(false);

  const handleInboxClick = () => {
    setOpenInbox(!openInbox);
  };

  const handleMailClick = () => {
    setOpenMail(!openMail);
  };

  const handleDraftsClick = () => {
    setOpenDrafts(!openDrafts);
  };

  const handleDraftClick = () => {
    setOpenDraft(!openDraft);
  };

  const [showDashboardText, setShowDashboardText] = useState(false);
  const handleDashboardClick = () => {
    setShowDashboardText(!showDashboardText);
  };
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const cardMargin = scrolling && open ? '50px' : '0';
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          background-color: #F6F9FF;
        }
      `}
      </style>
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            color="textprimary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="img" src={logoImage} alt="description_de_l'image" sx={{ width: '50px', height: '50px' }} />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '5px',
            margin: '20px auto', // Centre horizontalement sur le web
            padding: '10px',
            outline: '2px solid gray',
            position: 'relative',
            maxWidth: '90vw', // Limite la largeur à 90% de la largeur de la vue
          }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                flex: '1', // Permet à l'élément de s'étirer pour occuper l'espace disponible
                padding: '5px',
                borderRadius: '5px',
                outline: 'none',
                border: 'none',
                fontSize: '16px', // Taille de police par défaut
                color: 'black',
              }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '10px', // 10px du bord droit
              transform: 'translateY(-50%)',
              color: 'gray',
              fontSize: '20px', // Taille de l'icône
            }}>
              <IoSearchSharp />
            </div>
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>

            <div style={{ width: '10px' }}></div>

            <Select
              value="" // Ajoutez ici la valeur sélectionnée par défaut
              displayEmpty
              inputProps={{ 'aria-label': 'Username' }}
              style={{ color: 'black', backgroundColor: 'transparent', border: '0px', }}
            >
              <MenuItem disabled value="">Username</MenuItem>
              <MenuItem value="option1">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CgProfile style={{ marginRight: '8px', fontSize: '20px' }} />
                  Profil
                </div>
              </MenuItem>
              <MenuItem value="option2">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IoLogOut style={{ marginRight: '8px', fontSize: '20px' }} />
                  Deconnexion
                </div>
              </MenuItem>

            </Select>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            zIndex: 10,  // Définir le z-index du tiroir
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Tableau de bord" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleInboxClick}>
            <ListItemIcon >
              <TbBus style={{ fontSize: 28 }} />            </ListItemIcon>
            <ListItemText primary="Transfer d'aeroport" />
            {openInbox ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openInbox} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/Form">
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Reserver" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/Reservations">
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Mes réservations" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/Gestion">
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Reservations payees" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/Table">
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Historique des payements " />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleMailClick}>
            <ListItemIcon>
              <FaRegHandshake style={{ fontSize: 28 }} />
            </ListItemIcon>
            <ListItemText primary="Accueil VIP (Fast Track)" />
            {openMail ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openMail} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}
                component={Link}
                to="/Tables">
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Réservations" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleDraftsClick}>
            <ListItemIcon>
              <FaStar style={{ fontSize: 28 }} />
            </ListItemIcon>
            <ListItemText primary="Accueil VVIP (Salon)" />
            {openDrafts ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openDrafts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <Divider />
        <List>
          <ListItemButton onClick={handleDraftClick}>
            <ListItemIcon>
              <FaCarAlt style={{ fontSize: 28 }} />
            </ListItemIcon>
            <ListItemText primary="Mise  a disposition (avec chauffeur)" />
            {openDraft ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openDraft} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GoDot />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Main open={open}>
        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
          <DrawerHeader />

          {/* Première Card */}

          <Card style={{ width: '100%', maxWidth: '400px', height: '200px', marginTop: '200px', zIndex: 1, marginLeft: '-40px' }}>
            <CardContent>
              <h1><strong>Navette</strong>| ventes</h1>
              <FaEuroSign style={{ fontSize: 30, marginLeft: '100px', marginTop: '15px' }} />
              <h2 style={{ marginTop: '55px', marginLeft: '180px' }}>réservation(s)</h2>
              <div style={{ display: 'inline-block', background: 'gray', padding: '10px', borderRadius: '50%', marginTop: '-85px' }}>
                <LiaShoppingCartSolid style={{ fontSize: 70, color: 'white' }} />
              </div>
            </CardContent>
          </Card>


          <div style={{ width: '150px' }}></div>

          <DrawerHeader />

          {/* Deuxième Card */}

          <Card style={{ width: '100%', maxWidth: '400px', height: '200px', marginTop: '200px', zIndex: 1 }}>
            <CardContent>
              <h1><strong>Navette</strong>| ventes</h1>
              <FaEuroSign style={{ fontSize: 30, marginLeft: '100px', marginTop: '15px' }} />
              <h2 style={{ marginTop: '55px', marginLeft: '180px' }}>réservation(s)</h2>
              <div style={{ display: 'inline-block', background: 'green', padding: '10px', borderRadius: '50%', marginTop: '-85px' }}>
                <LiaShoppingCartSolid style={{ fontSize: 70, color: 'white' }} />
              </div>
            </CardContent>
          </Card>


          <div style={{ width: '150px' }}></div>
          <DrawerHeader />

          {/* Troisieme Card */}

          <Card style={{ width: '100%', maxWidth: '400px', height: '200px', marginTop: '200px', zIndex: 1 }}>
            <CardContent>
              <h1><strong>Navette</strong>| ventes</h1>
              <FaEuroSign style={{ fontSize: 30, marginLeft: '100px', marginTop: '15px' }} />
              <h2 style={{ marginTop: '55px', marginLeft: '180px' }}>réservation(s)</h2>
              <div style={{ display: 'inline-block', background: 'blue', padding: '10px', borderRadius: '50%', marginTop: '-85px' }}>
                <LiaShoppingCartSolid style={{ fontSize: 70, color: 'white' }} />
              </div>
            </CardContent>
          </Card>

        </div>
      </Main>
    </Box>
  );
}


// export default Navbar;
// import React from "react";
// import { IoMenu } from "react-icons/io5";
// import { IoSearchSharp } from "react-icons/io5";
// import logo from '../assets/future-studio.png';
// import { useState } from "react";
// import './Navbar.css'

// const Navbar = () => {
//   const [activeButton, setActiveButton] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav style={{ backgroundColor: 'white', padding: '10px', display: 'flex', alignItems: 'center',  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
//       <div>
//         <img src="logo.png" alt="logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
//       </div>
//       <div style={{ marginLeft: '150px' }}>
//         <IoMenu style={{ width: '40px', height: '40px' }}/>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '5px', marginLeft: '20px', marginRight: '1255px', padding: '5px', outline: '2px solid gray', position: 'relative' }}>
//         <input
//           type="text"
//           placeholder="Search"
//           style={{ padding: '5px', borderRadius: '5px', outline: 'none', border: 'none', width: '100%' }}
//         />
//         <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '185px' }}>
//           <IoSearchSharp />
//         </div>
//       </div>
//     </nav>
//   );
// }


