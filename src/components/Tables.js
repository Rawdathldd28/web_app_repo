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
import { Select, MenuItem } from '@mui/material';
import { FaEuroSign } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

const drawerWidth = 300;

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

    const handleInboxClick = () => {
        setOpenInbox(!openInbox);
    };

    const handleMailClick = () => {
        setOpenMail(!openMail);
    };

    const handleDraftsClick = () => {
        setOpenDrafts(!openDrafts);
    };

    const [openDraft, setOpenDraft] = useState(false);
    const handleDraftClick = () => {
        setOpenDraft(!openDraft);
    };

    const [showDashboardText, setShowDashboardText] = useState(false);
    const handleDashboardClick = () => {
        setShowDashboardText(!showDashboardText);
    };
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const cardMargin = scrolling && open ? '50px' : '0';

    const [isButtonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = () => {
        // Mettez ici le code que vous souhaitez exécuter lors du clic sur le bouton

        // Ensuite, mettez à jour l'état pour refléter le clic sur le bouton
        setButtonClicked(true);

        // Effacez l'état après un certain délai pour réinitialiser l'effet
        setTimeout(() => {
            setButtonClicked(false);
        }, 300);
    };
    const handleLinkClick = (e) => {
        // Empêche la propagation de l'événement
        e.stopPropagation();
    };

    const [tableData, setTableData] = useState([]);

    const handleNumberIncrease = () => {
        const newNumber = Math.floor(Math.random() * 100) + 1;
        const newRow = [newNumber, newNumber, newNumber, newNumber, newNumber];
        setTableData([...tableData, newRow]);
    };

    const handleRowDelete = (index) => {
        const updatedTableData = [...tableData];
        updatedTableData.splice(index, 1);
        setTableData(updatedTableData);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <Nvbar></Nvbar> */}
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
                                height: '20px',
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
                            <ListItemButton sx={{ pl: 4 }}
                                component={Link}
                                to="/Form">
                                <ListItemIcon>
                                    <GoDot />
                                </ListItemIcon>
                                <ListItemText primary="Reserver" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }}
                                component={Link}
                                to="/Reservations">
                                <ListItemIcon>
                                    <GoDot />
                                </ListItemIcon>
                                <ListItemText primary="Mes reservations" />
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

                            <ListItemButton sx={{ pl: 4 }}>
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
                                <ListItemText primary="Tarifs de mise à disposition" />
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
                        <ListItemText primary="Mise a disposition (avec chauffeur)" />
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
                    <div style={{ width: '100%', height: '600px', backgroundColor: 'white', marginTop: '-120px' }}>
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, p: 3, marginTop: 15, }}
                        >
                            <Toolbar />
                            <p style={{
                                fontWeight: 'bold',
                                fontSize: '1.5em',  // Ajustez la taille de la police pour les écrans plus petits
                                textAlign: 'center',
                                margin: 'auto',
                                color: '#234060',
                                marginTop: '-1.5em',
                                padding: '0.5em',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                                overflowWrap: 'break-word',
                                wordWrap: 'break-word',
                                hyphens: 'auto',
                                '@media only screen and (max-width: 412px) and (max-height: 883px)': {
                                    fontSize: '1.2em',  // Ajustez la taille de la police pour les écrans de taille spécifique
                                    marginTop: '-1.2em',
                                    padding: '0.3em',  // Ajustez le remplissage pour les écrans de taille spécifique
                                },
                            }}>
                                <strong>LISTE DES TARIFS DE MISE A DISPOSITION</strong>
                            </p>

                            <div style={{ width: '20px' }}></div>


                            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '200px',
                                        height: '50px',
                                        backgroundColor: '#F2B90C',
                                        borderRadius: '10px',
                                        color: 'black',
                                        gridColumn: '2',
                                        fontSize: '18px',
                                        justifySelf: 'end', // Aligner le bouton à droite
                                        cursor: 'pointer',
                                        boxShadow: isButtonClicked ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                        transition: 'box-shadow 0.3s ease-in-out', // Ajout d'une transition pour l'effet
                                        flexDirection: 'row-reverse', // Inverser la direction des éléments (icône à droite)
                                    }}
                                    onClick={handleButtonClick}
                                >
                                    <span style={{ marginRight: '10px' }}>
                                        <FaEuroSign />
                                    </span>
                                    Montant à payer:
                                </button>
                            </div> */}

                            <div>

                                <button style={{ backgroundColor: 'Highlight', color: 'white', borderRadius: '20px', padding: '8px' }} onClick={handleNumberIncrease}>Augmenter le nombre</button>

                                <div style={{ height: '20px' }}></div>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Pays</th>
                                            <th>Aéroport</th>
                                            <th>Ville</th>
                                            <th>Gamme</th>
                                            <th>Prix fournisseur</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((row, index) => (
                                            <tr key={index}>
                                                {row.map((number, columnIndex) => (
                                                    <td key={columnIndex}>{number}</td>
                                                ))}
                                                <td>
                                                    <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '20px', padding: '8px' }}>
                                                        Réserver
                                                    </button>
                                                </td>
                                                {/* <td>
                                                    <button style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '20px', padding: '8px' }}>
                                                        Aller-retour
                                                    </button>
                                                </td>
                                                <td>
                                                    <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '20px', padding: '8px' }}
                                                        onClick={() => handleRowDelete(index)}>Supprimer </button>
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Box>
                    </div>
                </div>
            </Main>
        </Box>
    );
}
