import React from 'react';
import ansibleLogo from '../assets/img/ansible.svg';
import terraformLogo from '../assets/img/terraform.svg';
import githubLogo from '../assets/img/github.svg';
import jenkinsLogo from '../assets/img/jenkins.svg';

const devopsIcons = {
  jenkins: <img src={jenkinsLogo} alt="Jenkins" className="workexp-logo jenkins-logo-large" title="Jenkins: Orchestrates CI/CD automation" />,
  ansible: <img src={ansibleLogo} alt="Ansible" className="workexp-logo" title="Ansible: Automates infrastructure and configuration" />,
  terraform: <img src={terraformLogo} alt="Terraform" className="workexp-logo" title="Terraform: Infrastructure as Code (IaC) tool" />,
  github: <img src={githubLogo} alt="GitHub" className="workexp-logo" title="GitHub: Source code and version control" />,
};

const experiences = [
  {
    title: "AWS Cloud and DevOps Intern",
    company: "LINUX WORLD PVT LMT",
    duration: "Jan 2025 – Jun 2025",
    description: [
      "Designed and automated scalable AWS infrastructure (EC2, S3, RDS, IAM, Lambda) with Terraform, CloudFormation, and Python; monitored performance using Prometheus, Grafana, and CloudWatch.",
      "Built CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD; containerized apps with Docker and Kubernetes; enforced DevSecOps practices for secure, reliable deployments."
    ],
    icon: devopsIcons.ansible,
  },
  {
    title: "Cloud Computing Intern",
    company: "PRESEAR SOFTWARE PVT LMT",
    duration: "Aug 2022 – Jan 2024",
    description: [
      "Developed and deployed web apps on AWS EC2 and Amplify, ensuring high availability.",
      "Configured Load Balancers and RDS for secure, scalable cloud solutions."
    ],
    icon: devopsIcons.terraform,
  },
  {
    title: "AWS Cloud Computing Intern",
    company: "Linux World Pvt. Ltd",
    duration: "June 2024 – Aug 2024",
    description: [
      "By using various AWS services, integrated all and worked on various use cases.",
      "Built deployment pipelines with Jenkins and GitHub.",
      "Visualized cloud metrics with Grafana dashboards."
    ],
    icon: devopsIcons.github,
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="work-experience pipeline-theme">
      <h2 className="section-title">Work Experience</h2>
      <p className="pipeline-desc">
        <strong>How to read this pipeline:</strong> Each stage below is a real job I did, with the DevOps tool I used for it. The arrows show how work flows from one stage to the next, just like in a real CI/CD pipeline.<br/>
        <span style={{color:'#2496ED'}}>Hover or tap the tool icon to see what it does!</span>
      </p>
      <div className="pipeline-flex">
        <div className="pipeline-jenkins" title="Jenkins: Orchestrates the entire CI/CD process.">
          {devopsIcons.jenkins}
        </div>
        {experiences.map((exp, idx) => (
          <React.Fragment key={exp.title}>
            <div className="pipeline-arrow" />
            <div className="pipeline-stage technical-stage">
              <div className="stage-label">Stage {idx + 1}</div>
              <div className="stage-icon">{exp.icon}</div>
              <div className="stage-content">
                <h3 className="stage-title">{exp.title}</h3>
                <span className="stage-company">@ {exp.company}</span>
                <span className="stage-duration">{exp.duration}</span>
                <ul className="stage-desc-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* Legend removed as requested */}
    </section>
  );
};

export default WorkExperience;
