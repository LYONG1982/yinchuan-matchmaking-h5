import { HeroSection } from "./components/hero-section";
import { EventMeta } from "./components/event-meta";
import { ContactCTA } from "./components/contact-cta";
import { StickyContactBar } from "./components/sticky-contact-bar";
import { ReadingEffects } from "./components/reading-effects";
import { BrandStoryMotion } from "./components/brand-story-motion";
import { SectionHeader } from "./components/section-header";
import { StoryBlock } from "./components/story-block";
import { ValueBlock } from "./components/value-block";
import { TimelineSection } from "./components/timeline-section";
import { PartnerCategory } from "./components/partner-category";
import { CooperationBlock } from "./components/cooperation-block";
import { activityFeatures, brandValues, partnerCategories, cooperationModes } from "./content";
import styles from "./cooperation.module.css";

export function H5LandingPage() {
  return <div id="cooperation-page" className={styles.desktopCanvas}>
    {/* Without scripts, React cannot reveal its completed streamed HTML. Only
        reveal the wrapper containing this public narrative; never other routes
        or the hidden contact bar. Avoid framework-generated IDs/classes. */}
    <noscript><style>{`
      body:has(#cooperation-page) main.message-page[role="status"] { display: none; }
      [hidden]:has(#cooperation-page) { display: block !important; }
    `}</style></noscript>
    <main id="main-content" className={styles.page}>
      <HeroSection />
      <EventMeta />
      <section id="activity" className={styles.activitySection}>
        <SectionHeader number="01" title={["这是一场", "什么样的活动"]} />
        <p className={styles.activityLead}>为年轻人创造真实相遇的<br />城市社交场景。</p>
        <div className={styles.activityDescription}><p>围绕青年交友、兴趣互动、婚恋服务、品牌体验与数字化互动，创造更自然、轻松、有参与感的真实社交机会。</p></div>
        {activityFeatures.map((feature, index) => <StoryBlock key={feature.id} item={feature} index={index} />)}
      </section>
      <section id="brand-value" className={styles.valueSection}>
        <SectionHeader number="02" title={["品牌为什么", "值得参与"]} />
        {brandValues.map((value, index) => <ValueBlock key={value.id} item={value} index={index} />)}
      </section>
      <TimelineSection />
      <section id="partners" className={styles.partnersSection}>
        <SectionHeader number="04" title={["我们正在邀请"]}><p>我们邀请的不是简单的商户，而是希望共同创造青年美好生活场景的合作伙伴。</p></SectionHeader>
        {partnerCategories.map((category, index) => <PartnerCategory key={category.title} item={category} index={index} />)}
      </section>
      <section id="cooperation" className={styles.cooperationSection}>
        <SectionHeader number="05" title={["可以怎么合作"]}><p>合作方式可以根据品牌属性与活动场景共同设计。</p></SectionHeader>
        {cooperationModes.map((mode, index) => <CooperationBlock key={mode.title} item={mode} index={index} />)}
        <div className={styles.cooperationManifesto}><p>合作不必套模板。</p><p>我们更希望根据品牌特点，<br />共同设计真正适合现场的参与方式。</p></div>
      </section>
      <ContactCTA />
    </main>
    <StickyContactBar />
    <ReadingEffects />
    <BrandStoryMotion />
  </div>;
}
