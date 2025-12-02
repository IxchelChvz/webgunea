import './App.css'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Contactos</Button>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default App
