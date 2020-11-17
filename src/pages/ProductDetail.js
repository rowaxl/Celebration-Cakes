import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CircularProgress,
  Button,
  Snackbar,
} from '@material-ui/core'
import { Rating, Alert } from '@material-ui/lab'

import Product1 from '../images/chocolate-hazelnut.jpg'
import Product2 from '../images/double-chocolate.jpg'
import Product3 from '../images/honey-lavender.jpg'
import Product4 from '../images/vancouver-fog.jpg'
import Product5 from '../images/lemon-vanilla.jpg'
import Product6 from '../images/vanilla-caramel.jpg'
import Product7 from '../images/macarons-banner.jpg'

const products = [
  {
    name: 'Chocolate Hazelnut Cake',
    price: 12.45,
    img: Product1,
    rate: 3.5,
    description: 'Flavorful chocolate coating cakes with local hazelnuts.',
  },
  {
    name: 'Double Chocolate Cake',
    price: 17.50,
    img: Product2,
    rate: 4.5,
    description: 'Our best chocolate sponge with dark chocolate sauce.'
  },
  {
    name: 'Honey Lavender Cake',
    price: 14.60,
    img: Product3,
    rate: 3,
    description: 'Canadian honey cake with lavender flavor.'
  },
  {
    name: 'Vancouver Fog Cake',
    price: 20.50,
    img: Product4,
    rate: 2.5,
    description: 'Our original cakes with rich cream cheese and special sauce.'
  },
  {
    name: 'Lemon Vanilla Cake',
    price: 15.20,
    img: Product5,
    rate: 3.0,
    description: 'Flavorful lemon sauced cheese with vanilla flavor.',
  },
  {
    name: 'Vanilla Caramel Cake',
    price: 17.25,
    img: Product6,
    rate: 4.5,
    description: 'Flavorful vanilla cream and rich caramel coating.',
  },
  {
    name: 'Macaron Set',
    price: 21.20,
    img: Product7,
    rate: 5.0,
    description: 'Best gift in our store'
  },
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
  },
  cardMedia: {
    height: 700,
  },
}))

const ProductDetail = () => {
  const styles = useStyles()
  const location = useLocation()
  const history = useHistory()

  const [product, setProduct] = useState(null)
  const [rating, setRating] = useState(0)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    const { productIndex } = location.state

    if (!productIndex) {
      setProduct(-1)
    } else {
      setProduct(products[productIndex])
      setRating(products[productIndex].rate)
    }
  }, [location])

  const handleCloseSnackbar = (e, reason) => {
    if (reason === 'clickaway') return

    setOpenSnackbar(false)
  }

  if (product === -1) {
    return (
      <Layout>
        <Typography className={styles.errorMessage}>
          Invalid Product ID.
        </Typography>

        <Button color="secondary" onClick={() => { history.goBack() }}>
          Go Back
        </Button>
      </Layout>
    )
  }

  return (
    <Layout>
      { !product
        ? <CircularProgress />
        : <Card className={styles.cardRoot}>
          <CardMedia
            className={styles.cardMedia}
            image={product.img}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              {product.description}
            </Typography>
            <Typography variant="subtitle2" color="textPrimary" component="p">
              $ {product.price.toFixed(2)}
            </Typography>
            
            <Rating
              name={product.name + '-rate'}
              value={rating}
              onChange={(e, newValue) => {
                setRating(newValue)
              }}
              precision={0.5}
            />
          </CardContent>

          <CardActions>
            <Button color="secondary" onClick={() => { history.goBack() }}>
              Back
            </Button>
            <Button color="primary" onClick={() => { setOpenSnackbar(true) }}>
              Checkout
            </Button>
          </CardActions>

          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success">
              Success to Checkout!
            </Alert>
          </Snackbar>
        </Card>
      }
    </Layout>
  )
}

export default ProductDetail