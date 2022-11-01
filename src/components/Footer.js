import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/india-national-emblem.png";
import  navIcon3 from "../assets/img/nav-icon3.svg";
import  navIcon1 from "../assets/img/nav-icon1.svg";
import gitIcon from "../assets/img/gitIcon.svg";

export const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col id="footer-img" sm={5}>
                       <img  src={logo} alt="log0-image" />
                    </Col>
                    <Col size={8} sm={4} className="text-center text-sm-center">
                        {/* <div className="social-icon-footer footer-icons">
                        <a href="https://www.linkedin.com/in/vishal-pansuriya-284365234/" target="_blank"><img src={navIcon1} alt=""/></a>
                        <a href="https://github.com/VishalP130821" target="_blank"><img src={gitIcon} alt=""/></a>
                        <a href="https://www.instagram.com/_.vishal_pansuriya._/" target="_blank"><img src={navIcon3} alt=""/></a>
                        </div> */}
                        {/* <div>
                        <p id="copyright-text">Copyright © 2022. All Rights Reserved.</p>

                        </div> */}
                        </Col>
                        <div class="float-container">
                          <div class="float-child">
                            <div className="social-icon-footer footer-icons">
                              <a style={{backgroundColor: "#FF9933"}} href="https://www.linkedin.com/in/vishal-pansuriya-284365234/" target="_blank"><img src={navIcon1} alt=""/></a>
                              <a href="https://github.com/VishalP130821" target="_blank"><img src={gitIcon} alt=""/></a>
                              <a style={{backgroundColor: "#138808"}} href="https://www.instagram.com/_.vishal_pansuriya._/" target="_blank"><img src={navIcon3} alt=""/></a>
                              </div>
                              <br />
                              <div>
                                
                             <p id="copyright-text">Copyright © 2022. All Rights Reserved.</p>
                              </div>
                              
                            </div>

                        <div class="float-child">
                           <div class="blue"> 
                             <p>Made with ❤️ by Vishal Pansuriya 🇮🇳</p>
                           </div>
                        </div>

                       </div>
                        {/* <p id="copyright-text">Copyright © 2022. All Rights Reserved.</p> */}

                </Row>
            </Container>
        </footer>
    )
}