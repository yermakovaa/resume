import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import PropTypes from 'prop-types';
import s from './Sidebar.module.css';
import myPhoto from '../../assets/img/photo.jpeg';
import sv from '../../assets/SV.pdf';

function Sidebar({ contacts, techSkills, softSkills }) {
  return (
    <aside className={s.sidebar}>
      <img src={myPhoto} alt="Yermakova Anastasiia" className={s.photo} />
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, link, text }) => (
            <Contacts key={id} link={link} text={text} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Language</h3>
        <p className={s.text}>English - intermediate</p>
      </div>

      <div className={s.section}>
        <a className={s.link} href={sv} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
