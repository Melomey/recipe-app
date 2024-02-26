import {Grid, Card, CardMedia, CardContent, Typography} from"@mui/material";

export default function RecipeItem({title, image}) {
    return (
        <Grid item x5={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    title="green iguana"
                    sx={{ height: 140 }}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>

                </CardContent>

            </Card>
        </Grid>
    );
}