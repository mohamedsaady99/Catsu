import React from 'react'
import { Col, Row } from 'antd';
import './about.css'
import about from '../../assets/images/about.gif'


function About() {

    return (
        <div className='about' id="about">
            <h2>About </h2>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <section>
                        <h3>Catsu CARE CENTER</h3>
                        <p>
                            At  Catsu Care Center we believe in a world in which each cat’s life
                            experience will be as good as it can be. We do this by providing cat owners,
                            veterinary professionals and those that live and work with cats with
                            the resources, support and advice they need to care better for their cats.
                        </p>
                    </section>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className='about-img'>
                        <img alt="about" src={about} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About