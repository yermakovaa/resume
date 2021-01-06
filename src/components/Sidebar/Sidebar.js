import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import s from './Sidebar.module.css';
import myPhoto from '../../img/photo.jpeg';

function Sidebar({ contacts, techSkills, softSkills }) {
  return (
    <aside className={s.sidebar}>
      <img src={myPhoto} alt="Yermakova Anastasiia" />
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, label, link, text, icon }) => (
            <Contacts
              key={id}
              label={label}
              link={link}
              text={text}
              icon={icon}
            />
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
    </aside>
  );
}

export default Sidebar;
