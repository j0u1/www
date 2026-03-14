import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

export default nextConfig;

module.exports = {
  output: 'standalone',
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "123" }

    resolve(data)
  }, 1000)
})