import { cooperationModes } from "../content";
import styles from "../cooperation.module.css";

export function CooperationBlock({ item, index }: { item: (typeof cooperationModes)[number]; index: number }) {
  return <article className={styles.cooperationBlock} data-cooperation-reveal>
    <div className={styles.cooperationHeading}><span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3></div>
    <p className={styles.cooperationIntro}>{item.intro}</p>
    {item.description && <p className={styles.cooperationDescription}>{item.description}</p>}
    {item.items.length > 0 && <ul className={styles.cooperationItems}>{item.items.map((item) => <li key={item}>{item}</li>)}</ul>}
  </article>;
}
