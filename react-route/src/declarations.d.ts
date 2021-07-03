declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "@psg/utils" {
  const utils: {
    listenEvent: <T>(name: string, cb: (event: CustomEvent<T>) => void) => void;
    emitEvent: <T>(name: string, data: T) => void;
  };

  export = utils;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
