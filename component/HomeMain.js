import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from './apiInstance/Instance_API';
import moment from 'moment';
import Image from 'next/image'

// components

import HomeSlide from './HomeSlide';
import MetaComponent from './MetaComponent.js/MetaComponent';

const HomeMain = (props) => {


    let [ Listdata , setListdata ] = useState([]);
  
    let [ FetchStatus , setFetchStatus ] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // fetchData();
    },[])

    const fetchData =  async () => {

        await axios.get('/homeTopFetch')
       .then((res) => {
             setListdata(res.data);
             setFetchStatus(false);
             fetchMid();
         })
         .catch((error) => {
             console.log(error);
         })

    }

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
      

    return(
        <>
           <MetaComponent />

            <div className={(FetchStatus) ? "preLoader" : "preNone" } >
                <div className="wrap">
                    <div className="loading">
                        <div className="bounceball"></div>
                        <div className="text">Fetching</div>
                    </div>
                </div>
            </div>

            <div className="contMain">
                <div className="homeListContainer">
                    <div className="row">

                    { props.datas &&
                    <>
                        {/* slider part start*/}
                        <HomeSlide data={ props.datas } />
                        {/* slider part end*/}
                        
                        <div className="col-md-8">
                        { props.datas.map((itm,k) => {
                                if(k === 3 || k === 4  ){
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
                                                <p>{ itm.preheading } </p>
                                            </a>  
                                            </Link>
                                        </div>    
                                )
                                }
                            })
                            }
                        </div>
                        <div className="col-md-4">
                        { props.datas.map((itm,k) => {
                                if(k > 4 && k < 9 ){
                                    return(
                                        <div className="card_top_sub_home">
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
                                                        width={ 800 }
                                                        height={500}
                                                        className="images"
                                                    />
                                            </a>
                                            </Link>
                                        </div>    
                                    )
                                }
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

// This gets called on every request
export const getServerSideProps = (context) => {

    // Fetch data from external API

    // const res = await axios.get('/homeTopFetch')
    //             .then((res) => {
    //                 return res.data;
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             })
  
    // console.log(res);

    // Pass data to the page via props
    return { 
        props : { 
            name : 'nithin'
        } 
    }
  }