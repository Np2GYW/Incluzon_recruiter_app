import React from 'react'
import styles from './home.module.css'
import { Container,Row,Col,Image,Button,Card,Form } from 'react-bootstrap'
import Contact_logo from '../../assets/images/contact_logo_img.PNG'

const Contact = () => {
    return (
        <div>
            <Container>
                <div className={styles.contact_us}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.contact_bx}>
                                <Image src={Contact_logo} fluid />
                                <p>Provoking line for recruiters, they don't have to go anywhere else</p>
                                <Button className={`${styles.ctm_btn} ${styles.contact_us_btn}`}>Contact us</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className={styles.contact_form}>
                <div className={styles.blue_bx}>
                    <Container>
                        <Row>
                            <Col lg="4">
                                <div className={styles.form_left_bx}>
                                    <p>Creative Content related to contact form like this!!</p>
                                </div>
                            </Col>
                            <Col lg="8">
                                <Card className={styles.form_right_bx}>
                                    <Card.Body>
                                        <Card.Title className={styles.form_h}>Request a demo</Card.Title>
                                        <Form className={styles.ctm_contact_form}>
                                            <Form.Group className="mb-3" controlId="fullName">
                                                <Form.Control type="text" placeholder="Full Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="mobileNumber">
                                                <Form.Control type="number" placeholder="Mobile Number" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="textArea">
                                                <Form.Control as="textarea" rows={3} placeholder='Any Brief' />
                                            </Form.Group>
                                            <Button className={`ctm_btn btn_green ${styles.btn_right}`} variant="primary" type="submit">
                                                Contact us
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container> 
                </div>       
            </div>            
        </div>
    )
}

export default Contact
