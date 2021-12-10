import React from 'react'
import styles from './home.module.css'
import { Container,Row,Col,Image,Button } from 'react-bootstrap'
import banner_image from '../../assets/images/banner_img.PNG'
import mobile_image from '../../assets/images/mobile_download_img.PNG'
// import banner_image from '../../assets/images/'

const Banner = () => {
    return (
        <div>
            <Container>
                <div className={styles.banner_sec}>
                    <Row>
                        <Col lg={6}>
                            <Image src={banner_image} fluid />
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.banner_right_bx} ${styles.theme_text_bx}`}>
                                <h3>This section is introduction about the Incluzon and little brief about this website</h3>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                <Button className="ctm_btn btn_green">Contact us</Button>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.download_sec}>
                    <div className={styles.download_bg}></div>
                    <Row>
                        <Col lg={6}>
                            <div className={`${styles.banner_right_bx} ${styles.theme_text_bx}`}>
                                <h3>This section is introduction about the Incluzon and little brief about this website</h3>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                <Button className="ctm_btn btn_green">Contact us</Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Image src={mobile_image} fluid />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Banner
