import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Layout from '../components/Layout'
import BannerImage from '../images/main-banner.jpg'
import BakeryImage from '../images/bakery.jpeg'


const useStyles = makeStyles((theme) => ({
  cardRoot: {
    marginTop: 24,
    maxWidth: 991,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardMedia: {
    height: 230,
    backgroundPosition: 'bottom !important',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  }
}))


const About = () => {
  const styles = useStyles()

  return (
    <Layout>

      <Card className={styles.cardRoot}>
        <CardMedia
          className={styles.cardMedia}
          image={BannerImage}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About Us
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Bakery based on Cambie st, Vancouver.
            Delivering delight with sweets is our mission.
          </Typography>
        </CardContent>
      </Card>

      <Card className={styles.cardRoot}>
        <CardMedia
          className={styles.cardMedia}
          image={BakeryImage}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Location &amp; Working Hour
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            99 Cambie Street, Vancouver BC
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Monday ~ Sunday
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            09:00 ~ 16:00
          </Typography>
        </CardContent>
      </Card>

      <Card className={styles.cardRoot}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            License
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Images
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Soirette:
              <a className={styles.link} href="https://www.soirette.com/collections/cakes" target="_blank" rel="noreferrer">
                https://www.soirette.com/collections/cakes
              </a>
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Unsplash:
              <a className={styles.link} href="https://unsplash.com/photos/tykUDbeX0Gs" target="_blank" rel="noreferrer">
                https://unsplash.com/photos/tykUDbeX0Gs
              </a>
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default About