// import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeKeyword, saveSource } from '../../redux/reducer/search';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Mainbody() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const { keyword  } = useSelector(state => state.search)

    // const { keyword } = useSelector(state => state.search)
    function handleInput (event) {
        dispatch(changeKeyword(event.target.value))
        dispatch(saveSource(event.target.value))
    }
    function handleClick () {
        history('/search/' + keyword )
    }
    useEffect(() => {
        document.onkeydown = function (e) {
            const theEvent = window.event || e;
            console.log(e)
            const code = theEvent.keyCode || theEvent.which || theEvent.charCode;
            if (code === 13) {
                history('/search/' + keyword )
            }
        }
        return () => {
            document.onkeydown = null
        }
    })
  return (
    <Box
      sx={{
        width: '60%',
        margin: '0 auto',
        maxWidth: '100%',
      }}
    >
      <Box
        component= 'h1'
        sx={{
            
            margin: '100px auto',
            textAlign: 'center',
          }}
      >Search Trends</Box>
      <Box 
        sx={{
            display: 'flex'
        }}
      >
        <TextField onChange={handleInput} size="small" fullWidth label="Search for new products in 961k stores" id="fullWidth" />
      <Button
        size="small"
        variant="outlined"
        onClick={handleClick}
        sx={{
            display: 'block',
            position: 'relative',
            border: '1px solid gray',
            margin: '0 0 0 30px',
            borderRadius: '4px',
            width: '56px',

        }}
      >

          <Search

            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
                
    
            }}
          ></Search>
      </Button>
      </Box>
    </Box>
  );
}

//  withRouter(Mainbody)