/**
 * Chatbot for Preety Kumari's portfolio
 * Answers questions about education, experience, projects, skills, certifications, leadership, and contact info
 */
import React, { useState, useRef, useEffect } from 'react';
import chatbotIcon from '../assets/img/professional.png';

const qaPairs = [
  // Education
  { q: ["education", "study", "university", "college", "cgpa"], a: "🎓 Preety Kumari is pursuing a Bachelor of Technology in Electronics & Communication Engineering (ECE) at Guru Ghasidas University, Bilaspur, Chhattisgarh (2021-2025), with a CGPA of 7.75." },

  // Work Experience
  { q: ["linux world", "devops intern", "aws cloud intern", "terraform", "cloudformation", "prometheus", "grafana", "cloudwatch", "jenkins", "github actions", "argocd", "docker", "kubernetes", "devsecops"], a: "💼 At Linux World Pvt Ltd (Jan 2025 – Jun 2025), Preety was an AWS Cloud and DevOps Intern. She designed and automated scalable AWS infrastructure (EC2, S3, RDS, IAM, Lambda) with Terraform, CloudFormation, and Python; monitored performance using Prometheus, Grafana, and CloudWatch. She built CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD; containerized apps with Docker and Kubernetes; and enforced DevSecOps practices for secure, reliable deployments." },
  { q: ["presear", "cloud computing intern", "amplify", "load balancer", "rds", "cloud monitoring"], a: "💼 At Presear Software Pvt Ltd (Aug 2022 – Jan 2024), Preety was a Cloud Computing Intern. She built and deployed web applications on AWS EC2 and Amplify, ensuring scalability and reliability. She configured Load Balancers and RDS for traffic management and secure data storage, and gained hands-on experience with multiple AWS services, cloud monitoring, and performance optimization." },

  // Projects
  { q: ["projects", "project", "github", "microservices", "eks", "kubernetes", "istio", "argocd", "prometheus", "grafana", "py-cloudops", "automation suite", "python tool"], a: "📂 Preety's key projects include: 1) Optimizing Microservices Deployment (AWS EKS, Kubernetes, ArgoCD, Istio, Prometheus, Grafana) – deployed scalable microservices, automated deployments, and implemented monitoring. 2) Py-CloudOps: AWS Task Automation Suite (Python, AWS) – developed a tool for automating AWS tasks like EC2 launches and S3 uploads, with features for text-to-speech, WhatsApp messaging, and Instagram posting. See her GitHub for more: https://github.com/Preetykumari22" },
  { q: ["optimizing microservices", "eks project", "kubernetes project"], a: "🚀 Optimizing Microservices Deployment: Deployed a Kubernetes cluster on AWS EKS to orchestrate scalable microservices. Automated deployments with ArgoCD, enabled GitOps workflows from GitHub, and used Istio, Prometheus, Grafana, and Kiali for secure traffic management, monitoring, and visualization." },
  { q: ["py-cloudops", "aws task automation", "python aws"], a: "🤖 Py-CloudOps: AWS Task Automation Suite – Developed a Python tool for automating AWS tasks like EC2 launches and S3 uploads. Added features for text-to-speech, WhatsApp messaging, and Instagram posting. Focused on modular, reusable code for reliable local and cloud operations." },

  // Technical Skills
  { q: ["skills", "technical skills", "programming", "languages", "devops", "tools", "frameworks", "cloud", "ci/cd", "version control", "linux", "bash", "sql", "oop", "dbms", "algorithms", "data structures"], a: "🛠️ Technical Skills: Programming – Python, Java, C++, C, JavaScript, SQL. Web & Frameworks – HTML, CSS, React.js, MySQL. Cloud & DevOps – AWS, Docker, Kubernetes, Terraform, Jenkins, ArgoCD, Prometheus, Grafana, CI/CD pipelines. Tools – Git, GitHub, VS Code, Visual Studio, Linux (RHEL 9), Bash Scripting. CS Fundamentals – Data Structures, Algorithms, OOP, DBMS, Operating Systems. Other – MS Word, Excel, PowerPoint." },

  // Certifications & Leadership
  { q: ["certification", "certifications", "leadership", "ieee", "deep racer", "google cloud", "freecodecamp", "arcade", "chairperson", "team lead", "newsletter", "volunteer", "wie", "silicon club", "techfest"], a: "🏅 Certifications & Leadership: AWS DeepRacer Contest Participant (reinforcement learning, autonomous driving), Google Cloud Study Jam (certified), Python Programming Certificate (FreeCodeCamp), ARCADE cloud labs (performance recognition), Chairperson (IEEE GGV Student Branch), Team Lead (ECE Dept. Newsletter), Volunteer (IEEE MP Section), active member of WIE IEEE, Silicon Club, and Techfest." },

  // Contact
  { q: ["contact", "email", "phone", "linkedin", "github", "portfolio", "how to reach", "connect"], a: "📧 Contact Preety Kumari: Email – preetyprincess2212@gmail.com | Phone – +91 8709554389 | LinkedIn – linkedin.com | GitHub – github.com/Preetykumari22 | Portfolio – [your portfolio link]" },

  // Greetings & About
  { q: ["who are you", "your name", "about you", "about preety", "who is preety", "hello", "hi", "hii", "hey"], a: "🤖 I'm Preety's personal chatbot! Ask me anything about her education, experience, projects, skills, or achievements." },

  // Fallback
  { q: ["default"], a: "❓ I didn't catch that. Try asking about Preety's education, experience, projects, skills, certifications, or contact info!" }
];

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();
  for (const pair of qaPairs) {
    if (pair.q.some(keyword => lowerInput.includes(keyword))) {
      return pair.a;
    }
  }
  // Fallback
  return qaPairs.find(pair => pair.q.includes("default")).a;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "🤖 I'm Preety's personal chatbot! Ask me anything about her education, experience, projects, skills, or achievements.", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const chatBodyRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!userInput.trim()) return;
    const updatedMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(updatedMessages);
    setUserInput("");
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chat-icon" onClick={toggleChat}>
        <p>Ask anything<br /> about Preety!</p>
        <img src={chatbotIcon} alt="Chatbot Icon" />
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            🗨️ Preety's Chatbot
            <span className="close-btn" onClick={toggleChat}>✖</span>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-btn" onClick={handleSend}>📤 Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
