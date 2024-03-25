import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";



export default function Navbar(){
    return (<AppBar position="static">
    <Toolbar>
      <Typography to="/recipes" variant="h6" component={Link} color="inherit"  sx={{ flexGrow: 1 }}>
        Recipe App
      </Typography>
      <Button component={Link} variant="contained" to="/add-recipe" color="primary">ADD RECIPE</Button>
    </Toolbar>
  </AppBar>
  );
}