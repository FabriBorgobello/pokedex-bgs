import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p className={styles.Creator}>Fabricio Borgobello</p>
      <div className={styles.Social}>
        <a
          href="https://www.linkedin.com/in/fabriborgobello/"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLink}
          aria-label='linkedin'
        >
          <i className="fab fa-linkedin fa-lg" />
        </a>
        <a href="https://github.com/fabriborgobello" target="_blank" rel="noreferrer" className={styles.SocialLink} aria-label='github'>
          <i className="fab fa-github-square fa-lg" />
        </a>
        <a href="mailto:fborgobello@gmail.com" target="_blank" rel="noreferrer" className={styles.SocialLink} aria-label='email'>
          <i className="fas fa-envelope-square fa-lg" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
