import React from 'react'
import Head from 'next/head'

const MetaComponent = () => {
    return(
        <>
            <Head>
                <title>Blog - The collection of Tech for Techies</title>
                <meta name="description" content="Blog is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>
                <link rel="canonical" href= { process.env.NEXT_PUBLIC_BASE_URL  }  />
                <link rel="icon" href="/favicon.ico"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta charset="utf-8" />
                <meta property="og:url" content={ process.env.NEXT_PUBLIC_BASE_URL  } />
                <meta property="og:site_name" content={ process.env.NEXT_PUBLIC_BASE_URLMAIN  }/>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - The Collections of Tech for Techies"/>
                <meta property="og:description" content="Blog is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>

                <meta property="twitter:url" content={ process.env.NEXT_PUBLIC_BASE_URL  }  />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Blog - The Collections of Tech for Techies" />
                <meta property="twitter:description" content="Blog is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you." />
                <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
                <meta name="theme-color" content="#000000"/>
                <meta name="robots" content="index,follow"/>
                <meta name="author" content="Blog "/>
                <meta name="publisher" content="Blog "/>
                <meta name="owner" content="Blog"/>
                <meta name="keywords" content="Blog,technews,latest technology, technology,Marketing , tesla , Programming ,Hyundai ,Jaguar ,Facebook ,Cybersecurity ,Remote ,Cloud crypto,bitcoin,Microsoft ,google,apple,blockchain,Ethereum ,youtube , Nithin balasubramanian , rajan karan ,AlphaFold , DeepMind , Artificial Intelligence trends , Martech"/>
                <meta name="facebook-domain-verification" content="q5r5o0qa0x8ohoxlhfp1xf5itrgkm7" />
                        
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />  
            </Head>
        </>
    )
}

export default MetaComponent