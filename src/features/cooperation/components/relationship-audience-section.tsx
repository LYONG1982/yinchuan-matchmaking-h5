import { relationshipAudienceContent, relationshipAudienceStages, type RelationshipAudienceStage } from "../content";
import { SceneImage } from "./scene-image";
import styles from "../cooperation.module.css";

function RelationshipStage({ stage, index }: { stage: RelationshipAudienceStage; index: number }) {
  const paths = [
    ["M4 0 C1 25 7 70 4 100", "M20 0 C23 25 17 70 20 100"],
    ["M4 0 C2 35 10 65 10 100", "M20 0 C22 35 14 65 14 100"],
    ["M10 0 C9 35 18 52 12 100", "M14 0 C15 35 6 52 12 100"],
    ["M12 0 C5 35 19 65 12 100"],
  ];
  return <li className={styles.relationshipAudienceStage} data-stage={stage.id} data-brand-motion-group="story">
    <svg className={styles.relationshipAudienceStageTrail} viewBox="0 0 24 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">{paths[index].map((path, order) => <path key={path} d={path} pathLength="1" data-brand-motion="trace" data-motion-order={order} fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />)}</svg>
    <figure className={styles.relationshipAudienceVisual} data-brand-motion="image">
      <SceneImage image={stage.image} />
    </figure>
    <div className={styles.relationshipAudienceHeading}>
      <span aria-hidden="true" data-brand-motion="number">0{index + 1}</span><h4 data-brand-motion="heading">{stage.title}</h4>
    </div>
    {stage.choiceShift ? <div className={styles.relationshipAudienceMoment} data-brand-motion-group="moment">
      <div data-moment-final>
        <p className={styles.relationshipAudienceChoice}><span>我</span><span role="img" aria-label="变成">→</span><strong>我们</strong></p>
        <p className={styles.relationshipAudienceMomentCopy}>消费开始从「我」，<br />变成「我们」。</p>
      </div>
      <div className={styles.relationshipAudienceMomentOverlay} data-moment-overlay hidden aria-hidden="true">
        <span data-moment-first>我</span><span data-moment-second>我</span><strong data-moment-we>我们</strong>
      </div>
    </div> : <p className={styles.relationshipAudienceDescription} data-brand-motion="body">{stage.description.map((line) => <span key={line}>{line}</span>)}</p>}
    <div className={styles.relationshipAudienceNeeds} data-brand-motion="tags">
      <span>此刻的生活需求</span>
      <ul aria-label={`${stage.title}阶段的品牌需求`}>{stage.categories.map((category) => <li key={category}>{category}</li>)}</ul>
    </div>
    <div className={styles.relationshipAudienceValue} data-brand-motion="body">
      <span>品牌价值</span><p>{stage.value}</p>
    </div>
  </li>;
}

export function RelationshipAudienceSection() {
  return <article id="relationship-audience" className={styles.relationshipAudience} aria-labelledby="relationship-audience-title">
    <header className={styles.relationshipAudienceHeader} data-brand-motion-group="header">
      <div className={styles.relationshipAudienceKicker} aria-hidden="true"><span data-brand-motion="number">03</span><i data-brand-motion="rule" /><small>YOUNG AUDIENCE</small></div>
      <h3 id="relationship-audience-title">{relationshipAudienceContent.title.map((line) => <span key={line} data-brand-motion="title">{line}</span>)}</h3>
      <p className={styles.relationshipAudienceIntro} data-brand-motion="body">{relationshipAudienceContent.intro.map((line) => <span key={line}>{line}</span>)}</p>
    </header>
    <div className={styles.relationshipAudienceFlow}>
      <ol className={styles.relationshipAudienceStages}>
        {relationshipAudienceStages.map((stage, index) => <RelationshipStage key={stage.id} stage={stage} index={index} />)}
      </ol>
    </div>
    <div className={styles.relationshipAudienceClosing} data-brand-motion-group="closing">
      <p className={styles.relationshipAudienceClosingTitle}>{relationshipAudienceContent.closingTitle.map((line) => <span key={line} data-brand-motion="title">{line}</span>)}</p>
      <p data-brand-motion="body">{relationshipAudienceContent.closingBody}</p>
      <p className={styles.relationshipAudienceClosingNote} data-brand-motion="body">{relationshipAudienceContent.closingNote}</p>
      <svg className={styles.relationshipAudienceRiver} viewBox="0 0 430 100" fill="none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path pathLength="1" data-brand-motion="trace" d="M-5 8 C80 12 160 70 263 68 C332 66 355 24 435 30" stroke="currentColor" strokeWidth="1.5" />
        <path pathLength="1" data-brand-motion="trace" d="M-5 90 C80 90 160 70 263 68 C332 66 355 24 435 30" stroke="currentColor" strokeWidth="1.5" />
        <path pathLength="1" data-brand-motion="trace" d="M263 68 Q302 60 312 26 M263 68 Q319 73 360 78" stroke="currentColor" strokeWidth="1" />
        <circle cx="263" cy="68" r="3" fill="currentColor" />
        <circle cx="312" cy="26" r="2.5" fill="currentColor" /><circle cx="360" cy="78" r="2.5" fill="currentColor" />
      </svg>
    </div>
  </article>;
}
