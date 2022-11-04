import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";



export const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer 💻", "Army Aspirant ⚔️", "Gamer 🎮"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
        tick();
        },delta)
        return() =>{
            clearInterval(ticker)
        };
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
           setDelta(prevDelta => prevDelta /2)     
        }

        if(!isDeleting && updatedText === fullText){
           setIsDeleting(true);
           setDelta(period);

        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }
    

    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                       <span className="tagline">Welcome to myjbxCCBVHBvh Portfolio! 🙏</span>
                       <h1>{'Hi I am Vishal!'}<span className="wrap"><br/>{text}</span></h1>
                       <p>I'm enthusiastic about learning new technology and recognise that there are other ways to do a task. Though I am most comfortable designing front-end applications with HTML, CSS, Javascript, and React, I am a quick learner who can quickly take up new tech stacks as needed. Being a great developer, in my opinion, is about selecting the greatest tool for the job rather than employing a specific language.</p>
                       
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <img src={headerImg} alt='Header Image' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}