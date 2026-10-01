import { brandValues } from "../content";
import { BrandExperienceSection } from "./brand-experience-section";
import { RelationshipAudienceSection } from "./relationship-audience-section";
import { SpreadStory } from "./spread-story";
import styles from "../cooperation.module.css";

export function ValueBlock({ item, index }: { item: (typeof brandValues)[number]; index: number }) {
  if (item.id === "experience") return <BrandExperienceSection />;
  if (item.id === "audience") return <RelationshipAudienceSection />;
  if (item.id === "spread") return <SpreadStory />;

  return <article className={styles.valueBlock} data-cooperation-reveal>
    <div className={styles.valueKicker} aria-hidden="true"><span>0{index + 1}</span><span /></div>
    <h3>{item.title}</h3>
    <div className={styles.valueText}>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    {item.tags && <ul className={styles.audienceTags}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
    {item.steps && <ol className={styles.propagationChain}>{item.steps.map((step, stepIndex) => <li key={step}><span aria-hidden="true">0{stepIndex + 1}</span><span>{step}</span>{stepIndex < item.steps!.length - 1 && <b aria-hidden="true">↓</b>}</li>)}</ol>}
  </article>;
}
