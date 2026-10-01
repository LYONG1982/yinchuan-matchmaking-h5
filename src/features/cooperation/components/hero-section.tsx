import { eventInfo } from "../content";
import { SceneImage } from "./scene-image";
import styles from "../cooperation.module.css";

export function HeroSection() {
  return <section id="hero" data-testid="hero" className={styles.hero} aria-label="第二届万人相亲大会招商合作">
    <SceneImage image="hero" className={styles.heroImage} priority />
    <div className={styles.heroShade} aria-hidden="true" />
    <div className={styles.heroTop}><span className={styles.invitationLabel}>招商合作</span><span>银川 · 金秋</span></div>
    <div className={styles.heroTitle}>
      <p className={styles.heroPrelude}>一座城，一场相遇。</p>
      <h1><span className={styles.edition}>第二届</span><span>万人相亲大会</span></h1>
      <p className={styles.heroTagline}>{eventInfo.tagline}</p>
      <div className={styles.goldRule} aria-hidden="true" />
      <p className={styles.heroDefinition}>银川大型城市青年<br />婚恋交友与社交体验活动</p>
    </div>
    <div className={styles.heroBottom}>
      <p className={styles.heroDate}>{eventInfo.date}</p>
      <p className={styles.heroVenue}>{eventInfo.venue}</p>
      <a className={styles.scrollCue} href="#event-info"><span>向下了解合作价值</span><span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}
