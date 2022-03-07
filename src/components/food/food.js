import React from 'react'
import { Col, Row } from 'antd';
import './food.css'
import dry_food from '../../assets/images/dry_food.webp'
import wet_food from '../../assets/images/wet_food.jpg'
import wet_food_carton from '../../assets/images/wet_food_carton.png'
import dry_food_carton from '../../assets/images/dry_food_carton.png'

function Food() {

    return (
        <div className='food' id="food">
            <h2>FOOD </h2>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div>
                        <img alt="dry food" src={dry_food} className="food-img" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className='dry-food'>
                        <h3>DRY FOOD </h3>
                        <p>
                            Dry food is its ease, convenience and cost.
                            Millions of cats over the world are fed dry food
                            <span className="caption"><img alt="dry food" src={dry_food_carton} /> </span>
                            (either exclusively or in combination)
                            and can live long healthy lives. Dry food allows for
                            free- feeding and the food can be left out for prolonged periods of time.

                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className='wet-food'>
                        <h3>wet FOOD </h3>
                        <p>
                            Wet food is high in protein, which supports strong muscles.
                            It also helps maintain that muscle mass  through adulthood and
                            <span className="caption"><img alt="dry food" src={wet_food_carton} /> </span>
                            into a cat's senior years
                            A cat's total body weight is comprised of lean body mass (LBM) and fat mass
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div>
                        <img alt="wet food" src={wet_food} className="food-img" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Food



