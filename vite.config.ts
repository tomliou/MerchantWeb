import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { copyFileSync, existsSync } from "fs";

export default defineConfig({
  // GitHub Pages 部署在子路徑，必須設定 base
  base: "/MerchantWeb/",
  plugins: [
    react(),
    // 建置後複製 index.html 為 404.html，讓 SPA 路由在 GitHub Pages 可正常運作
    {
      name: "copy-404",
      closeBundle() {
        const outDir = resolve(__dirname, "dist");
        const indexPath = resolve(outDir, "index.html");
        const notFoundPath = resolve(outDir, "404.html");
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath);
        }
      },
    },
  ],
});

