import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="" alt="Post" />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            laudantium quo recusandae beatae veritatis eos similique cumque,
            omnis delectus. Iusto assumenda nam in, voluptatem dolore quidem
            dolores molestias aspernatur quia.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
