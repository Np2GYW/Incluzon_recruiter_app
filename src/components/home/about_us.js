import React from 'react'
import styles from './home.module.css'
import { Container,Row,Col,Image,Button } from 'react-bootstrap'
import about_image from '../../assets/images/about_us_img.PNG'
import {Link } from "react-router-dom";
import { FaFacebookF, FaInstagram,FaTwitter,FaPinterestP } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <div className={styles.about_section}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Image src={about_image} fluid />
                    </Col>
                    <Col lg={6}>
                        <div className={styles.about_right_bx}>
                            <div className={`${styles.about_txt_bx} ${styles.theme_text_bx}`}>
                                <h3>Creative two line heading for About us section</h3>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                            </div>
                            
                            <div className={styles.about_social_links}>
                                <ul>
                                    <li><Link to="/"><FaFacebookF/></Link></li>
                                    <li><Link to="/"><FaTwitter/></Link></li>
                                    <li><Link to="/"><FaInstagram/></Link></li>
                                    <li><Link to="/"><FaPinterestP/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About
