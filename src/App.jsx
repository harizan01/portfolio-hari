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

      {/* Navigation Menu */}
      <nav className="fixed top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <div className="pointer-events-auto backdrop-blur-md bg-white/50 px-6 py-3 rounded-full border border-white/20 shadow-lg">
          <div className="flex gap-2">
            <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-purple-500 hover:text-white transition-all duration-200">About</a>
            <a href="#projects" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-purple-500 hover:text-white transition-all duration-200">Projects</a>
            <a href="#experience" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-purple-500 hover:text-white transition-all duration-200">Experience</a>
            <a href="#education" className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-purple-500 hover:text-white transition-all duration-200">Education</a>
          </div>
        </div>
      </nav>

      {/* Global Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100 opacity-40"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <Hero onContact={handleContact} />

      {/* Profile Summary - Full Width */}
      <section id="about" className="relative py-24 px-6">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
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
              src="/profile.png"
              alt="Harikrishnan P R"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-64 h-auto md:w-80 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
            <p className="text-slate-500 font-medium">Talrop, Calicut</p>
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
            <p className="text-slate-500 font-medium">Mechanical Engineering</p>
            <p className="text-slate-500">MES College of Engineering, Kuttippuram</p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
              <li>Graduated with strong analytical and problem-solving skills</li>
              <li>Developed interest in automation and technology during coursework</li>
              <li>Transitioned to DevOps and Cloud Engineering post-graduation</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Asymmetric Emerald Cave Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-6 text-white min-h-[500px]">
        {/* Glowing emerald pool at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-emerald-500/25 via-emerald-400/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(16, 185, 129, 0.3) 0%, rgba(20, 184, 166, 0.15) 40%, transparent 70%)'
          }} />

        {/* Asymmetric emerald crystals - extending from below footer */}

        {/* Crystal 1 - far left, very tall */}
        <div className="absolute bottom-[-120px] left-[3%] w-52 h-[720px]" style={{ transform: 'perspective(900px) rotateY(-8deg) rotateZ(1deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 opacity-95"
            style={{
              clipPath: 'polygon(50% 0%, 4% 22%, 7% 100%, 50% 96%)',
              filter: 'drop-shadow(0 0 55px rgba(16, 185, 129, 1.1))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100 via-teal-200 to-emerald-400 opacity-98"
            style={{
              clipPath: 'polygon(50% 0%, 96% 22%, 93% 100%, 50% 96%)',
              filter: 'brightness(1.75)'
            }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-transparent opacity-82"
            style={{ clipPath: 'polygon(50% 0%, 69% 6%, 50% 24%, 31% 6%)' }} />
        </div>

        {/* Crystal 2 - left area, medium */}
        <div className="absolute bottom-[-100px] left-[14%] w-36 h-[520px]" style={{ transform: 'perspective(700px) rotateY(-22deg) rotateZ(7deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 opacity-93"
            style={{
              clipPath: 'polygon(50% 0%, 7% 26%, 11% 100%, 50% 94%)',
              filter: 'drop-shadow(0 0 38px rgba(16, 185, 129, 0.88))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-200 via-teal-300 to-emerald-500 opacity-96"
            style={{
              clipPath: 'polygon(50% 0%, 93% 26%, 89% 100%, 50% 94%)',
              filter: 'brightness(1.58)'
            }} />
          <div className="absolute inset-0 bg-white opacity-68"
            style={{ clipPath: 'polygon(50% 0%, 66% 11%, 50% 33%, 34% 11%)' }} />
        </div>

        {/* Crystal 3 - left-center, tall */}
        <div className="absolute bottom-[-130px] left-[23%] w-44 h-[680px]" style={{ transform: 'perspective(850px) rotateY(11deg) rotateZ(-3deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-emerald-300 to-teal-500 opacity-97"
            style={{
              clipPath: 'polygon(50% 0%, 3% 20%, 5% 100%, 50% 97%)',
              filter: 'brightness(1.72) drop-shadow(0 0 52px rgba(20, 184, 166, 1.05))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-400 via-teal-500 to-emerald-700 opacity-95"
            style={{
              clipPath: 'polygon(50% 0%, 97% 20%, 95% 100%, 50% 97%)'
            }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50 to-transparent opacity-84"
            style={{ clipPath: 'polygon(50% 0%, 71% 5%, 50% 22%, 29% 5%)' }} />
        </div>

        {/* Crystal 4 - center-left, medium-small */}
        <div className="absolute bottom-[-90px] left-[42%] w-28 h-[420px]" style={{ transform: 'perspective(650px) rotateY(-16deg) rotateZ(9deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600 opacity-91"
            style={{
              clipPath: 'polygon(50% 0%, 9% 29%, 13% 100%, 50% 93%)',
              filter: 'drop-shadow(0 0 32px rgba(16, 185, 129, 0.8))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100 via-teal-200 to-emerald-400 opacity-94"
            style={{
              clipPath: 'polygon(50% 0%, 91% 29%, 87% 100%, 50% 93%)',
              filter: 'brightness(1.52)'
            }} />
        </div>

        {/* Crystal 5 - center-right, very tall */}
        <div className="absolute bottom-[-150px] right-[42%] w-56 h-[780px]" style={{ transform: 'perspective(950px) rotateY(19deg) rotateZ(-5deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-emerald-200 to-teal-400 opacity-98"
            style={{
              clipPath: 'polygon(50% 0%, 2% 19%, 4% 100%, 50% 98%)',
              filter: 'brightness(1.78) drop-shadow(0 0 60px rgba(16, 185, 129, 1.25))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-400 via-teal-500 to-emerald-700 opacity-96"
            style={{
              clipPath: 'polygon(50% 0%, 98% 19%, 96% 100%, 50% 98%)'
            }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50 to-transparent opacity-86"
            style={{ clipPath: 'polygon(50% 0%, 72% 4%, 50% 20%, 28% 4%)' }} />
        </div>

        {/* Crystal 6 - right area, medium */}
        <div className="absolute bottom-[-110px] right-[29%] w-38 h-[580px]" style={{ transform: 'perspective(750px) rotateY(-13deg) rotateZ(4deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-400 to-emerald-600 opacity-94"
            style={{
              clipPath: 'polygon(50% 0%, 6% 24%, 9% 100%, 50% 95%)',
              filter: 'drop-shadow(0 0 42px rgba(20, 184, 166, 0.92))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-100 via-emerald-200 to-teal-400 opacity-97"
            style={{
              clipPath: 'polygon(50% 0%, 94% 24%, 91% 100%, 50% 95%)',
              filter: 'brightness(1.64)'
            }} />
          <div className="absolute inset-0 bg-white opacity-72"
            style={{ clipPath: 'polygon(50% 0%, 68% 9%, 50% 30%, 32% 9%)' }} />
        </div>

        {/* Crystal 7 - far right, tall */}
        <div className="absolute bottom-[-125px] right-[11%] w-48 h-[700px]" style={{ transform: 'perspective(880px) rotateY(14deg) rotateZ(-2deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-800 opacity-95"
            style={{
              clipPath: 'polygon(50% 0%, 5% 21%, 8% 100%, 50% 96%)',
              filter: 'drop-shadow(0 0 48px rgba(16, 185, 129, 1))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100 via-teal-200 to-emerald-400 opacity-98"
            style={{
              clipPath: 'polygon(50% 0%, 95% 21%, 92% 100%, 50% 96%)',
              filter: 'brightness(1.7)'
            }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-transparent opacity-80"
            style={{ clipPath: 'polygon(50% 0%, 70% 7%, 50% 26%, 30% 7%)' }} />
        </div>

        {/* Crystal 8 - very far right edge, small accent */}
        <div className="absolute bottom-[-80px] right-[2%] w-32 h-[460px]" style={{ transform: 'perspective(680px) rotateY(25deg) rotateZ(-8deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-400 to-emerald-600 opacity-92"
            style={{
              clipPath: 'polygon(50% 0%, 10% 28%, 14% 100%, 50% 92%)',
              filter: 'drop-shadow(0 0 35px rgba(20, 184, 166, 0.85))'
            }} />
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-100 via-emerald-200 to-teal-400 opacity-95"
            style={{
              clipPath: 'polygon(50% 0%, 90% 28%, 86% 100%, 50% 92%)',
              filter: 'brightness(1.56)'
            }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
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
            className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg"
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
          <div className="mt-16 pt-8 border-t border-emerald-400/20 text-slate-400 text-sm">
            © {new Date().getFullYear()} Harikrishnan P R. Built with React + Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
