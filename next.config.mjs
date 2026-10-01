import path from "node:path";
import { fileURLToPath } from "node:url";

const basePath = "/yinchuan-matchmaking-h5";

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: path.dirname(fileURLToPath(import.meta.url)) },
};

export default config;
