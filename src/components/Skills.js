import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

// Import DevOps tool logos
import dockerLogo from '../assets/img/docker.svg';
import kubernetesLogo from '../assets/img/kubernetes.svg';
import jenkinsLogo from '../assets/img/jenkins.svg';
import terraformLogo from '../assets/img/terraform.svg';
import gitLogo from '../assets/img/git.svg';
import githubLogo from '../assets/img/github.svg';
import prometheusLogo from '../assets/img/prometheus.svg';
import grafanaLogo from '../assets/img/grafana.svg';
import pythonLogo from '../assets/img/python.svg';
import bashLogo from '../assets/img/bash.svg';
import awsLogo from '../assets/img/aws.svg';
import gcpLogo from '../assets/img/gcp.svg';
import ansibleLogo from '../assets/img/ansible.svg';
import linuxLogo from '../assets/img/linux.svg';

const icons = {
  Docker: <img src={dockerLogo} alt="Docker" className="skill-logo-img" />,
  Kubernetes: <img src={kubernetesLogo} alt="Kubernetes" className="skill-logo-img" />,
  Jenkins: <img src={jenkinsLogo} alt="Jenkins" className="skill-logo-img" />,
  Terraform: <img src={terraformLogo} alt="Terraform" className="skill-logo-img" />,
  Git: <img src={gitLogo} alt="Git" className="skill-logo-img" />,
  GitHub: <img src={githubLogo} alt="GitHub" className="skill-logo-img" />,
  ArgoCD: <span role="img" aria-label="ArgoCD" className="skill-logo-img" style={{fontSize:'38px', lineHeight:'1', display:'inline-block'}} >🚀</span>,
  Prometheus: <img src={prometheusLogo} alt="Prometheus" className="skill-logo-img" />,
  Grafana: <img src={grafanaLogo} alt="Grafana" className="skill-logo-img" />,
  Python: <img src={pythonLogo} alt="Python" className="skill-logo-img" />,
  "Bash Scripting": <img src={bashLogo} alt="Bash Scripting" className="skill-logo-img" />,
  AWS: <img src={awsLogo} alt="AWS" className="skill-logo-img" />,
  GCP: <img src={gcpLogo} alt="GCP" className="skill-logo-img" />,
  Ansible: <img src={ansibleLogo} alt="Ansible" className="skill-logo-img" />,
  Linux: <img src={linuxLogo} alt="Linux" className="skill-logo-img" />,
  "CI/CD": <span role="img" aria-label="CI/CD" className="skill-logo-img" style={{fontSize:'38px', lineHeight:'1', display:'inline-block'}} >∞</span>,
};

const devopsSkills = [
  { name: "Docker", level: "Running", color: "#2496ED" },
  { name: "Kubernetes", level: "Scaling", color: "#326CE5" },
  { name: "Jenkins", level: "Active", color: "#e67e22" },
  { name: "Terraform", level: "Running", color: "#7B42F6" },
  { name: "Git", level: "Active", color: "#F1502F" },
  { name: "GitHub", level: "Active", color: "#24292e" },
  { name: "ArgoCD", level: "Scaling", color: "#F16061" },
  { name: "Prometheus", level: "Running", color: "#E6522C" },
  { name: "Grafana", level: "Active", color: "#F46800" },
  { name: "Python", level: "Running", color: "#3776AB" },
  { name: "Bash Scripting", level: "Active", color: "#4EAA25" },
  { name: "AWS", level: "Scaling", color: "#FF9900" },
  { name: "GCP", level: "Running", color: "#4285F4" },
  { name: "Ansible", level: "Running", color: "#EE0000" },
  { name: "Linux", level: "Active", color: "#FCC624" },
  { name: "CI/CD", level: "Scaling", color: "#2496ED" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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

export const Skills = () => {
  return (
    <section className="skill skill-k8s-theme" id="skills">
      <img className="background-image-left" src={colorSharp} alt="" />
      <div className="skill-bx wow zoomIn">
        <h2 className="skills-section-title">Skills</h2>
        <p className="skills-intro">
          Here you'll find a showcase of my technical expertise across DevOps, Cloud, Programming, and Automation tools. 
          My skill set spans modern technologies and best practices, enabling me to build, deploy, and manage scalable solutions efficiently.
        </p>
        <div className="k8s-cluster-box active-animated-cluster">
          <div className="k8s-cluster-header">
            <img src={kubernetesLogo} alt="Kubernetes" className="k8s-cluster-logo" />
            <span className="k8s-cluster-title">Kubernetes Cluster</span>
            <span className="k8s-cluster-status-badge">
              <span className="k8s-status-dot"></span>
              Status: <b>Active</b>
            </span>
          </div>
          <div className="k8s-cluster-desc">
            All containers (skills) are running inside a <b>Kubernetes cluster</b>, which handles <b>scheduling</b>, <b>load balancing</b>, and <b>orchestration</b> for high availability and scalability.
          </div>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            {devopsSkills.map((skill, idx) => (
              <div className="item docker-carousel-item same-size-skill-box" key={skill.name} style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="docker-carousel-icon">{icons[skill.name]}</div>
                <h5>{skill.name}</h5>
                <div className={`carousel-status-badge ${skill.level.toLowerCase()}`}>{skill.level}</div>
                <div className="carousel-replica-info">
                  <span className="replica-label">Replicas:</span>
                  <span className="replica-count">{Math.floor(Math.random() * 3) + 2}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
