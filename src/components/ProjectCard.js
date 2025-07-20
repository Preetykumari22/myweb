import { Col } from "react-bootstrap";
import awsLogo from '../assets/img/aws.svg';
import k8sLogo from '../assets/img/kubernetes.svg';
import jenkinsLogo from '../assets/img/jenkins.svg';
import githubLogo from '../assets/img/github.svg';
import ansibleLogo from '../assets/img/ansible.svg';
import dockerLogo from '../assets/img/docker.svg';
import terraformLogo from '../assets/img/terraform.svg';
import pythonLogo from '../assets/img/python.svg';

const techLogos = {
  aws: awsLogo,
  kubernetes: k8sLogo,
  jenkins: jenkinsLogo,
  github: githubLogo,
  ansible: ansibleLogo,
  docker: dockerLogo,
  terraform: terraformLogo,
  python: pythonLogo,
};

const getTechStack = (title) => {
  const techMap = {
    "Optimizing Microservices Deployment": ["aws", "kubernetes", "jenkins"],
    "Py-CloudOps: AWS Task Automation Suite": ["python", "aws", "github"],
    "Ansible Cluster with Docker and Kubernetes": ["ansible", "docker", "kubernetes"],
    "Jenkins CI/CD Setup with Docker & Kubernetes": ["jenkins", "docker", "kubernetes"],
  };
  return techMap[title] || [];
};

const getFlowDiagram = (title) => {
  const flowMap = {
    "Optimizing Microservices Deployment": (
      <svg width="100%" height="60" viewBox="0 0 320 60" fill="none">
        <rect x="10" y="20" width="60" height="30" rx="8" fill="#2496ED" opacity="0.8"/>
        <text x="40" y="40" fill="#fff" fontSize="13" textAnchor="middle">EKS</text>
        <rect x="90" y="20" width="60" height="30" rx="8" fill="#43e97b" opacity="0.8"/>
        <text x="120" y="40" fill="#fff" fontSize="13" textAnchor="middle">ArgoCD</text>
        <rect x="170" y="20" width="60" height="30" rx="8" fill="#7B42F6" opacity="0.8"/>
        <text x="200" y="40" fill="#fff" fontSize="13" textAnchor="middle">Istio</text>
        <rect x="250" y="20" width="60" height="30" rx="8" fill="#F46800" opacity="0.8"/>
        <text x="280" y="40" fill="#fff" fontSize="13" textAnchor="middle">Grafana</text>
        <line x1="70" y1="35" x2="90" y2="35" stroke="#2496ED" strokeWidth="2" markerEnd="url(#arrow)"/>
        <line x1="150" y1="35" x2="170" y2="35" stroke="#43e97b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <line x1="230" y1="35" x2="250" y2="35" stroke="#7B42F6" strokeWidth="2" markerEnd="url(#arrow)"/>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8" fill="#2496ED" />
          </marker>
        </defs>
      </svg>
    ),
    "Py-CloudOps: AWS Task Automation Suite": (
      <svg width="100%" height="60" viewBox="0 0 320 60" fill="none">
        <rect x="10" y="20" width="60" height="30" rx="8" fill="#2496ED" opacity="0.8"/>
        <text x="40" y="40" fill="#fff" fontSize="13" textAnchor="middle">Python</text>
        <rect x="90" y="20" width="60" height="30" rx="8" fill="#FF9900" opacity="0.8"/>
        <text x="120" y="40" fill="#fff" fontSize="13" textAnchor="middle">AWS</text>
        <rect x="170" y="20" width="60" height="30" rx="8" fill="#24292e" opacity="0.8"/>
        <text x="200" y="40" fill="#fff" fontSize="13" textAnchor="middle">GitHub</text>
        <line x1="70" y1="35" x2="90" y2="35" stroke="#2496ED" strokeWidth="2" markerEnd="url(#arrow2)"/>
        <line x1="150" y1="35" x2="170" y2="35" stroke="#FF9900" strokeWidth="2" markerEnd="url(#arrow2)"/>
        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8" fill="#2496ED" />
          </marker>
        </defs>
      </svg>
    ),
    "Ansible Cluster with Docker and Kubernetes": (
      <svg width="100%" height="60" viewBox="0 0 320 60" fill="none">
        <rect x="10" y="20" width="60" height="30" rx="8" fill="#EE0000" opacity="0.8"/>
        <text x="40" y="40" fill="#fff" fontSize="13" textAnchor="middle">Ansible</text>
        <rect x="90" y="20" width="60" height="30" rx="8" fill="#2496ED" opacity="0.8"/>
        <text x="120" y="40" fill="#fff" fontSize="13" textAnchor="middle">Docker</text>
        <rect x="170" y="20" width="60" height="30" rx="8" fill="#326CE5" opacity="0.8"/>
        <text x="200" y="40" fill="#fff" fontSize="13" textAnchor="middle">K8s</text>
        <line x1="70" y1="35" x2="90" y2="35" stroke="#EE0000" strokeWidth="2" markerEnd="url(#arrow3)"/>
        <line x1="150" y1="35" x2="170" y2="35" stroke="#2496ED" strokeWidth="2" markerEnd="url(#arrow3)"/>
        <defs>
          <marker id="arrow3" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8" fill="#EE0000" />
          </marker>
        </defs>
      </svg>
    ),
    "Jenkins CI/CD Setup with Docker & Kubernetes": (
      <svg width="100%" height="60" viewBox="0 0 320 60" fill="none">
        <rect x="10" y="20" width="60" height="30" rx="8" fill="#e67e22" opacity="0.8"/>
        <text x="40" y="40" fill="#fff" fontSize="13" textAnchor="middle">Jenkins</text>
        <rect x="90" y="20" width="60" height="30" rx="8" fill="#2496ED" opacity="0.8"/>
        <text x="120" y="40" fill="#fff" fontSize="13" textAnchor="middle">Docker</text>
        <rect x="170" y="20" width="60" height="30" rx="8" fill="#326CE5" opacity="0.8"/>
        <text x="200" y="40" fill="#fff" fontSize="13" textAnchor="middle">K8s</text>
        <line x1="70" y1="35" x2="90" y2="35" stroke="#e67e22" strokeWidth="2" markerEnd="url(#arrow4)"/>
        <line x1="150" y1="35" x2="170" y2="35" stroke="#2496ED" strokeWidth="2" markerEnd="url(#arrow4)"/>
        <defs>
          <marker id="arrow4" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8" fill="#e67e22" />
          </marker>
        </defs>
      </svg>
    ),
  };
  return flowMap[title] || null;
};

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const techStack = getTechStack(title);
  const flowDiagram = getFlowDiagram(title);

  return (
    <Col size={12} sm={6} md={6} className="mb-4">
      <div className="project-card-square">
        <div className="project-header">
          <div className="project-title">
            <h4>{title}</h4>
          </div>
        </div>
        
        <div className="project-tech-stack">
          <div className="tech-logos">
            {techStack.map((tech, index) => (
              <img 
                key={index} 
                src={techLogos[tech]} 
                alt={tech} 
                className="tech-logo"
                title={tech.charAt(0).toUpperCase() + tech.slice(1)}
              />
            ))}
          </div>
        </div>

        <div className="project-flow">
          <div className="flow-diagram">
            {flowDiagram}
          </div>
        </div>

        <div className="project-content">
          {description}
        </div>

        <div className="project-footer">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubLogo} alt="GitHub" className="github-icon" />
            View on GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};
