// components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section id='Aboutme' style={styles.aboutSection}>
      <div style={styles.contentWrapper}>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>About Me</h2>
          {/* <p style={styles.description}>
            Hi, I'm Mahmoud Amr, a passionate front-end developer with a strong background in creating responsive and user-friendly web applications. With experience in HTML, CSS, JavaScript, and modern frameworks like React and Angular, I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm always eager to learn new skills and take on new challenges.
          </p>
          <p style={styles.description}>
            Outside of work, I love exploring the latest tech trends, contributing to open-source projects, and spending time on personal projects. Whether it's building a new feature, optimizing performance, or enhancing the user experience, I’m always up for the challenge!
          </p> */}
          <p style={styles.description}>
  Hi, I'm Mahmoud Amr Hassan — a Data Engineer and Full-Stack Developer with a deep interest in building data solutions and scalable applications. With experience in technologies like React, Angular, Django, Flask, Power BI, Azure, and Apache Spark, I specialize in designing end-to-end pipelines, dashboards, and web-based platforms that solve real-world problems.
</p>
<p style={styles.description}>
  I’m certified by IBM, Google, and NTI in areas like data analytics, software engineering, and cloud architecture. Whether I’m developing ETL workflows, creating RESTful APIs, or designing interactive UIs, I bring both technical precision and creative thinking to every project.
</p>
<p style={styles.description}>
  Outside the codebase, I enjoy collaborating with teams, mentoring peers, and staying updated on the latest trends in data science and web development. I'm always curious, always building — and always hungry to learn more.
</p>

        </div>
        <div style={styles.imageContainer}>
          <img
            src="/imges/img.jpeg"
            alt="Mahmoud Amr Hassan"
            style={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};
const styles = {
  aboutSection: {
    padding: '4rem 2rem',
    backgroundColor: '#0f0f23',
    color: '#fff',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  textContainer: {
    flex: 1,
    marginRight: '2rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  imageContainer: {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'center',
  },
  profileImage: {
    borderRadius: '50%',
    width: '100%',
    maxWidth: '200px',
  },
};
export default AboutMe;
