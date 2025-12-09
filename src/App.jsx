import React from 'react';
import Hero from './components/ui/Hero';
import ProjectCard from './components/ui/ProjectCard';
import { Section } from './components/ui/Section';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Server, Cloud, Code, Terminal, Database, Shield } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "tbo365 Cloud SaaS Platform",
      description: "Designed & launched a multi-tenant SaaS platform reducing operational costs by ~30% through automation. Standardized provisioning for Frappe + Press Console.",
      tags: ["Frappe", "Docker", "Kubernetes", "Python"],
      img: null // user can add screenshots
    },
    {
      title: "Real-time EC2 Monitoring",
      description: "Built a real-time EC2 monitoring dashboard using Flask & Flutter with Boto3 integration. Reduced manual monitoring effort by 50%.",
      tags: ["AWS Boto3", "Flask", "Flutter", "Python"],
      img: null
    },
    {
      title: "n8n Workflow Automation",
      description: "Complex workflow automation integrating Twilio WhatsApp, GitHub, and cloud APIs. Reduced manual business process steps by 60%.",
      tags: ["n8n", "Twilio", "Webhooks", "API"],
      img: null
    },
    {
      title: "Serverless Fire Detection",
      description: "AWS serverless pipeline using Rekognition, Lambda, S3, and SNS. Achieved ~85% detection accuracy in pilot tests.",
      tags: ["AWS Lambda", "Rekognition", "DynamoDB", "Serverless"],
      img: null
    },
    {
      title: "Automated Static Hosting",
      description: "Secure static site hosting architecture using S3 + CloudFront with automated cache invalidation pipelines.",
      tags: ["AWS S3", "CloudFront", "CI/CD", "Security"],
      img: null
    },
    {
      title: "Azure DevOps CI/CD",
      description: "End-to-end automated pipelines for multi-environment deployments, improving release velocity and reliability.",
      tags: ["Azure DevOps", "YAML", "Pipelines", "Automation"],
      img: null
    },
    {
      title: "AWS Multi-tier Deployment",
      description: "Provisioned a fault-tolerant app stack using EC2, RDS, and ALB across multiple AZs.",
      tags: ["AWS EC2", "RDS", "ALB", "Terraform"],
      img: null
    },
    {
      title: "IoT Smart Wheelchair",
      description: "Voice/joystick-controlled wheelchair with health tracking sensors.",
      tags: ["IoT", "Embedded", "Sensors"],
      img: null
    }
  ];

  const skills = [
    { name: "AWS", icon: Cloud, level: "Advanced" },
    { name: "Azure", icon: Shield, level: "Certified" },
    { name: "Terraform / IaC", icon: Terminal, level: "Advanced" },
    { name: "Kubernetes", icon: Server, level: "Intermediate" },
    { name: "CI/CD Automation", icon: Code, level: "Expert" },
    { name: "Python / Boto3", icon: Database, level: "Advanced" },
  ];

  const handleContact = () => {
    window.location.href = "mailto:harikrishnanpr916@gmail.com";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-accent/30 selection:text-slate-900 font-sans">

      {/* Navigation / Header - Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto backdrop-blur-md bg-white/50 px-4 py-2 rounded-full border border-white/20 shadow-sm">
          <span className="font-bold text-slate-900 tracking-tight">Harikrishnan P R</span>
        </div>
        <div className="pointer-events-auto flex gap-4 backdrop-blur-md bg-white/50 px-4 py-2 rounded-full border border-white/20 shadow-sm">
          <a href="https://linkedin.com/in/harikrishnanpr916" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:harikrishnanpr916@gmail.com" className="text-slate-500 hover:text-red-500 transition-colors"><Mail size={20} /></a>
        </div>
      </nav>

      <Hero onContact={handleContact} />

      <Section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 text-slate-900"
            >
              Profile Summary
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              Cloud and DevOps Engineer with certifications in AWS and Azure and hands-on expertise in <strong className="text-slate-900 font-semibold">automation, CI/CD, and cloud-native deployments</strong>. Experienced in designing secure, scalable infrastructures and optimizing SaaS operations on AWS, Azure, and Hetzner Cloud.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Proven record of <strong className="text-slate-900 font-semibold">reducing costs, improving deployment velocity, and enhancing reliability</strong> of mission-critical platforms. Strong collaborator with skills in troubleshooting, monitoring, and infrastructure-as-code.
            </motion.p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl"
            >
              <img src="/profile.png" alt="Harikrishnan P R" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center hover:border-slate-200 transition-colors"
            >
              <s.icon className="w-8 h-8 text-accent mb-3" />
              <span className="font-medium text-slate-900">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="projects" className="bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg">
            A selection of cloud platforms, automation tools, and infrastructure projects I've engineered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section id="experience" className="bg-white">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Experience</h2>
        <div className="max-w-3xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-slate-200 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-white" />
            <span className="text-sm font-semibold text-accent tracking-wider uppercase">Jan 2025 – Present</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">DevOps Engineer (R&D)</h3>
            <p className="text-slate-500 font-medium">Team Back Office, Thrissur</p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
              <li>Designed & launched <strong>tbo365 Cloud</strong> (Frappe + Press Console), reducing costs by <strong>30%</strong>.</li>
              <li>Automated DNS, reverse proxy, and CI/CD workflows, cutting deployment time by 40%.</li>
              <li>Implemented s3 + CloudFront static hosting with automated cache invalidation.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-slate-200 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white" />
            <span className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Aug 2023 – Dec 2023</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Technical Coordinator</h3>
            <p className="text-slate-500 font-medium">Fedserv, Kakkanad</p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
              <li>Resolved <strong>95%</strong> of production incidents as a liaison between support & engineering.</li>
              <li>Standardized incident workflows, reducing MTTR by 35%.</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <footer className="bg-slate-900 py-12 px-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to scale your infrastructure?</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <button
          onClick={handleContact}
          className="px-8 py-3 rounded-full bg-accent text-slate-900 font-bold hover:bg-white transition-colors"
        >
          Say Hello
        </button>
        <div className="mt-16 text-slate-600 text-sm">
          © {new Date().getFullYear()} Harikrishnan P R. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}

export default App;
