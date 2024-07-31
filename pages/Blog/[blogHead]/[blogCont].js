import Head from 'next/head'
import React , { useState , useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link'
import axios from '../../../component/apiInstance/Instance_API';
import moment from 'moment';
import ReactPlayer from 'react-player';
import TweetEmbed from 'react-tweet-embed';
import Gist from "react-gist";

import { FaWhatsapp , FaInstagram , FaTwitter , FaFacebook } from 'react-icons/fa'
import { AiOutlineMail  } from 'react-icons/ai'


import { useRouter } from 'next/router'
import MetaComponent from '../../../component/MetaComponent.js/MetaComponent';

const BlogHead = (props) => {

    const router = useRouter();

    let { blogHead , blogCont } = router.query;
    const [ recent , setRecent ] = useState([]);

    const FetchdataNot = () => {
        axios.get('/recentCategory/'+blogHead+'/'+blogCont)
        .then( res => {
            setRecent(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
            FetchdataNot();
          }, 2000);
    }, [blogCont]) 

    let url = process.env.NEXT_PUBLIC_BASE_URL;

    return(
        <>
        <MetaComponent />


        <div className={(!props.data) ? "preLoader" : "preNone" } >
            <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">Fetching</div>
                </div>
            </div>
        </div>
        <div className="pageContainer">
            { props.data &&
            <>
              <div className="blogContent">
                  { props.data.map((itm,k) => { 
                      return(
                          <>

                            <NextSeo
                                title= {itm.title}
                                description={itm.preheading} 
                                canonical={ process.env.NEXT_PUBLIC_BASE_URL + '/'+blogHead+'/'+blogCont } 
                                openGraph={{
                                    url:  process.env.NEXT_PUBLIC_BASE_URL + '/'+blogHead+'/'+blogCont,
                                    title:  `Blog - ${itm.title}`,
                                    description: itm.preheading,
                                    images: [
                                    ],
                                    site_name: 'Blog',
                                }}
                                twitter={{
                                    handle: '@handle',
                                    site: '@site',
                                    cardType: 'summary_large_image',
                                }}
                            />


                          <div className="col-md-12 blogOn">

                                <div className="share">
                                    <a href={ `https://api.whatsapp.com/send?text=${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Whatsapp">
                                        <FaWhatsapp style={{ fontSize : '25px', margin : '15px 25px' , color : '#25D366'}} />
                                    </a>
                                    <a href={ `https://www.facebook.com/sharer/sharer.php?u=${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Facebook">
                                        <FaFacebook style={{ fontSize : '25px', margin : '15px 25px' , color : '#4267B2'}} />
                                    </a>
                                    <a href={ `mailto:?subject=Checkout this blog at Blogs&body=${itm.title}  ${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Mail">
                                        <AiOutlineMail style={{ fontSize : '25px', margin : '15px 25px' , color : '#FF5A5F'}} />
                                    </a>
                                </div>

                              <div className="blogContView">
                              <div className="category">
                                  { itm.category }
                              </div>
                               <div className="blogTitle">
                                 <h1>{itm.title}</h1>
                            
                              </div>
                              <div className="preheading">
                                  <p style={ {padding:'10px 0px',margin:'0px'} }>{itm.blogPreview}</p>
                              </div>
                              <div className="byAuth">
                                  - by {itm.auther}  
                              <small>{ moment(itm.createdOn).fromNow() }</small>
                              </div>
                              {/* <img src={itm.filePath} alt="img" width="100%" height="auto" /> */}
                              <img src={itm.imgUrl} loading="lazy" className="blogImgMain" alt={ itm.title } width="100%" height="auto" /> 

                               <div className="contentDisp">
                                  <p className="paraMainCont">{itm.blogBrief}</p>
                                  <div className="paraSubCont" dangerouslySetInnerHTML={{ __html: itm.blogContent }} />

                                    { itm.reference &&
                                        <p className="reference"> Reference : <a href={itm.reference} target="_blank" >{ itm.reference } </a></p>
                                    }
                              </div>
                            </div>
                            </div>
                         </>
                      )
                  }) }
              </div>

              <div className="listBlogViewPage">
                {recent.map((itm,k) => {
                        return (
                            <div className="listBelowCard">
                                <Link href={ `/Blog/${itm.category}/${itm.url}` }  >
                                <a className="listBelowFlex">
                                    <div class="blogListImage">
                                      <img loading="lazy" src={itm.imgUrl} width="100%" height="100%" alt={itm.title}></img>
                                    </div>
                                    <div class="blogListPreCont">
                                      <div className="category">
                                       { itm.category }
                                      </div>
                                      <h3>{itm.title}</h3>
                                      <p>{itm.blogPreview}</p>
                                    </div>
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
      </>
    )
}

export const getServerSideProps = async(context) => {

    // Fetch data from external API

    let {  blogCont } = context.query;

    const res = await axios.get('/view/'+blogCont)
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                })
  
  
    // Pass data to the page via props
    return { 
        props : { 
            data : res
        } 
    }
  }

export default BlogHead



// This gets called on every request

