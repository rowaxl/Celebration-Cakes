import React from 'react'
import {
  Container,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Nav from './Nav'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'block',
    paddingLeft: 15,
    width: 450,
    height: 50,
    lineHeight: '50px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  },
  container: {
    marginTop: 10,
    height: 'calc(100vh - 50px)',

    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 50px - 60px)',
      height: '100%',
      paddingBottom: 60,
    }
  }
}))

const Layout = ({ children }) => {
  const styles = useStyles()

  return (
    <div>
      <Typography className={styles.title} variant="h4" component="span">
        Celebration Cakes
      </Typography>

      <Nav />

      <Container className={styles.container}>
        {children}
      </Container>
    </div>
  )
}

export default Layout