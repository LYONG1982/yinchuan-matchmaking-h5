import { partnerCategories } from "../content";
import styles from "../cooperation.module.css";

export function PartnerCategory({ item, index }: { item: (typeof partnerCategories)[number]; index: number }) {
  return <article className={styles.partnerCategory} data-cooperation-reveal>
    <span className={styles.partnerIndex} aria-hidden="true">0{index + 1}</span>
    <div><h3>{item.title}</h3><ul className={styles.partnerTags}>{item.categories.map((category) => <li key={category}>{category}</li>)}</ul><p>{item.description}</p></div>
  </article>;
}
