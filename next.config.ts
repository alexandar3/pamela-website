import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
    output: "export",
    basePath,
    assetPrefix,
    images: {
          unoptimized: true,
    },
};

export default nextConfig;
