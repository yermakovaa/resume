import s from './Education.module.css';

function Education({ university, label, time, link }) {
  return (
    <li className={s.item}>
      <p className={s.university}>{university}</p>
      <a href={link} className={s.education} target="_blank" rel="noreferrer">
        {label}
      </a>
      <span className={s.time}>
        {time}
        <span className={s.divider}> |</span> Ukraine
      </span>
    </li>
  );
}

export default Education;
