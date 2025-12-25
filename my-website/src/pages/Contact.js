import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { GlassCard, PageWrapper } from "../components";
import "../styles/Contact.scss";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "wadvan987@gmail.com",
    href: "mailto:wadvan987@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 (825) 365-8447",
    href: "tel:+18253658447",
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

const Contact = () => {
  return (
    <PageWrapper className="contact-page page-wrapper--centered">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Feel free to reach out for opportunities or just a friendly hello!
        </p>
      </motion.div>

      <GlassCard delay={0.2} className="contact-card">
        <div className="contact-grid">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="contact-item"
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="contact-icon">
                <contact.icon />
              </div>
              <div className="contact-info">
                <span className="contact-label">{contact.label}</span>
                <span className="contact-value">{contact.value}</span>
              </div>
              <div className="contact-arrow">&#8594;</div>
            </motion.a>
          ))}
        </div>
      </GlassCard>
    </PageWrapper>
  );
};

export default Contact;
