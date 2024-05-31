import React from 'react'
import Button from './Button'

function Banner(props) {
    return (
        <section className='section-one'>
            <div className='container'>
                <h1>{props.bannerTitle}</h1>
                <p>{props.bannerContent}</p>
            </div>
            <div className='button-wrapper'>
                <Button classProp="primary" textProp="Learn More"></Button>
                <Button classProp="secondary" textProp="Get Started"></Button>
            </div>
        </section>
    )
}

export default Banner