import { contacts, eventInfo } from "../content";
import { SceneImage } from "./scene-image";
import styles from "../cooperation.module.css";

export function ContactCTA() {
  return <section id="contact" className={styles.contact} aria-labelledby="contact-title">
    <SceneImage image="cta" className={styles.contactImage} />
    <div className={styles.contactShade} aria-hidden="true" />
    <div className={styles.contactContent}>
      <p className={styles.contactEyebrow}>让品牌，成为故事的一部分</p>
      <h2 id="contact-title">与我们一起，<br />参与一段<br />关系的开始</h2>
      <div className={styles.contactPoem}>
        <p>一杯咖啡，<br />可能开启第一次聊天；</p>
        <p>一次互动，<br />可能让两个陌生人认识；</p>
        <p>一张照片，<br />可能记录一段关系的开始。</p>
      </div>
      <div className={styles.contactDetails}>
        <p className={styles.contactLabel}>招商合作<span aria-hidden="true">↘</span></p>
        {contacts.map((person) => <div className={styles.contactPerson} key={person.phone}>
          <div className={styles.contactIdentity}><span>{person.name}</span><a className={styles.phoneNumber} href={`tel:${person.phone}`} aria-label={`${person.name}电话 ${person.phone}`}>{person.phone}</a></div>
          <a className={styles.callButton} href={`tel:${person.phone}`}><span>拨打{person.name}</span><span aria-hidden="true">↗</span></a>
        </div>)}
      </div>
      <footer className={styles.footer}><p>{eventInfo.tagline}</p><p>遇见更好的你</p><span aria-hidden="true">—</span><p className={styles.footerOrganizer}>{eventInfo.organizer}</p></footer>
    </div>
  </section>;
}
