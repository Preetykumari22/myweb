import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Normal typing speed
  const period = 1000; // Normal transition time between words

  const tick = useCallback(() => {
    const toRotate = ["Cloud Engineer", "DevOps Engineer", "AWS Specialist"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5); // Slightly faster deleting speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300); // Resets to normal typing speed for new word
    }
  }, [loopNum, isDeleting, text, period])

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! I'm Preety Kumari`}</h1>
                  <h1><span className="txt-rotate" data-period="1000" data-rotate='[ "Cloud Engineer", "DevOps Engineer", "AWS Specialist"  ]'><span className="wrap">{text}</span></span></h1>
                  <p>Cloud and DevOps engineer with hands-on experience in AWS, Kubernetes, Docker, Jenkins, ArgoCD, Terraform, and CI/CD automation. Delivered scalable infrastructure, automated deployments, and implemented DevSecOps. Built microservices on EKS, automated AWS tasks with Python, and led projects in monitoring, security, and cloud-native solutions.</p>
                  <a href="/Preety_Amazon.pdf" download="Preety_Kumari_Resume.pdf" style={{ textDecoration: 'none' }}>
                    <button>
                      View Resume <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
