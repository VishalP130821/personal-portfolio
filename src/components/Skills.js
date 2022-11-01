import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlIcon from "../assets/img/htmlIcon.svg";
import cssIcon from "../assets/img/cssIcon.svg";
import javascriptIcon from "../assets/img/javascriptIcon.svg";
import nodejsIcon from "../assets/img/nodejsIcon.svg";
import expressjsIcon from "../assets/img/expressjsIcon.svg";
import mongodbIcon from "../assets/img/mongodbIcon.svg";
import reactjsIcon from "../assets/img/reactjsIcon.svg";
import githubIcon from "../assets/img/gitIcon.svg";
import javaIcon from "../assets/img/javaIcon.svg";
import kaliLinux from "../assets/img/kali-linux.svg"
// import from "..assets/img/";
// import from "..assets/img/";
import colorSharp from "../assets/img/color-sharp.png";




export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
           <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                       <h2>Skills</h2>
                       <p>What I Can Do ⮯</p>
                       <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} transitionTime={1} stopOnHover={true}>
                         <div className="item">
                            <img src={htmlIcon} alt="Image" />
                            <h5>HTML</h5>
                         </div>
                         <div className="item">
                            <img src={cssIcon} alt="Image" />
                            <h5>CSS</h5>
                         </div>
                         <div className="item">
                            <img src={javascriptIcon} alt="Image" />
                            <h5>JavaScript</h5>
                         </div>
                         <div className="item">
                            <img src={nodejsIcon} alt="Image" />
                            <h5>Node.js</h5>
                         </div>
                         <div className="item">
                            <img src={expressjsIcon} alt="Image" />
                            <h5>Express.js</h5>
                         </div>
                         <div className="item">
                            <img src={mongodbIcon} alt="Image" />
                            <h5>MongoDB</h5>
                         </div>
                         <div className="item">
                            <img src={reactjsIcon} alt="Image" />
                            <h5>React.js</h5>
                         </div>
                         <div className="item">
                            <img src={javaIcon} alt="Image" />
                            <h5>JAVA</h5>
                         </div>
                         <div className="item">
                            <img src={githubIcon} alt="Image" />
                            <h5>Github</h5>
                         </div>
                         <div className="item">
                            <img src={kaliLinux} alt="Image" />
                            <h5>Kali Linux</h5>
                         </div>
                       </Carousel>                        
                    </div>
                </Col>
            </Row>
           </Container>
           <img className="background-image-left" src={colorSharp} />
        </section>
      )

}