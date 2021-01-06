import s from './SoftSkills.module.css';

function SoftSkills({ label }) {
  return (
    <li className={s.item}>
      <span className={s.text}>{label}</span>
    </li>
  );
}

export default SoftSkills;
