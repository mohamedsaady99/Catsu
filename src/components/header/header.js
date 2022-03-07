import React from 'react'
import './header.css'
import header from '../../assets/images/cat_animation.gif'
import { Button } from 'antd'
function Header() {
    return (
        <div className="header">
            <section className="overlay"></section>
            <div>
                <h1 className="title">Catsu Care Center</h1>
                <p className="description">
                    You're there for your cat.
                    We're here to make it easier.
                    Expert-reviewed, thoroughly-researched guides to help you do the best for the feline in your life.
                </p>
                <Button> Find More</Button>
            </div>
            <div>
                <img src={header} alt="cat" />
            </div>
        </div>
    )
}

export default Header