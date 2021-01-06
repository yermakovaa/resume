import Projects from '../Projects';
import s from './AboutMe.module.css';

function AboutMe({ projects }) {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <h2 className={s.profession}>Front-End Developer</h2>
        <h1 className={s.name}>Anastasiia Yermakova</h1>
        <p className={s.description}>
          Hey 👋. Looking for a job for the position of Frontend Web Developer
          (React). I am constantly learning new things and having fun writing
          code. I dream of working in the IT field and I will do everything for
          this.
        </p>
      </div>
      <div className={s.projects}>
        <h3 className={s.title}>Projects</h3>
        <ol>
          {projects.map(({ id, label, link, tech }) => (
            <Projects key={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AboutMe;
