import React from 'react'

const Image = ({ className, imgClass, src }) => {
    return (
        <picture className={className} >
            <img src={src} className={imgClass} loading="lazy" alt='' />
        </picture>
    );
}

export default Image