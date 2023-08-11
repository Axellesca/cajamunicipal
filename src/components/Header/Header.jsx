import { Box } from '@mui/material';
import Navbar from './Navbar';

export const Header = () => {
  return (
    <Box bgcolor={'#12BC8E'} sx={{ p: '18px' }}>
      <Box display="flex" justifyContent="space-evenly">
        <img src="/logosf.png" alt="Logo Santa Fe,AR" width="250px" />
        <Navbar />
      </Box>
    </Box>
  );
};
