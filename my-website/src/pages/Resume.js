import { motion } from "framer-motion";
import { GlassCard, PageWrapper, PDFViewer } from "../components";
import "../styles/Resume.scss";

const Resume = () => {
  return (
    <PageWrapper className="resume-page">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Resume</h1>
        <p className="page-subtitle">My professional experience and qualifications</p>
      </motion.div>

      <GlassCard delay={0.2} className="resume-card" hover={false}>
        <PDFViewer url="https://vans-website.s3.amazonaws.com/Awesome_CV.pdf" />
      </GlassCard>
    </PageWrapper>
  );
};

export default Resume;
