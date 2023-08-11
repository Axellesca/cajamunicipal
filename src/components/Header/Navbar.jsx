import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
// import { Link, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      // sx={{ width: '50%' }}
      sx={{ width: '500px' }}
      color="transparent"
      // color="primary"
      elevation={0}
    >
      <Container maxWidth="xs">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              // justifyContent: 'space-evenly',
              width: '100%',
              color: 'white',
            }}
          >
            <Box>
              <Typography
                variant="h7"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ fontWeight: 'bold' }}
              >
                <a to="/">INICIO</a>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h7"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ fontWeight: 'bold' }}
              >
                <a to="/about">NOTICIAS</a>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h7"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ fontWeight: 'bold' }}
              >
                <a to="/contact">SERVICIOS</a>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h7"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ fontWeight: 'bold' }}
              >
                <a to="/contact">INSTITUCIONAL</a>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
