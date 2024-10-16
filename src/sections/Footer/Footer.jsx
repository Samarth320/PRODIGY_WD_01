import styles from './FooterStyles.module.css';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';




function Footer() {

  const { theme, toggleTheme } = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id="footer" className={styles.container}>
      <p>
        {/* &copy; 2024 Harris johnsen. <br />
        All rights reserved. */}
        Connect With Me
      </p>
  
      <span>
          <a href="https://x.com/Samarth_320" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Samarth320" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/samarth-bagul-457703259/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>

    </section>
  );
}

export default Footer;
