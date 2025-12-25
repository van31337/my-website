import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileDownload } from "react-icons/fa";
import { GlassCard } from "../components";
import MarqueeText from "../components/MarqueeText";
import "../styles/sections/ContactSection.scss";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "wadvan987@gmail.com",
    href: "mailto:wadvan987@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone (CA)",
    value: "+1 (825) 365-8447",
    href: "tel:+18253658447",
  },
  {
    icon: FaPhone,
    label: "Phone (VN)",
    value: "+84 906 908 300",
    href: "tel:+84906908300",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "van31337",
    href: "https://github.com/van31337",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "van-tran-1324b1174",
    href: "https://www.linkedin.com/in/van-tran-1324b1174/",
  },
];

const skillsRow1 = [
  "MySQL",
  "SQL Server",
  "PostgreSQL",
  "Python",
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "Linux",
  "PowerShell",
];

const skillsRow2 = [
  "Database Optimization",
  "Data Engineering",
  "Machine Learning",
  "ETL Pipelines",
  "System Architecture",
  "Performance Tuning",
  "High Availability",
  "Disaster Recovery",
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="contact-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for opportunities or just a friendly hello!
        </p>
      </motion.div>

      {/* Skills Marquee Card */}
      <motion.div
        className="marquee-card-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GlassCard className="marquee-card" hover={false} delay={0}>
          <p className="marquee-label">Technologies & Skills</p>
          <MarqueeText items={skillsRow1} direction="left" speed={20} />
          <MarqueeText items={skillsRow2} direction="right" speed={25} />
        </GlassCard>
      </motion.div>

      {/* Resume Download */}
      <motion.div
        className="resume-download-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <motion.a
          href="/Van_Tran_Resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload />
          <span>View Resume</span>
        </motion.a>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="contact-card" delay={0}>
          <div className="contact-grid">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                className="contact-item"
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "rgba(0, 255, 0, 0.1)" }}
              >
                <div className="contact-icon">
                  <contact.icon />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
                <div className="contact-arrow">→</div>
              </motion.a>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p>© 2025 Van Tran. Built with React & Framer Motion.</p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
