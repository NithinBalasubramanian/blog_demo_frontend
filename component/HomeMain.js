import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import moment from 'moment';
import Image from 'next/image'

// components

import HomeSlide from './HomeSlide';
import MetaComponent from './MetaComponent.js/MetaComponent';

const HomeMain = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
      

    return(
        <>
           <MetaComponent />
            <div className="contMain">
                <div className="homeListContainer">
                    <div className="row">

                    { props.datas &&
                    <>
                        {/* slider part start*/}
                        {props.datas.length > 3 && (
                         <HomeSlide data={ props.datas } />
                        )}
                        {/* slider part end*/}

                        <div className='col-md-2'></div>
                        
                        <div className="col-md-8">
                        { props.datas.map((itm,k) => {
                                    return(
                                        <div className="card_top_home">
                                            <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                            <a>
                                                <div className="category">{ itm.category }</div>
                                                <h2>{ itm.title }</h2>
                                                <div className="byAuth">
                                                    - by {itm.auther}
                                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                                </div>
                                                <Image
                                                loader={myLoader}
                                                src= {itm.imgUrl}
                                                alt= { itm.title }
                                                width={ 1200 }
                                                height={500}
                                                className="images"
                                                />
                                                {/* <img src={itm.imgUrl} loading="lazy" alt={ itm.title } width="100%"  />  */}
                                                <p>{ itm.blogPreview } </p>
                                            </a>  
                                            </Link>
                                        </div>    
                                )
                            })
                            }
                        </div>
                        </>
                        }
                        

                    </div>
                </div>
            </div>
        </>
    )
}



export default HomeMain
