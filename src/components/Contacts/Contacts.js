import s from './Contacts.module.css';

function Contacts({ label, link, text, icon }) {
  return (
    <li className={s.contact}>
      <img src={icon} alt={label} width="25" className={s.icon} />
      <a className={s.link} href={link}>
        {text}
      </a>
    </li>
  );
}

export default Contacts;
