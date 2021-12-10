import React from 'react'
import styles from './home.module.css'
import { Container,Row,Col,Image,Button } from 'react-bootstrap'
import goal_img from '../../assets/images/goal_service.PNG'
import impact_img from '../../assets/images/impact_service.PNG'
import team_img from '../../assets/images/team_service.PNG'

const We_do = () => {
    return (
        <div>
            <Container>
                <div className={styles.we_do_section}>
                    <Row>
                        <Col lg={12}>
                            <div className={`${styles.we_do_txt_bx} ${styles.theme_text_bx}`}>
                                <h3>What we do</h3>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.we_do_services}>
                                <Image src={goal_img} fluid />
                                <h5>Goal</h5>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                            </div>                            
                        </Col>
                        <Col lg={4}>
                            <div className={styles.we_do_services}>
                                <Image src={impact_img} fluid />
                                <h5>Impact</h5>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                            </div> 
                        </Col>
                        <Col lg={4}>
                            <div className={styles.we_do_services}>
                                <Image src={team_img} fluid />
                                <h5>Team</h5>
                                <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                            </div> 
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default We_do
