import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbarMenu: {
    gap: theme.spacing(3),
  }
}));

export default function Navbar() {
  const styles = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={styles.toolbarMenu}>
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/trending" className="navbar__link">Trending</Link>
      </Toolbar>
    </AppBar>

    // <nav className="navbar">
    //   <div className="navbar__menu container">
    //     <Link to="/" className="navbar__link">Home</Link>
    //     <Link to="/trending" className="navbar__link">Trending</Link>
    //   </div>
    // </nav>
  )
}
