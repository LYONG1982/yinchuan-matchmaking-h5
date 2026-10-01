import styles from "../cooperation.module.css";

export function SectionHeader({ number, title, children }: {
  number: string; title: string[]; children?: React.ReactNode;
}) {
  return <header className={styles.sectionHeader}>
    <span className={styles.sectionNumber} aria-hidden="true">{number}</span>
    <div className={styles.sectionHeading}>
      <h2>{title.map((line) => <span key={line}>{line}</span>)}</h2>
      {children && <div className={styles.sectionIntro}>{children}</div>}
    </div>
  </header>;
}
