import { brandExperienceContent, brandExperienceStories, type BrandExperienceStory as BrandExperienceStoryData } from "../content";
import { SceneImage } from "./scene-image";
import styles from "../cooperation.module.css";

function BrandExperienceStory({ story, index }: { story: BrandExperienceStoryData; index: number }) {
  return <li className={styles.brandExperienceStory} data-story={story.id} data-brand-motion-group="story">
    <div className={styles.brandExperienceHeading}>
      <span aria-hidden="true" data-brand-motion="number">0{index + 1}</span>
      <h4 data-brand-motion="heading">{story.title}</h4>
    </div>
    <figure className={styles.brandExperienceVisual} data-brand-motion="image">
      <SceneImage image={story.image} />
    </figure>
    <p className={styles.brandExperienceCopy} data-brand-motion="body">{story.description.map((line) => <span key={line}>{line}</span>)}</p>
    <ul className={styles.brandExperienceCategories} aria-label={`${story.title}的品牌类别`} data-brand-motion="tags">
      {story.categories.map((category) => <li key={category}>{category}</li>)}
    </ul>
  </li>;
}

export function BrandExperienceSection() {
  return <article id="brand-experience" className={styles.brandExperience} aria-labelledby="brand-experience-title">
    <header className={styles.brandExperienceHeader} data-brand-motion-group="header">
      <div className={styles.brandExperienceKicker} aria-hidden="true"><span data-brand-motion="number">02</span><i data-brand-motion="rule" /><small>BRAND EXPERIENCE</small></div>
      <h3 id="brand-experience-title">{brandExperienceContent.title.map((line) => <span key={line} data-brand-motion="title">{line}</span>)}</h3>
      <p className={styles.brandExperienceIntro} data-brand-motion="body">{brandExperienceContent.intro.map((line) => <span key={line}>{line}</span>)}</p>
    </header>
    <ol className={styles.brandExperienceStories}>
      {brandExperienceStories.map((story, index) => <BrandExperienceStory key={story.id} story={story} index={index} />)}
    </ol>
    <div className={styles.brandExperienceClosing} data-brand-motion-group="closing">
      <span className={styles.brandExperienceQuote} aria-hidden="true">“</span>
      <p data-brand-motion="body">{brandExperienceContent.closingLead}</p>
      <p className={styles.brandExperienceClosingItems}>而是<br />{brandExperienceContent.closingItems.map((item, index) => <strong key={item} data-brand-motion="keyword">{item}{index < brandExperienceContent.closingItems.length - 1 ? "、" : "。"}</strong>)}</p>
      <svg className={styles.brandExperienceBridge} viewBox="0 0 90 80" fill="none" aria-hidden="true" focusable="false"><path pathLength="1" data-brand-motion="trace" d="M18 0 C18 25 72 26 58 55 S36 66 36 80" stroke="currentColor" /><circle cx="36" cy="78" r="2" fill="currentColor" /></svg>
    </div>
  </article>;
}
