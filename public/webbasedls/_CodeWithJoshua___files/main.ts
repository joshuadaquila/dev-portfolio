import "/src/assets/main.css?t=1753255860686";
import { createApp } from "/node_modules/.vite/deps/vue.js?v=0a4c332b";
import { createPinia } from "/node_modules/.vite/deps/pinia.js?v=0a4c332b";
import "/node_modules/viewerjs/dist/viewer.css";
import Viewer from "/node_modules/.vite/deps/v-viewer.js?v=0a4c332b";
import App from "/src/App.vue";
import router from "/src/router/index.ts?t=1753255860686";
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Viewer);
app.mount("#app");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Fzc2V0cy9tYWluLmNzcydcblxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgY3JlYXRlUGluaWEgfSBmcm9tICdwaW5pYSdcbmltcG9ydCAndmlld2VyanMvZGlzdC92aWV3ZXIuY3NzJ1xuaW1wb3J0IFZpZXdlciBmcm9tICd2LXZpZXdlcidcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuXG5hcHAudXNlKGNyZWF0ZVBpbmlhKCkpXG5hcHAudXNlKHJvdXRlcilcbmFwcC51c2UoVmlld2VyKVxuXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPO0FBRVAsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxtQkFBbUI7QUFDNUIsT0FBTztBQUNQLE9BQU8sWUFBWTtBQUVuQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBRW5CLE1BQU0sTUFBTSxVQUFVLEdBQUc7QUFFekIsSUFBSSxJQUFJLFlBQVksQ0FBQztBQUNyQixJQUFJLElBQUksTUFBTTtBQUNkLElBQUksSUFBSSxNQUFNO0FBRWQsSUFBSSxNQUFNLE1BQU07IiwibmFtZXMiOltdfQ==