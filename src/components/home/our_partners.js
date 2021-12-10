import React from 'react'
import styles from './home.module.css'
import { Container,Row,Col,Image,Button } from 'react-bootstrap'
import company_logo_1 from '../../assets/images/company_logo_1.PNG'
import company_logo_2 from '../../assets/images/company_logo_2.PNG'
import company_logo_3 from '../../assets/images/company_logo_3.PNG'
import company_logo_4 from '../../assets/images/company_logo_4.PNG'
import company_logo_5 from '../../assets/images/company_logo_5.PNG'
import company_logo_6 from '../../assets/images/company_logo_6.PNG'
import {Link } from "react-router-dom";
import { FaFacebookF, FaInstagram,FaTwitter,FaPinterestP } from 'react-icons/fa'

const Partners = () => {
    return (
        <div>
            <Container>
                <div className={styles.our_partners_sec}>
                    <Row>
                        <Col lg={12}>
                            <div className={`${styles.partners_txt_bx} ${styles.theme_text_bx}`}>
                                <h3>Our Partners</h3>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                            </div>
                        </Col>                        
                    </Row>
                    <Row className={styles.company_logo_row}>
                    <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_1} fluid />
                            </div>                                                      
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_2} fluid />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_3} fluid /> 
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_4} fluid />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_5} fluid />
                            </div>                            
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_6} fluid />
                            </div>                            
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_2} fluid />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_3} fluid /> 
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_4} fluid />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.company_logo}>
                                <Image src={company_logo_5} fluid />
                            </div>                            
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Partners
