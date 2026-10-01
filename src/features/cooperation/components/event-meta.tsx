import { eventInfo } from "../content";
import styles from "../cooperation.module.css";

export function EventMeta() {
  return <section id="event-info" className={styles.eventMeta} aria-label="活动基本信息">
    <p className={styles.eyebrow}>一场关于年轻人相遇的城市活动</p>
    <dl>
      <div><dt>活动时间</dt><dd>{eventInfo.date}</dd></div>
      <div><dt>活动地点</dt><dd>{eventInfo.venue}</dd></div>
      <div><dt>主办方</dt><dd className={styles.organizer}>{eventInfo.organizer}</dd></div>
    </dl>
    <span className={styles.metaTail} aria-hidden="true">城 · 人 · 相遇</span>
  </section>;
}
