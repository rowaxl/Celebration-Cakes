import React from 'react'
import { Typography } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { makeStyles } from '@material-ui/styles'

import Layout from '../components/Layout'
import Popular1 from '../images/chocolate-hazelnut.jpg'
import Popular2 from '../images/honey-lavender.jpg'
import Popular3 from '../images/lemon-vanilla.jpg'
import Popular4 from '../images/vancouver-fog.jpg'

const useStyles = makeStyles((theme) => ({
  banner: {
    width: '100%',
  },
  sectionTitle: {
    marginTop: 24,
  },
}))

const popularItems = [
  { label: 'Chocolate Hazelnut Cake', src: Popular1 },
  { label: 'Honey Lavender Cake', src: Popular2 },
  { label: 'Lemon Vanila Cake', src: Popular3 },
  { label: 'Vancouver\'s Fog Cake', src: Popular4 },
]

const Home = () => {
  const styles = useStyles()

  const renderPopularItems = () => (
    popularItems.map((item, index) => (
      <div key={index}>
        <img src={item.src} alt={item.label} />
        <p className="legend">{item.label}</p>
      </div>
    ))
  )
  

  return (
    <Layout>

      <Typography className={styles.sectionTitle} variant="h4">
        Welcome to Celebration Cakes!
      </Typography>

      <Typography className={styles.sectionTitle} variant="h5">
        Popular Items
      </Typography>

      <Carousel autoPlay infiniteLoop>
        {renderPopularItems()}
      </Carousel>
    </Layout>
  )
}

export default Home