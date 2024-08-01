import React , { useState  } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/router';

const Navbar = () => {

    let Router = useRouter()

    let [ display_status , setDisplay_status ] = useState(false);
    
    const sidebarStatusHandler = () =>{
        setDisplay_status(!display_status);
    }
    
    return(
      <div className="NavbarMain">
        <div className="NavContainer row">
            <div className="navHead col-md-4 ">
                <div className="navHeadLogo">
                       <h1 className="logoP" onClick={ () => { Router.push('/')}}>Blog</h1>
                </div>
                <div className="navHeadMenu">
                    <BiMenuAltLeft onClick={ sidebarStatusHandler }  size="40px" color="#fff" style={{margin:"10px"}}/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="NavList">
                    <ul className="NavListMenu">
                        <li><Link href="/" ><a>HOME</a></Link></li>
                        <li><Link href="/Category/News" ><a>NEWS</a></Link></li>
                        <li><Link href="/Category/Tech" ><a>TECH</a></Link></li>
                        <li><Link href="/Category/Automobiles" ><a>AUTOMOBILES</a></Link></li>
                        <li><Link href="/Category/Finance" ><a>FINANCE</a></Link></li>
                        <li><Link href="/Category/Programming" ><a>PROGRAMMING</a></Link></li>
                        <li><Link href="/AddBlog" ><a>NEW BLOG</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={ (display_status) ? 'mobileNav mobOn' : 'mobileNav'}>
            <div className="NavListMob">
                <ul className="NavListMenuMob"  onClick={ sidebarStatusHandler } >
                    <li><Link href="/" ><a>HOME</a></Link></li>
                    <li><Link href="/Category/News" ><a>NEWS</a></Link></li>
                    <li><Link href="/Category/Tech" ><a>TECH</a></Link></li>
                    <li><Link href="/Category/Automobiles" ><a>AUTOMOBILES</a></Link></li>
                    <li><Link href="/Category/Finance" ><a>FINANCE</a></Link></li>
                    <li><Link href="/Category/Programming" ><a>PROGRAMMING</a></Link></li>
                    <li><Link href="/AddBlog" ><a>NEW BLOG</a></Link></li>
                </ul>
            </div>
        </div>
      </div>
      )
}

export default Navbar;
