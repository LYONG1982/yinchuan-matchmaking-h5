import { activityFeatures } from "../content";
import { SceneImage } from "./scene-image";
import styles from "../cooperation.module.css";

export function StoryBlock({ item, index }: { item: (typeof activityFeatures)[number]; index: number }) {
  const laboratory = item.image === "lab";
  return <article className={`${styles.storyBlock} ${laboratory ? styles.laboratory : ""}`} data-cooperation-reveal>
    <div className={styles.storyCopy}>
      <div className={styles.storyLabel}><span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3></div>
      <p className={styles.storyCore}>{item.core.map((line) => <span key={line}>{line}</span>)}</p>
      <p className={styles.storyBody}>{item.body}</p>
    </div>
    <figure className={`${styles.storyFigure} ${item.image === "brand" ? styles.brandFigure : ""}`}>
      <SceneImage image={item.image} />
      {laboratory && <figcaption className={styles.labPath}><span>扫码互动</span><b aria-hidden="true">→</b><span>双向确认</span><b aria-hidden="true">→</b><span>真实见面</span></figcaption>}
    </figure>
  </article>;
}
