
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, TextField } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useState, useEffect } from "react";


export default function Recipes() {
   const [recipes, setRecipes] = useState([]);
   const [searchItem,setSearchItem] = useState("");

   const searchRecipes = () => {
      //prepare url
      const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
      url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
      url.searchParams.append('query', searchItem); //add query parameter
      // fetch recipes from API
      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            // Update the recipes state
            setRecipes(data.results);
            // console.log(data);
         })
         .catch((error) => {
            console.log(error);
         })
   }

   useEffect(searchRecipes, []);

   return (
      <Container sx={{ my: '2rem' }} >
         <TextField
            fullWidth id="outlined-basic"
            label="Enter a keyword to search recipe and hit Enter"
            variant="outlined" 
            value={searchItem}
            onChange={(event) => setSearchItem(event.target.value)}
            onKeyDown={event => event.key === 'Enter' && searchRecipes()}/>

         <Grid sx={{ mt: '1rem' }} container spacing={3}>
            {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
         </Grid>
      </Container>
   );
}
