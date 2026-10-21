export default defineNitroPlugin((nitroApp) => {
  // Request hooks run before Nitro serves prerendered public HTML.
  nitroApp.hooks.hook("request", async (event) => {
    if (event.method !== "GET" && event.method !== "HEAD") return;
    const url = getRequestURL(event);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (path !== url.pathname && indexablePages().some((page) => page.path === path)) {
      await sendRedirect(event, path + url.search, 301);
    }
  });
});
