import { spreadStoryContent, spreadStages, type SpreadStageData } from "../content";
import { SceneImage } from "./scene-image";
import styles from "./spread-story.module.css";

function SpreadMedia({ image }: { image: SpreadStageData["image"] }) {
  return <div className={styles.mediaVisual} data-brand-motion="image">
    <figure className={styles.mediaSheet} aria-label="照片、短视频与现场故事的传播示意">
      <div className={styles.mediaLabel}><span>现场故事</span><span>传播示意</span></div>
      <SceneImage image={image} />
      <figcaption>照片 · 短视频 · 现场故事</figcaption>
      <div className={styles.mediaRules} aria-hidden="true"><i /><i /></div>
    </figure>
  </div>;
}

function SpreadStage({ stage, index }: { stage: SpreadStageData; index: number }) {
  return <li className={styles.stage} data-spread-stage={stage.id} data-brand-motion-group="story">
    <svg className={styles.stageTrace} viewBox="0 0 14 500" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M7 0 C-1 100 15 165 7 250 S-1 420 7 500" pathLength="1" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" data-brand-motion="trace" />
    </svg>
    <div className={styles.stageHeading}>
      <span data-brand-motion="number" aria-hidden="true">0{index + 1}</span>
      <h4 data-brand-motion="heading">{stage.title}</h4>
    </div>
    <p className={styles.core} data-brand-motion="body">{stage.core.map((line) => <span key={line}>{line}</span>)}</p>
    {stage.id === "media" ? <SpreadMedia image={stage.image} /> : <figure className={styles.visual} data-brand-motion="image"><SceneImage image={stage.image} /></figure>}
    <p className={styles.body} data-brand-motion="body">{stage.body}</p>
    <ul className={styles.tags} aria-label={`${stage.title}的传播形式`} data-brand-motion="tags">{stage.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
  </li>;
}

export function SpreadStory() {
  return <article id="brand-spread" className={styles.spreadRoot} aria-labelledby="brand-spread-title">
    <header className={styles.header} data-brand-motion-group="header">
      <div className={styles.kicker} aria-hidden="true"><span data-brand-motion="number">04</span><i data-brand-motion="rule" /><small>SPREAD TOGETHER</small></div>
      <h3 id="brand-spread-title">{spreadStoryContent.title.map((line, index) => <span key={line} data-brand-motion="title" data-motion-order={index}>{line}</span>)}</h3>
      <p className={styles.intro} data-brand-motion="body">{spreadStoryContent.intro}</p>
    </header>
    <ol className={styles.stages}>{spreadStages.map((stage, index) => <SpreadStage key={stage.id} stage={stage} index={index} />)}</ol>
    <div className={styles.closing} data-brand-motion-group="closing">
      <p className={styles.closingTitle}>{spreadStoryContent.closingTitle.map((line, index) => <span key={line} data-brand-motion="title" data-motion-order={index}>{line}</span>)}</p>
      <p className={styles.closingBody} data-brand-motion="body">{spreadStoryContent.closingBody}</p>
      <svg className={styles.closingTrace} viewBox="0 0 430 90" fill="none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M-5 62 C65 66 125 20 198 35 S343 85 435 20" pathLength="1" stroke="currentColor" strokeWidth="1.25" data-brand-motion="trace" />
        <path d="M80 47 C175 59 260 5 350 36" pathLength="1" stroke="currentColor" strokeWidth="1" data-brand-motion="trace" data-motion-order="1" />
        <circle cx="80" cy="47" r="2.5" fill="currentColor" /><circle cx="198" cy="35" r="3" fill="currentColor" /><circle cx="350" cy="36" r="2.5" fill="currentColor" />
      </svg>
    </div>
  </article>;
}
