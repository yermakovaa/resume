import s from './Education.module.css';

function Education({ university, label, time }) {
  return (
    <li className={s.item}>
      <p className={s.university}>{university}</p>
      <p className={s.education}>{label}</p>
      <span className={s.time}>
        {time}
        <span className={s.divider}> |</span> Ukraine
      </span>
    </li>
  );
}

export default Education;
