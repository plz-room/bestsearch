
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import { color } from '@mui/system';
function Header() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs>
          <Box sx={{
            borderBottom: '1px solid gray',
          }}>
            <Link to={'/index'} style={{ textDecoration:'none',color: 'black'}}>
            
                <Box component="span" sx={{ 
                fontWeight:'bold',
                margin: '0 0 0 37px',
                lineHeight: '40px',
                }}>
                Best
                </Box>
                <Box component="span" sx={{ }}>
                Serrch
                </Box>
            </Link>
          </Box>
          {/* <Item>xs</Item> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
