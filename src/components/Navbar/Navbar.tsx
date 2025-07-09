import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Typography,
  useScrollTrigger,
  Slide
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.css";
import Link from "next/link";
import { ReactElement, cloneElement } from "react";

interface Props {
  window?: () => Window;
  children: ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Toolbar sx={{ minHeight: '70px' }}>
          <IconButton 
            size="large" 
            edge="start" 
            color="inherit" 
            aria-label="logo" 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              '&:hover': {
                transform: 'rotate(15deg)',
                transition: 'transform 0.3s ease'
              }
            }}
          >
            <DirectionsCarIcon sx={{ fontSize: 32 }} />
          </IconButton>
          
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              flexGrow: 0.5, 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #ffffff, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '-0.02em'
            }}
          >
            Scuderia
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', gap: 1 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button 
                className='nav-button' 
                sx={{ 
                  fontWeight: 600, 
                  mx: 1,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.5s'
                  },
                  '&:hover:before': {
                    left: '100%'
                  }
                }}
              >
                Accueil
              </Button>
            </Link>
            
            <Link href="/appointments" style={{ textDecoration: 'none' }}>
              <Button 
                className='nav-button' 
                sx={{ 
                  fontWeight: 600, 
                  mx: 1,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Rendez-vous
              </Button>
            </Link>
            
            <Link href="/cars" style={{ textDecoration: 'none' }}>
              <Button 
                className='nav-button' 
                sx={{ 
                  fontWeight: 600, 
                  mx: 1,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Véhicules
              </Button>
            </Link>
            
            <Link href="/carSearch" style={{ textDecoration: 'none' }}>
              <Button 
                className='nav-button' 
                sx={{ 
                  fontWeight: 600, 
                  mx: 1,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Recherche
              </Button>
            </Link>
          </Box>
          
          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto', alignItems: 'center' }}>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ffffff, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mr: 2
              }}
            >
              Scuderia
            </Typography>
            <IconButton 
              size="large" 
              aria-label="menu" 
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;