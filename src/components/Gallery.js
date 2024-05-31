import React from 'react'

function Gallery(props) {
    return (
        <section className='section-two'>
            <div className='container'>
                <h2>{props.galleryTitle}</h2>
                <div className='img-flex'>
                    {props.images.map((image) => (
                        <div key={image.id} className='img-container'>
                            <img src={image.src} alt={image.alt}></img>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery