import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather-app.jpg';
import bookstore from '../../assets/book-store.jpg';
import codenest from '../../assets/Codenest.jpg';
import devDet from '../../assets/new.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/Samarth320/Weather-website"
          h3="ClimaTech"
          p=" Real-Time Forecast"
        />
        <ProjectCard
          src={bookstore}
          link="https://github.com/Samarth320/book_store_frontend_deploy"
          h3="BookVerse"
          p="Digital Library"
        />
        <ProjectCard
          src={codenest}
          link="https://github.com/Samarth320/StudyNotion"
          h3="  CodeNest"
          p="E-learning Platform"
        />
        <ProjectCard
          src={devDet}
          link="https://github.com/Samarth320/Dev_detective_application"
          h3="Dev-detective"
          p="Finds Github Profile"
        />
      </div>
    </section>
  );
}

export default Projects;
