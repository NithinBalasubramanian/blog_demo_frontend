import React from 'react'
import Slider from "react-slick";
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

// slick StyleSheet

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlide = ({ data }) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }],
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    }

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return(
        <>
            <div className="col-md-12 mb-3">
                <Slider {...settings}>
                    { data.map((itm,d_k) => {
                        return(
                            <div className="card_top_sub_home slide_Cart" key={ d_k }>
                                <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                    <a>
                                        <p className="category">{ itm.category }</p>
                                        <h2>{ itm.title }</h2>
                                        <div className="byAuth">
                                            - by {itm.auther} 
                                            <small>{ moment(itm.createdOn).fromNow() }</small>
                                        </div>
                                        {/* <img src={itm.imgUrl} loading="lazy"  alt={ itm.title } width="100%"  />  */}
                                        <Image
                                            loader={myLoader}
                                            src= {itm.imgUrl}
                                            alt= { itm.title }
                                            width={ 1000 }
                                            height={500}
                                            className="images"
                                        />
                                    </a>
                                </Link>
                            </div>    
                        )
                    })}
                </Slider>
            </div>
        </>
    )

}

export default HomeSlide