import React from 'react'
import styles from './footer.module.css'
import { Container,Row,Col,Image } from 'react-bootstrap'
import logo from '../../assets/images/incluzon.webp'
import apple from '../../assets/images/apple_store.PNG'
import google from '../../assets/images/google_store.PNG'
import { style } from 'dom-helpers'
import {Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF,FaTwitter } from 'react-icons/fa'

const Footer = () =>{
    return(
        <>
        <div className={styles.footer_name}>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className={styles.footer_content_bx}>
                        <Image src={logo} fluid className={styles.footer_logo} />
                        <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimipsam voluptatem quia voluptas sit</p>

                        <p><a href="#">info@incluzon.com</a></p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={styles.footer_content_bx}>
                        <div className={styles.footer_heading}>
                            Our Services
                        </div>
                        <ul className={styles.footer_menus}>
                            <li><a href="">About Us</a></li>
                            <li><a href="">What we do</a></li>
                            <li><a href="">Request a demo</a></li>
                            <li><a href="">Our Partners</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className={`${styles.footer_content_bx} ${styles.right_footer_menus}`}>
                        <div className={styles.other_links_bx}>
                            <div className={styles.footer_heading}>
                                Download the Incluzon Mobile App
                            </div>
                            <div className={styles.store_images}>
                                <Image src={apple} fluid />
                                <Image src={google} fluid />
                            </div>
                        </div>
                        <div className={styles.social_icon}>
                            <p>Follow us on :</p>
                            <ul>
                                <li><Link to=""><FaLinkedinIn/></Link></li>
                                <li><Link to=""><FaFacebookF/></Link></li>
                                <li><Link to=""><FaTwitter/></Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className={styles.footer_bottom}>
                        <p>copyright @Incluzon.com</p>
                        <p>www.incluzon.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )

}
export default Footer