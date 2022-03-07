import React from 'react'
import { Card, Col, Row } from 'antd';
import './litter.css'
import litter_box1 from '../../assets/images/cat-litter-box1.jpg'
import litter_box2 from '../../assets/images/cat-litter-box2.jpg'
import litter_box3 from '../../assets/images/cat-litter-box3.jpg'
import litter_box4 from '../../assets/images/cat-litter-box4.jpg'
import litter_box5 from '../../assets/images/cat-litter-box5.jpg'
const { Meta } = Card;

function Litter() {

    return (
        <div className='litters' id="litter">
            <h2>LITTER BOX</h2>
            <Row gutter={{ xs: 0, sm: 16, md: 120, lg: 222 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Sifting Litter Boxes"
                                src={litter_box1}
                            />
                        }
                    >
                        <Meta
                            title="Sifting Litter Boxes"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Automatic Litter Boxes cat"
                                src={litter_box5}
                            />
                        }
                    >
                        <Meta
                            title="Automatic Litter Boxes"
                        />
                    </Card>
                </Col>
            </Row>
            <Row >
                <Col className="center-card"  >
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="High Sided Litter Boxes  cat"
                                src={litter_box3}
                            />
                        }
                    >
                        <Meta
                            title="High Sided Litter Boxes"
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={{ xs: 0, sm: 16, md: 120, lg: 222 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Cat Litter For Multiple Cats "
                                src={litter_box4}
                            />
                        }
                    >
                        <Meta
                            title="Litter For Multiple Cats"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Crystal Cat Litter cat"
                                src={litter_box2}
                            />
                        }
                    >
                        <Meta
                            title="Crystal Cat Litter"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Litter



