import React from 'react'
import "./style.css"
import IMAGES from '../../images/Index'
import "../../asset/main/GlobalStyle.css"

export const Index = () => {
    return (
        <div>
            <div className="main">
                <h1>Mian</h1>
                <img src={IMAGES.imgOne} alt="" />
                <img src={IMAGES.imgThree} alt="" />

            </div>

        </div>
    )
}
