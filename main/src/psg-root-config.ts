import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@psg/react-single",
  app: () => System.import("@psg/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@psg/react-multiples",
  app: () => System.import("@psg/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@psg/react-lazy",
  app: () => System.import("@psg/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@psg/react-route",
  app: () => System.import("@psg/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@psg/react-header",
  app: () => System.import("@psg/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
