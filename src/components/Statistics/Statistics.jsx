import css from './Statistics.module.css'

export const Statistics = ({ title, stats}) => {
  return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(({id, label, percentage}) => {
            return (
              <li key={id} className={css.item}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}&#37;</span>
              </li>
            );
          })}
        </ul>
      </section>
  );
};
