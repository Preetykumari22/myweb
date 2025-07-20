import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ansibleImg from '../assets/img/project-img1.png';
import jenkinsImg from '../assets/img/project-img2.png';
import devopsImg from '../assets/img/project-img3.png';
import awsImg from '../assets/img/pycloud.jpg';

export const Projects = () => {
  const projects = [
    {
      title: "Optimizing Microservices Deployment",
      description: (
        <>
          <strong>Tech Stack:</strong> AWS EKS, Kubernetes, ArgoCD, Istio, Prometheus, Grafana<br/>
          <strong>Date:</strong> Jan 2025<br/>
          <strong>GitHub:</strong> <a href="https://github.com/Preetykumari22/Project_DevOps" target="_blank" rel="noopener noreferrer">Project_DevOps</a><br/>
          <ul className="project-bullets">
            <li>Deployed a Kubernetes cluster on AWS EKS to orchestrate scalable microservices.</li>
            <li>Automated deployments with ArgoCD, enabling GitOps workflows from GitHub.</li>
            <li>Used Istio, Prometheus, Grafana, and Kiali for secure traffic management, monitoring, and visualization.</li>
            <li>Implemented service mesh for secure inter-service communication and traffic management.</li>
            <li>Set up comprehensive monitoring and alerting with Prometheus and Grafana dashboards.</li>
          </ul>
        </>
      ),
      imgUrl: devopsImg,
      githubLink: "https://github.com/Preetykumari22/Project_DevOps"
    },
    {
      title: "Py-CloudOps: AWS Task Automation Suite",
      description: (
        <>
          <strong>Tech Stack:</strong> Python, AWS Services (EC2, S3, Lambda, CloudFormation)<br/>
          <strong>Date:</strong> Jun 2024<br/>
          <strong>GitHub:</strong> <a href="https://github.com/Preetykumari22/pycloud" target="_blank" rel="noopener noreferrer">pycloud</a><br/>
          <ul className="project-bullets">
            <li>Developed Py-CloudOps, a Python tool for automating AWS tasks like EC2 launches and S3 uploads.</li>
            <li>Added features for text-to-speech, WhatsApp messaging, and Instagram posting.</li>
            <li>Focused on modular, reusable code for reliable local and cloud operations.</li>
            <li>Implemented AWS Lambda functions for serverless automation workflows.</li>
            <li>Created CloudFormation templates for infrastructure as code deployment.</li>
          </ul>
        </>
      ),
      imgUrl: awsImg,
      githubLink: "https://github.com/Preetykumari22/pycloud"
    },
    {
      title: "Ansible Cluster with Docker and Kubernetes",
      description: (
        <>
          <strong>Tech Stack:</strong> Ansible, Docker, Kubernetes, YAML<br/>
          <strong>Date:</strong> May 2024<br/>
          <strong>GitHub:</strong> <a href="https://github.com/Preetykumari22/ansible_cluster" target="_blank" rel="noopener noreferrer">ansible_cluster</a><br/>
          <ul className="project-bullets">
            <li>Set up an Ansible cluster manually using Docker containers and Kubernetes pods, without pre-built images.</li>
            <li><strong>Project Structure:</strong> Dockerfile.master (Ansible Master), Dockerfile.node (Ansible Node), ansible-master.yaml, ansible-node.yaml.</li>
            <li>Automated infrastructure provisioning and configuration management for scalable deployments.</li>
            <li>Created custom Docker images for Ansible master and node components.</li>
            <li>Implemented Kubernetes manifests for orchestration and scaling.</li>
          </ul>
        </>
      ),
      imgUrl: ansibleImg,
      githubLink: "https://github.com/Preetykumari22/ansible_cluster"
    },
    {
      title: "Jenkins CI/CD Setup with Docker & Kubernetes",
      description: (
        <>
          <strong>Tech Stack:</strong> Jenkins, Docker, Kubernetes (AWS EKS), Shell Scripting, GitHub<br/>
          <strong>Date:</strong> Apr 2024<br/>
          <strong>GitHub:</strong> <a href="https://github.com/Preetykumari22/Jenkins-CI-CD-Setup-with-Docker-Kubernetes" target="_blank" rel="noopener noreferrer">Jenkins-CI-CD-Setup-with-Docker-Kubernetes</a><br/>
          <ul className="project-bullets">
            <li>Complete hands-on CI/CD pipeline setup using Jenkins, Docker, and Kubernetes (EKS) without pre-built Jenkins Docker images.</li>
            <li>Jenkins master runs inside a manually created Docker container; Kubernetes is used for dynamic Jenkins agent provisioning.</li>
            <li>Technologies: Docker, Jenkins, Kubernetes (AWS EKS), EC2 (Ubuntu), Shell CLI, GitHub.</li>
            <li>Built custom Jenkins Docker image with all necessary plugins and configurations.</li>
            <li>Implemented dynamic agent provisioning using Kubernetes pods for scalable CI/CD workflows.</li>
          </ul>
        </>
      ),
      imgUrl: jenkinsImg,
      githubLink: "https://github.com/Preetykumari22/Jenkins-CI-CD-Setup-with-Docker-Kubernetes"
    },
  ];

  const extracurriculars = [
    {
      title: "🏆 AWS DeepRacer Contest Participant — Explored reinforcement learning and autonomous driving technologies, gaining hands-on experience with ML algorithms and cloud-based robotics.",
    },
    {
      title: "☁️ Google Cloud Study Jam — Completed comprehensive hands-on labs and earned professional certification, demonstrating expertise in cloud computing fundamentals.",
    },
    {
      title: "🐍 Python Programming Certificate — FreeCodeCamp completion with outstanding performance recognition, showcasing strong programming fundamentals.",
    },
    {
      title: "🔧 ARCADE Cloud Labs — 10+ months of intensive hands-on cloud projects with performance recognition, building real-world infrastructure solutions.",
    },
    {
      title: "💼 Microsoft Learn Student Ambassadors — Earned multiple badges and LinkedIn Premium access, demonstrating commitment to continuous learning.",
    },
    {
      title: "🤖 AWS Machine Learning Course — Completed comprehensive introduction to ML and reinforcement learning, expanding AI/ML skill set.",
    },
    {
      title: "🚀 Smart India Hackathon 2024 — Advanced to next phase with innovative solutions, showcasing problem-solving and technical creativity.",
    },
    {
      title: "🎨 500+ Creative Designs — Proficient in Canva and Adobe Illustrator, creating professional graphics and visual content.",
    },
    {
      title: "🎯 Technical Event Organization — Led multiple IEEE and university technical events, demonstrating leadership and organizational skills.",
    },
  ];

  const positions = [
    {
      title: "🎯 IEEE GGV Student Branch | CHAIRPERSON — Leading 200+ student members, organizing technical workshops, hackathons, and industry collaborations to foster innovation and skill development.",
    },
    {
      title: "📰 ECE Department Newsletter | TEAM LEAD — Managing content creation, design, and distribution of department newsletter, ensuring effective communication across 500+ students and faculty.",
    },
    {
      title: "🤝 IEEE MP Section | VOLUNTEER — Contributing to regional IEEE initiatives, supporting technical conferences, and promoting engineering excellence across Madhya Pradesh.",
    },
    {
      title: "👩‍💻 WIE IEEE | ACTIVE MEMBER — Advocating for women in engineering, participating in mentorship programs, and organizing events to encourage female participation in STEM.",
    },
    {
      title: "🎨 Silicon Club GGV | GRAPHIC DESIGNER — Creating compelling visual content for technical events, social media campaigns, and promotional materials using modern design tools.",
    },
    {
      title: "🚀 Equilibrio Techfest GGV | GRAPHIC DESIGNER — Designing innovative graphics for the university's premier technical festival, reaching 1000+ participants annually.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Accomplishments</h2>
                  <p>🚀 <strong>Cloud & DevOps Specialist</strong> with proven expertise in AWS, Kubernetes, and CI/CD automation. Led <strong>AWS DeepRacer</strong> participation, achieved <strong>Google Cloud certification</strong>, and orchestrated multiple technical leadership initiatives. Currently serving as <strong>Chairperson of IEEE GGV Student Branch</strong>, driving innovation in cloud infrastructure, Terraform automation, and DevSecOps practices. Passionate about building scalable, secure, and efficient cloud-native solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Extracurricular Achievements</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Position of Responsibility</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {extracurriculars.map((activity, index) => (
                            <Col key={index} sm={6} md={4}>
                              <div className="activity-card">
                                <h5>{activity.title}</h5>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {positions.map((position, index) => (
                            <Col key={index} sm={12} md={4}>
                              <div className="position-card">
                                <h5>{position.title}</h5>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
