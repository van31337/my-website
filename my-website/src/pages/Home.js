import { motion } from "framer-motion";
import { GlassCard, PageWrapper } from "../components";
import "../styles/Home.scss";

const Home = () => {
  return (
    <PageWrapper className="home-page">
      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="greeting">Hello, I'm</span>
            <span className="name">Van Tran</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Database Administrator & Software Developer
          </motion.p>
        </motion.div>
      </div>

      <div className="cards-grid">
        <GlassCard delay={0.3} className="info-card">
          <h2 className="card-title">
            <span className="icon">&#128187;</span> Professional
          </h2>
          <div className="card-body">
            <p>
              <span className="bullet">&#9733;</span>
              Honours Computer Science degree from University of Calgary and DBA
              certificate from SAIT. Strong background in Mathematics, Statistics,
              and Data Science.
            </p>
            <p>
              <span className="bullet">&#9733;</span>
              Passionate about data-related fields: Database Administration,
              Machine Learning, Data Analysis, and more.
            </p>
            <p>
              <span className="bullet">&#9733;</span>
              Detail-oriented, honest, and always ready to tackle challenges
              head-on. I believe the best learning comes from solving hard problems.
            </p>
          </div>
        </GlassCard>

        <GlassCard delay={0.5} className="info-card">
          <h2 className="card-title">
            <span className="icon">&#128578;</span> Personal
          </h2>
          <div className="card-body">
            <p>
              <span className="bullet">&#9733;</span>
              Friends describe me as hilarious, friendly, and open-minded.
              I love jokes, puns, and especially memes!
            </p>
            <p>
              <span className="bullet">&#9733;</span>
              Animal lover with a motto: "If not friend, why friend shaped?"
            </p>
            <div className="pet-gallery">
              <p className="gallery-label">My lovely dog:</p>
              <div className="gallery-images">
                {[1, 2, 3, 4].map((num) => (
                  <motion.img
                    key={num}
                    src={`https://vans-website.s3.amazonaws.com/${num}.jpg`}
                    alt={`Pet photo ${num}`}
                    className="pet-image"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageWrapper>
  );
};

export default Home;
