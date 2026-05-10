import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // أضف إعدادات vite هنا
  vite: {
    base: '/creative-project-show/', // ضروري جداً لـ GitHub Pages
  },
  tanstackStart: {
    // إعداد النشر كملفات ساكنة بدلاً من Cloudflare
    deployment: {
      preset: 'github-pages' 
    }
  },
});
