import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "凉茶的温馨小屋",
  description: "凉茶是帅哥",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
