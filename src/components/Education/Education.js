import s from './Education.module.css';

function Education({ university, label, time, experience }) {
  return (
    <li className={s.item}>
      <p className={s.university}>{university}</p>
      <p className={s.education}>{label}</p>
      <span className={s.time}>
        {time}
        <span className={s.divider}> |</span> Ukraine
      </span>
      {experience && (
        <ul className={s.list}>
          {experience.map(({ id, label }) => (
            <li key={id}>{label}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Education;
