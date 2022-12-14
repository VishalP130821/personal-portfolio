import { Container, Row, Col, Nav,Tab } from "react-bootstrap";
//import { Displayport } from "react-bootstrap-icons";
import projImg1 from "../assets/img/Home1.png";
import projImg3 from "../assets/img/ToDolist.JPG";
import projImg2 from "../assets/img/portfolioHomePage.JPG";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";





export const Projects = () =>{

    const projects = [
        {
            title: "Digital Diary",
            description: "Portable online diary",
            imgUrl: projImg1
        },
        {
          title: "Personal Portfolio",
          description: "Personal Portfolio in ReactJs",
          imgUrl: projImg2
        },
        {
            title: "To-do List Web App",
            description: "Online To Do list keeper",
            imgUrl: projImg3
        },
      
        
    ];
    return(
        <section className="project" id="projects">
          <Container>
            <Row>
                <Col>
                   <h2>Projects</h2>
                   <p>What I've Built ⮯</p>
                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
                   {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <br />
                    
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                           <Row>
                            {
                                projects.map((project, index) =>{
                                    return(
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                           </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}
                     </Tab.Content>
                   </Tab.Container> 
                </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt="Image" />
        </section>
    )
}