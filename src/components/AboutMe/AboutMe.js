import Projects from '../Projects';
import Experience from '../Experience';
import s from './AboutMe.module.css';

function AboutMe({ projects, experience }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Front-End Developer</h2>
        <h1 className={s.name}>Anastasiia Yermakova</h1>
        <p className={s.description}>
          Hey 👋. Looking for a job for the position of Frontend Web Developer
          (React). I want to be in a good team, where I could improve my skills
          and use them for interesting tasks. I am a fast learner, responsible,
          ready for hard tasks.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>
        <ol>
          {projects.map(({ id, label, link, tech }) => (
            <Projects key={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
