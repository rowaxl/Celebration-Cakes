import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import Product1 from '../images/chocolate-hazelnut.jpg'
import Product2 from '../images/double-chocolate.jpg'
import Product3 from '../images/honey-lavender.jpg'
import Product4 from '../images/vancouver-fog.jpg'
import Product5 from '../images/lemon-vanilla.jpg'
import Product6 from '../images/vanilla-caramel.jpg'
import Product7 from '../images/macarons-banner.jpg'

const products = [
  { name: 'Chocolate Hazelnut Cake', price: 12.45, img: Product1, rate: 3.5 },
  { name: 'Double Chocolate Cake', price: 17.50, img: Product2, rate: 4.5 },
  { name: 'Honey Lavender Cake', price: 14.60, img: Product3, rate: 3 },
  { name: 'Vancouver Fog Cake', price: 20.50, img: Product4, rate: 2.5 },
  { name: 'Lemon Vanilla Cake', price: 15.20, img: Product5, rate: 3.0 },
  { name: 'Vanilla Caramel Cake', price: 17.25, img: Product6, rate: 4.5 },
  { name: 'Macaron Set', price: 21.20, img: Product7, rate: 5.0 },
]

const useStyles = makeStyles(() => ({
  sectionTitle: {
    marginTop: 24,
  },
  cardRoot: {
    marginTop: 24,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',

    '&:hover': {
      filter: 'brightness(80%) contrast(110%)'
    }
  },
  cardMedia: {
    height: 300,
    backgroundPosition: 'bottom !important',
  },
}))

const Products = () => {
  const styles = useStyles()
  const history = useHistory()

  const handleClickProduct = index => {
    history.push({
      pathname: '/product',
      state: {
        productIndex: index
      }
    })
  }

  const renderProducts = () => (
    products.map((product, index) => (
      <Grid key={product.name} item xs={12} sm={6} md={4}>
        <Card className={styles.cardRoot} onClick={() => handleClickProduct(index)}>
          <CardMedia
            className={styles.cardMedia}
            image={product.img}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              $ {product.price.toFixed(2)}
            </Typography>
            <Rating value={product.rate} readOnly precision={0.5} />
          </CardContent>
        </Card>
      </Grid>
    ))
  )

  return (
    <Layout>
      <Typography className={styles.sectionTitle} variant="h4">
        Products
      </Typography>

      <Grid container spacing={2}>
        {renderProducts()}
      </Grid>
    </Layout>
  )
}

export default Products