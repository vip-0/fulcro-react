import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer">
            <div className="max_width">
                <div className="clear">
                    <div className="width33">
                        <div className="clear">
                            <div className="width15 m-width20">
                                <Link to="https://goo.gl/maps/LinkAfL2i4PioqT75X97" target="_blank" rel="noreferrer">
                                    <img
                                        title=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAnCAYAAAARrli9AAACIElEQVRIx62Xv2sUQRTHv3eEQyQEEZHlCrnqCEFCkBR2WoiIhY3a5A+QgJLCKoVdsBYRtQhiYaGQwiKFBJQgKFaCIolVIoYEI/4IEkXD4X1sdmA5583u7O4Xptl5bz67M++9edsAVEAtSSclnZDUkXRA0h9J25JeS3oqaSO4AhAaw8Ac8I18LQOnrLVCkCngE/FaAA4VBd2imj4A3TzQXerRFtC2QJeoVy+B1iAoAX4VcP4MvAXWgF4B++uDoNC5/AZuAKOeqJwCVnJ8E+dwGNgL7PVEThq0gPnQVznDGcNgFziaA8mOBSsKncGiYTAbAQmeszPY8sz1gIORIAEPfKCmpCFJbU91WpX0XfFa9j1sStpvOGyrnDYs0E9JfWOujIYtUF/SumdurCSoq8Bbv/DMtSVNlgCd9zzru0g5Z4T3k8iIO2us8zyb2TsVc6kDfDHWmM4a3gyUkNtpXbMgp41cdNVlpJHpGbqS3gei7aukR2mebKbRNSHpoqTjgTO7I+ny4Js9rvk+6qVb+t/FN1kzaD50lS/W/TUWaBz4WwPoXpEu6H5FyG62MQmBEuBHBdC1mAZytiTkI7AvBtRKG8FYXYhtiQWciYQslem93XgYEQBHqoCSQMHN6kponaLlP69VfgU06wAJeGZA9oCxPP8YUCc9h9ycqQrybeE797dQN0jp9e62bLyoXxlQkl7ZV2P8GgX/ygd1TNIbox/06h+dfR9Ebrog1QAAAABJRU5ErkJggg=="
                                        className="img-auto"
                                        alt="location-img"
                                        width="26"
                                        height="39"
                                    />
                                </Link>
                            </div>
                            <div className="width85 m-width80">
                                <h4>Address</h4>
                                <p>
                                    Peninsula Park A-4, 1302-1305,<br />
                                    Off Veera Desai Rd,<br />
                                    Veera Desai Industrial Estate,<br />
                                    Andheri West,<br />
                                    Mumbai, Maharashtra 400053
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="width66">
                        <div className="clear">
                            <div className="width40">
                                <h4>SERVICES</h4>
                                <ul>
                                    <li><Link to="/digital/">Digital</Link></li>
                                    <li><Link to="/media/">Media</Link></li>
                                    <li><Link to="/technology/">Technology</Link></li>
                                    <li><Link to="/media-planning-buying-services/">Media Planning Buying Services</Link></li>
                                    <li><Link to="/seo-services/">Seo Services</Link></li>
                                    <li><Link to="/performance-marketing-services/">Performance Marketing Services</Link></li>
                                    <li><Link to="/whatsapp-for-business/">Whatsapp for business</Link></li>
                                </ul>
                            </div>
                            <div className="width30">
                                <h4>WHAT WE DO</h4>
                                <ul>
                                    <li><Link to="/our-work/">Our Work</Link></li>
                                    <li><Link to="/our-clients/">Clients</Link></li>
                                    <li><Link to="/Linkwards/">Awards</Link></li>
                                    <li><Link to="/fulcro-news/">Fulcro news</Link></li>
                                    <li><Link to="/opinions/">Opinions</Link></li>
                                </ul>
                            </div>
                            <div className="width30">
                                <h4>MISC</h4>
                                <ul>
                                    <li><Link to="/careers/">Career</Link></li>
                                    <li><Link to="/contact-us/">Contact Us</Link></li>
                                    <li><Link to="/enquiry/">Enquiry</Link></li>
                                </ul>
                                <div className="text-left sm-text-center">
                                    <h4>Follow us on Social</h4>
                                    <div className="footer-social-link">
                                        <Link to="https://www.facebook.com/fulcroworld" target="_blank" rel="noreferrer">
                                            <img src="/assets/images/facebook.svg" title="" alt="facebook Logo" width="20" height="20" />
                                        </Link>
                                        <Link to="https://www.linkedin.com/company/fulcro-world/" target="_blank" rel="noreferrer">
                                            <img src="/assets/images/linkedin.svg" title="" alt="linkedin Logo" width="20" height="20" />
                                        </Link>
                                        <Link to="https://www.youtube.com/c/Fulcroworld/featured" target="_blank" rel="noreferrer">
                                            <img src="/assets/images/youtube.svg" title="" alt="youtube Logo" width="20" height="20" />
                                        </Link>
                                        <Link to="https://twitter.com/fulcroworld" target="_blank" rel="noreferrer">
                                            <img src="/assets/images/twitter.svg" title="" alt="twitter Logo" width="20" height="20" />
                                        </Link>
                                        <Link to="https://www.instagram.com/fulcroworld/" target="_blank" rel="noreferrer">
                                            <img src="/assets/images/instagram.svg" title="" alt="instagram Logo" width="20" height="20" />
                                        </Link>
                                        <Link to="https://www.glassdoor.co.in/Overview/Working-at-Fulcro-Consulting-EI_IE1968720.11,28.htm" target="_blank" rel="noreferrer"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatsapp-chat">
                <Link to="https://wa.me/917039117977?text=I%20would%20like%20to%20know%20more%20about%20Fulcro" target="_blank" rel="noreferrer">
                    <img className="mobile-hide" title="" src="/assets/images/whatsapp-chat.png" alt="Whatsapp Chat Logo" width="80" height="201" />
                    <img className="desktop-hide" title="" src="/assets/images/whatsapp-chat-mobile.png" alt="Whatsapp Chat Logo" width="63" height="65" />
                </Link>
            </div>
        </section>
    );
}

export default Footer;
