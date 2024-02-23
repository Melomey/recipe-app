import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, TextField } from "@mui/material";



export default function Recipes() {
    return (
       <Container sx={{my: '2rem'}} maxWidth="sm">
        <TextField
         fullWidth id="outlined-basic" 
         label="Enter a keyword to search recipe and hit Enter" 
         variant="outlined" />

         <Grid sx={{ mt: '1rem'}} container spacing={3}>
         <Grid item x5={4}>
            <Card>
             
              <CardMedia
              sx= {{height: 140}}
              image="https://images.unsplash.com/photo-1708361089093-beef4c4584e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"/>
             
            </Card>
            <CardContent variant="h5">Recipe Name</CardContent>
         </Grid>
         </Grid>
       </Container>
    );
}
