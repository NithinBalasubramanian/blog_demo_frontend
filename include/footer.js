const Footer = () => {

    let date = new Date();

    let Year  = date.getFullYear();

    return(
        <footer>
          <div className="footer_container">
           
            <p className="copyCont">{ Year } - &copy; BLOG || All Right Reserved  <br/>
              </p>
          </div>
        </footer>
    )
}

export default Footer;
