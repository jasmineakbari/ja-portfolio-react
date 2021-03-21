import React from 'react';
import bannerImg from "../../assets/images/banner.PNG";

function Banner() {
    return(
        <section>
            <img src={bannerImg} style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default Banner;