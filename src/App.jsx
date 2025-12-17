import React from 'react';
import Hero from './components/ui/Hero';
import ProjectCard from './components/ui/ProjectCard';
import { Section } from './components/ui/Section';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Server, Cloud, Code, Terminal, Database, Shield, Award } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "tbo365 Cloud SaaS Platform",
      description: "Single-handedly architected and deployed a self-hosted Frappe Cloud platform using Frappe Press across 7 servers. Currently powers 60+ production sites with multi-tenant provisioning, reducing operational costs by 30%.",
      tags: ["Frappe", "Frappe Press", "Docker", "Ansible", "Nginx", "Python"],
      achievements: [
        "Managed 7-server infrastructure (3 app servers, 2 database servers, 1 proxy server, 1 monitoring server)",
        "Successfully deployed and maintain 60+ production Frappe sites with zero downtime",
        "Overcame significant challenges with limited documentation and community support for self-hosted Frappe Press",
        "Manually troubleshot and resolved complex Docker container orchestration issues",
        "Configured and debugged Ansible playbooks for automated server provisioning",
        "Resolved TLS certificate management and Nginx reverse proxy configuration challenges",
        "Implemented custom solutions for database connectivity and backup automation",
        "Achieved production-grade reliability without official enterprise support"
      ],
      teamRole: "Solo DevOps Engineer (Self-Hosted Infrastructure)",
      img: null
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
      title: "WhatsApp Bot Automation",
      description: "Serverless WhatsApp chatbot using AWS Lambda and Twilio API for automated customer interactions and notifications.",
      tags: ["AWS Lambda", "Twilio", "WhatsApp API", "Python"],
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
    <div className="min-h-screen text-slate-900 selection:bg-accent/30 selection:text-slate-900 font-sans">

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

      {/* Navigation Menu */}
      <nav className="fixed top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <div className="pointer-events-auto backdrop-blur-md bg-white/50 px-6 py-3 rounded-full border border-white/20 shadow-lg">
          <div className="flex gap-2">
            <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 hover:text-white transition-all duration-200">About</a>
            <a href="#certifications" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 hover:text-white transition-all duration-200">Certifications</a>
            <a href="#projects" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 hover:text-white transition-all duration-200">Projects</a>
            <a href="#experience" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 hover:text-white transition-all duration-200">Experience</a>
            <a href="#education" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 hover:text-white transition-all duration-200">Education</a>
          </div>
        </div>
      </nav>

      {/* Global Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-teal-200 to-green-200 opacity-60"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <Hero onContact={handleContact} />

      {/* Profile Summary - Full Width */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
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
            <motion.img
              src="/profile.png?v=3"
              alt="Harikrishnan P R"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                boxShadow: "0 0 40px 20px rgba(16, 185, 129, 0.5), 0 0 80px 40px rgba(20, 184, 166, 0.3)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-64 h-auto md:w-80 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
            />
          </div>
        </div>

        {/* Certifications Section */}
        <div id="certifications" className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Certifications</h3>
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-emerald-200/50 flex flex-row items-center gap-6 shadow-lg shadow-emerald-500/10 transition-all duration-300 overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-green-50/80 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />

              <div className="relative flex-shrink-0 p-3 bg-white/80 rounded-xl shadow-sm">
                <img src="/azure-cert-badge.png" alt="Azure Administrator Associate" className="w-20 h-20 object-contain" />
              </div>
              <div className="relative text-left flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-slate-900 text-lg">Microsoft Certified</span>
                </div>
                <p className="text-base font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">Azure Administrator Associate</p>
                <p className="text-sm text-slate-600 mt-1 font-medium">AZ-104</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" }}
              className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-teal-200/50 flex flex-row items-center gap-6 shadow-lg shadow-teal-500/10 transition-all duration-300 overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-emerald-50/60 to-green-50/80 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />

              <div className="relative flex-shrink-0 p-3 bg-white/80 rounded-xl shadow-sm">
                <img src="/aws-cert-badge.png" alt="AWS Solutions Architect Associate" className="w-20 h-20 object-contain" />
              </div>
              <div className="relative text-left flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="font-bold text-slate-900 text-lg">AWS Certified</span>
                </div>
                <p className="text-base font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">Solutions Architect Associate</p>
                <p className="text-sm text-slate-600 mt-1 font-medium">SAA-C03</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Core Technologies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)"
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-300 cursor-pointer"
              >
                <s.icon className="w-6 h-6 text-emerald-600 mb-2 transition-colors group-hover:text-emerald-700" />
                <span className="font-medium text-slate-900 text-xs">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section id="projects">
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
            <ProjectCard key={i} index={i} {...p} />
          ))}
        </div>
      </Section>

      <Section id="experience">
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
            <p className="text-slate-500 font-medium">Team Back Office, Phase 2, 5th floor, Hilite Business Park Kozhikode</p>
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
            <p className="text-slate-500 font-medium">Federal Bank, Fedserv, Kakkanad</p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
              <li>Resolved <strong>95%</strong> of production incidents as a liaison between support & engineering.</li>
              <li>Standardized incident workflows, reducing MTTR by 35%.</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Education</h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-slate-200 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-white" />
            <span className="text-sm font-semibold text-accent tracking-wider uppercase">2024</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">DevOps & Cloud Engineering Training</h3>
            <p className="text-slate-500 font-medium">CloudThat, Bengaluru</p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
              <li>Comprehensive training in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines</li>
              <li>Hands-on experience with infrastructure as code using Terraform and Ansible</li>
              <li>Real-world projects involving cloud architecture, automation, and monitoring</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-slate-200 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white" />
            <span className="text-sm font-semibold text-slate-400 tracking-wider uppercase">2019 – 2023</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Bachelor of Technology (B.Tech)</h3>
            <p className="text-slate-500 font-medium">Electronics and Communication Engineering (ECE)</p>
            <p className="text-slate-500">Vidya Academy of Science and Technology</p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
              <li>Graduated with strong analytical and problem-solving skills</li>
              <li>Developed interest in automation and technology during coursework</li>
              <li>Transitioned to DevOps and Cloud Engineering post-graduation</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Emerald Cave Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 px-6 text-white min-h-[500px]">
        {/* Cave ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-emerald-900/10 to-emerald-950/20" />

        {/* Random scattered emerald crystals - creating cave effect */}

        {/* Top left cluster - small crystals */}
        <div className="absolute top-[10%] left-[5%] w-16 h-24 opacity-40" style={{ transform: 'rotate(-15deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700"
            style={{
              clipPath: 'polygon(50% 0%, 20% 30%, 30% 100%, 70% 100%, 80% 30%)',
              filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))'
            }} />
        </div>

        <div className="absolute top-[8%] left-[12%] w-12 h-20 opacity-35" style={{ transform: 'rotate(25deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-400 to-teal-600"
            style={{
              clipPath: 'polygon(50% 0%, 15% 35%, 25% 100%, 75% 100%, 85% 35%)',
              filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))'
            }} />
        </div>

        {/* Top right cluster */}
        <div className="absolute top-[15%] right-[8%] w-20 h-28 opacity-45" style={{ transform: 'rotate(10deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-teal-400 to-emerald-600"
            style={{
              clipPath: 'polygon(50% 0%, 18% 28%, 28% 100%, 72% 100%, 82% 28%)',
              filter: 'drop-shadow(0 0 18px rgba(16, 185, 129, 0.7))'
            }} />
        </div>

        <div className="absolute top-[12%] right-[16%] w-14 h-22 opacity-38" style={{ transform: 'rotate(-20deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-500 to-emerald-700"
            style={{
              clipPath: 'polygon(50% 0%, 22% 32%, 32% 100%, 68% 100%, 78% 32%)',
              filter: 'drop-shadow(0 0 14px rgba(20, 184, 166, 0.55))'
            }} />
        </div>

        {/* Middle scattered crystals */}
        <div className="absolute top-[35%] left-[18%] w-24 h-32 opacity-50" style={{ transform: 'rotate(8deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700"
            style={{
              clipPath: 'polygon(50% 0%, 15% 25%, 20% 100%, 80% 100%, 85% 25%)',
              filter: 'drop-shadow(0 0 22px rgba(16, 185, 129, 0.8))'
            }} />
        </div>

        <div className="absolute top-[40%] right-[22%] w-18 h-26 opacity-42" style={{ transform: 'rotate(-12deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-400 to-teal-600"
            style={{
              clipPath: 'polygon(50% 0%, 20% 30%, 28% 100%, 72% 100%, 80% 30%)',
              filter: 'drop-shadow(0 0 16px rgba(20, 184, 166, 0.65))'
            }} />
        </div>

        <div className="absolute top-[38%] left-[45%] w-16 h-24 opacity-48" style={{ transform: 'rotate(18deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-800"
            style={{
              clipPath: 'polygon(50% 0%, 18% 32%, 26% 100%, 74% 100%, 82% 32%)',
              filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.75))'
            }} />
        </div>

        {/* Bottom larger crystals - cave floor */}
        <div className="absolute bottom-[5%] left-[8%] w-32 h-48 opacity-65" style={{ transform: 'rotate(-8deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-900"
            style={{
              clipPath: 'polygon(50% 0%, 12% 22%, 18% 100%, 82% 100%, 88% 22%)',
              filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 1))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-emerald-100/20 to-transparent"
            style={{ clipPath: 'polygon(50% 0%, 40% 15%, 50% 35%, 60% 15%)' }} />
        </div>

        <div className="absolute bottom-[8%] left-[25%] w-28 h-40 opacity-60" style={{ transform: 'rotate(12deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-500 to-teal-800"
            style={{
              clipPath: 'polygon(50% 0%, 15% 25%, 22% 100%, 78% 100%, 85% 25%)',
              filter: 'drop-shadow(0 0 28px rgba(20, 184, 166, 0.95))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-teal-100/15 to-transparent"
            style={{ clipPath: 'polygon(50% 0%, 42% 18%, 50% 32%, 58% 18%)' }} />
        </div>

        <div className="absolute bottom-[3%] right-[28%] w-36 h-52 opacity-70" style={{ transform: 'rotate(-5deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-teal-500 to-emerald-800"
            style={{
              clipPath: 'polygon(50% 0%, 10% 20%, 15% 100%, 85% 100%, 90% 20%)',
              filter: 'drop-shadow(0 0 35px rgba(16, 185, 129, 1.1))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-emerald-100/25 to-transparent"
            style={{ clipPath: 'polygon(50% 0%, 38% 12%, 50% 28%, 62% 12%)' }} />
        </div>

        <div className="absolute bottom-[10%] right-[12%] w-30 h-44 opacity-62" style={{ transform: 'rotate(15deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-600 to-emerald-900"
            style={{
              clipPath: 'polygon(50% 0%, 14% 24%, 20% 100%, 80% 100%, 86% 24%)',
              filter: 'drop-shadow(0 0 32px rgba(20, 184, 166, 1.05))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/28 via-teal-100/18 to-transparent"
            style={{ clipPath: 'polygon(50% 0%, 40% 16%, 50% 30%, 60% 16%)' }} />
        </div>

        {/* Additional small scattered crystals for depth */}
        <div className="absolute top-[25%] left-[35%] w-10 h-16 opacity-32" style={{ transform: 'rotate(-25deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700"
            style={{
              clipPath: 'polygon(50% 0%, 25% 35%, 35% 100%, 65% 100%, 75% 35%)',
              filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))'
            }} />
        </div>

        <div className="absolute top-[50%] right-[38%] w-12 h-18 opacity-36" style={{ transform: 'rotate(22deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-400 to-teal-600"
            style={{
              clipPath: 'polygon(50% 0%, 22% 33%, 32% 100%, 68% 100%, 78% 33%)',
              filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.55))'
            }} />
        </div>

        <div className="absolute bottom-[25%] left-[60%] w-14 h-20 opacity-40" style={{ transform: 'rotate(-18deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-800"
            style={{
              clipPath: 'polygon(50% 0%, 20% 30%, 30% 100%, 70% 100%, 80% 30%)',
              filter: 'drop-shadow(0 0 14px rgba(16, 185, 129, 0.6))'
            }} />
        </div>

        <div className="absolute top-[55%] left-[72%] w-11 h-17 opacity-34" style={{ transform: 'rotate(28deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-700"
            style={{
              clipPath: 'polygon(50% 0%, 24% 34%, 34% 100%, 66% 100%, 76% 34%)',
              filter: 'drop-shadow(0 0 11px rgba(20, 184, 166, 0.52))'
            }} />
        </div>

        {/* Glowing emerald pool at bottom for cave floor effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-500/15 via-emerald-400/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 80%)'
          }} />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Dark backdrop for better text readability */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm rounded-3xl -mx-8 -my-8" />

          <div className="relative z-20 py-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
            >
              Ready to scale your{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                infrastructure?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-200 max-w-2xl mx-auto mb-10 text-lg"
              style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}
            >
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={handleContact}
              className="btn-primary shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-shadow"
            >
              Say Hello
            </motion.button>
            <div className="mt-16 pt-8 border-t border-emerald-400/30 text-slate-300 text-sm" style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.5)' }}>
              © {new Date().getFullYear()} Harikrishnan P R. Built with React + Tailwind.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
