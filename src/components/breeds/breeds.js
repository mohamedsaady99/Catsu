import React from 'react'
import { Card, Col, Row } from 'antd';
import './breeds.css'
import abyssinian_cat from '../../assets/images/Abyssinians-Cats.jpg'
import savannah from '../../assets/images/Savannah_Cat.jpg'
import ragdoll from '../../assets/images/Ragdoll__cat.jpg'
import Persian from '../../assets/images/persian_cat.jpg'

const { Meta } = Card;

function Breeds() {

    return (
        <div className='breeds' id='breeds'>
            <h2>CAT BREEDS</h2>
            <Row gutter={24}>
                <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Persian  cat"
                                src={Persian}
                            />
                        }
                    >
                        <Meta
                            title="Persian "
                            description="The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the Persian Longhair in English-speaking countries."
                        />
                        <a href='#1' >Read more</a>
                    </Card>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="abyssinian cat"
                                src={abyssinian_cat}
                            />
                        }
                    >
                        <Meta
                            title="Abyssinian"
                            description="the Abyssinian cat bears a close resemblance to ancient Egyptian cat statues. Rich, coats in exotic shades of gold and cinnamon combine with large, expressive eyes."
                        />
                        <a href='#1' >Read more</a>
                    </Card>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Ragdoll Curl  cat"
                                src={ragdoll}
                            />
                        }
                    >
                        <Meta
                            title="Ragdoll Curl"
                            description="The Ragdoll is a cat breed with a color point coat and blue eyes. Its form is large and muscular and its coat is silky soft and semi-longhair.Ragdolls were developed in the 1960s. . "
                        />
                        <a href='#1' >Read more</a>
                    </Card>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="Savannah  cat"
                                src={savannah}
                            />
                        }
                    >
                        <Meta
                            title="Savannah"
                            description="The Savannah cat is the largest of the domestic cat breeds. A Savannah cat is a cross between a domestic cat and a serval, a medium-sized, large-eared wild African cat."
                        />
                        <a href='#1' >Read more</a>
                    </Card>
                </Col>
            </Row>
            <a href='#1' className='show-more'>Show More</a>
        </div>
    )
}

export default Breeds



