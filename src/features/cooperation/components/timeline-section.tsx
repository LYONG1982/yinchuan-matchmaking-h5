import { relationshipScenes } from "../content";
import { SectionHeader } from "./section-header";
import { SceneImage } from "./scene-image";
import styles from "../cooperation.module.css";

export function TimelineSection() {
  return <section id="scenes" className={styles.timelineSection}>
    <SectionHeader number="03" title={["品牌可以进入", "哪些场景"]}>
      <p>从第一次相遇，到未来的幸福生活，品牌可以参与其中的很多重要时刻。</p>
    </SectionHeader>
    <div className={styles.timeline}>
      <svg className={styles.riverLine} width="38" height="1000" viewBox="0 0 38 1000" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M19 0 C-5 80 41 115 19 200 S-2 327 19 400 S39 524 19 600 S-3 722 19 800 S36 926 19 1000" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" /></svg>
      {relationshipScenes.map((scene, index) => <article key={scene.id} className={styles.timelineNode} data-cooperation-reveal>
        <span className={styles.timelineDot} aria-hidden="true" />
        <div className={styles.timelineHeading}><h3>{scene.title}</h3><span aria-hidden="true">0{index + 1}</span></div>
        <p className={styles.timelineSubtitle}>{scene.subtitle.map((line) => <span key={line}>{line}</span>)}</p>
        <figure className={styles.timelineFigure}><SceneImage image={scene.image} /></figure>
        <p className={styles.scenesLabel}>品牌可以在这里相遇</p>
        <ul className={styles.sceneCategories}>{scene.categories.map((category) => <li key={category}>{category}</li>)}</ul>
      </article>)}
    </div>
    <p className={styles.timelineClosing}>从一次相遇，<br />走进生活的更多可能。</p>
  </section>;
}
