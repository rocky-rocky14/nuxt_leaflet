import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import colors from "vuetify/util/colors";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { ja } from "vuetify/locale";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
        },
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    locale: {
      locale: "ja", // デフォルトを日本語に設定
      messages: { ja }, // 日本語の翻訳データを適用
    },
    components: {
      ...components, // 他の Vuetify コンポーネントも登録
    },
    directives,
  });
  app.vueApp.use(vuetify);
});
