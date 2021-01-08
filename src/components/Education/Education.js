import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.university}>Donetsk State University of Management</p>
      <p className={s.education}>Finance and credit</p>
      <span className={s.time}>
        Septermber 2015 - January 2017
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default Education;
