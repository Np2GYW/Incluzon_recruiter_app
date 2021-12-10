import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/images/incluzon.webp'
import { Navbar, Container,Nav,Image } from 'react-bootstrap'
import {Link } from "react-router-dom";


const Header = () =>{
    return(
        <>
        <div className={styles.header}>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar_container}>
            <Container>
            <Navbar.Brand href="#"><Image src={logo} fluid /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={styles.nav_bx}>
                <Nav className={styles.nav_bar}>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>What we Do</Link>
                    <Link to='/'>Our Partners</Link>
                    <Link to='/'>Request a Demo</Link>
                    <Link to='/'>Blogs</Link>
                    <Link to='/' className={styles.login_link}>Login/Signup</Link>
                </Nav>
                <Nav>
                <Nav.Link href="#" className={styles.download_btn}>Download our app</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        </>
    )

}
export default Header