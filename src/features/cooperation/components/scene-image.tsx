import Image from "next/image";
import { sceneImages, type SceneImageKey } from "../images";
import styles from "../cooperation.module.css";

export function SceneImage({ image, className = "", priority = false }: {
  image: SceneImageKey; className?: string; priority?: boolean;
}) {
  const asset = sceneImages[image];
  return <Image
    src={(process.env.NEXT_PUBLIC_BASE_PATH ?? "") + asset.src}
    alt={asset.alt}
    width={asset.width}
    height={asset.height}
    className={`${styles.sceneImage} ${className}`}
    style={{ objectPosition: asset.position }}
    sizes="(max-width: 430px) 100vw, 430px"
    fetchPriority={priority ? "high" : undefined}
    loading={priority ? "eager" : "lazy"}
    quality={75}
  />;
}
