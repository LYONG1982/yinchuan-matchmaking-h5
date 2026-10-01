"use client";

import { useEffect, useState } from "react";
import styles from "../cooperation.module.css";

export function StickyContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact || !("IntersectionObserver" in window)) return;
    const update = () => {
      const heroEnd = hero.getBoundingClientRect().bottom;
      const contactStart = contact.getBoundingClientRect().top;
      setVisible(heroEnd <= 0 && contactStart >= window.innerHeight);
    };
    const observer = new IntersectionObserver(update, { threshold: [0, 0.01, 1] });
    observer.observe(hero);
    observer.observe(contact);
    window.addEventListener("pageshow", update);
    window.addEventListener("resize", update);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("pageshow", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <aside data-testid="sticky-contact" className={styles.stickyContact} hidden={!visible} aria-label="招商快捷联系">
    <span>招商合作</span><a href="#contact">立即联系<span aria-hidden="true">↗</span></a>
  </aside>;
}
