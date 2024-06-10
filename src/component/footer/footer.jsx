import "./footer.css";

const Footer = () => {
    return (
        <>
            
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-column footer-column-large">
                            <h6>About</h6>
                            <p className="text-justify">
                                <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
                                help the upcoming programmers with the code. Scanfcode focuses on
                                providing the most efficient code or snippets as the code wants to
                                be simple. We will help programmers build up concepts in different
                                programming languages that include C, C++, Java, HTML, CSS,
                                Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                            </p>
                        </div>
                        <div className="footer-column footer-column-small">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                            </ul>
                        </div>
                        <div className="footer-column footer-column-small">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                     
                    </div>
                    <hr />
                </div>
                <div className="footer-bottom-container">
                    <div className="footer-row">
                        <div className="footer-bottom-column footer-bottom-column-large">
                            <p className="copyright-text">
                                Copyright © 2017 All Rights Reserved by
                                <a href="#">FEC</a>.
                            </p>
                        </div>
                        <div className="footer-bottom-column footer-bottom-column-small">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
