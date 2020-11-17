import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import {
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Storefront as StoreIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: 'calc(100vw - 400px)',
    display: 'flex',
    top: 10,
    left: 400,

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  item: {
    width: '33%',
    maxWidth: 400,
    height: 50,
    display: 'flex',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.dark,
    },
    '&.MuiButton-contained a': {
      textDecoration: 'none',
      color: '#fff',
    }
  },
  bottom: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
    },
  }
}))

const links = [
  { to: '/', label: 'Home', icon: <HomeIcon /> },
  { to: '/about', label: 'About', icon: <InfoIcon /> },
  { to: '/products', label: 'Products', icon: <StoreIcon /> },
]

const Nav = () => {
  const history = useHistory()
  const location = useLocation()
  const styles = useStyles()
  const [navValue, setNavValue] = useState(links.findIndex(link => link.to === location.pathname))

  const renderLinks = () => (
    links.map((link) => (
      <Button className={styles.item} variant={link.to === location.pathname ? 'contained' : 'outlined'} color="primary" key={link.to} startIcon={link.icon}>
        <Link to={link.to}>{link.label}</Link>
      </Button>
    ))
  )

  const renderBottomLinks = () => (
    links.map((link) => (
      <BottomNavigationAction
        key={link.to}
        icon={link.icon}
        label={link.label}
      />
    ))
  )

  const handleBottomNav = (_, index) => {
    setNavValue(index)
    history.push(links[index].to)
  }

  return (
    <>
      <nav className={styles.root}>
        {renderLinks()}
      </nav>

      <BottomNavigation
        className={styles.bottom}
        value={navValue}
        onChange={handleBottomNav}
        showLabels
      >
        {renderBottomLinks()}
      </BottomNavigation>
    </>
  )
}

export default Nav