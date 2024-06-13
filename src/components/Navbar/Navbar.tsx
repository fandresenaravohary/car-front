import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Typography,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <DirectionsCarIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5, fontSize: 30, fontWeight: 'bold', display: { xs: 'none', md: 'flex' } }}>
                    Scuderia
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                    <Link href="/">
                        <Button className='button' sx={{ fontWeight: 'bold', mx: 2 }}>Home</Button>
                    </Link>
                    <Link href="/appointments">
                        <Button className='button' sx={{ fontWeight: 'bold', mx: 2 }}>Appointments</Button>
                    </Link>
                    <Link href="/Cars">
                        <Button className='button' sx={{ fontWeight: 'bold', mx: 2 }}>Cars</Button>
                    </Link>
                    <Link href="CarSearch">
                        <Button className='button' sx={{ fontWeight: 'bold', mx: 2 }}>Car Search</Button>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
                    <IconButton size="large" aria-label="logo" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ paddingTop: 0.5, flexGrow: 0.5, fontSize: 25, fontWeight: 'bold', ml: 2 }}>
                        Scuderia
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
  );
};

export default Navbar;
